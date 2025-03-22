import webview
import os
import sys
import threading
import time
import urllib.request
import tkinter as tk
from tkinter import messagebox
import webbrowser  # 웹 브라우저 모듈 추가

# 파일 경로 설정 함수
def get_path(relative_path):
    try:
        # PyInstaller가 생성한 임시 폴더 경로
        base_path = sys._MEIPASS
    except Exception:
        # 일반 Python 스크립트 실행 경로
        base_path = os.path.abspath(".")
    
    return os.path.join(base_path, relative_path)

# 로컬 파일 URL 생성
def get_local_url():
    return 'file://' + get_path('index.html')

# API 클래스 정의
class Api:
    def __init__(self):
        self.window = None
        self.download_count = 0
        self.last_download_path = None
    
    def set_window(self, window):
        self.window = window
    
    # PyWebView에 노출될 API 메서드 정의
    # open_in_browser: URL을 외부 브라우저(크롬)로 열기
    def open_in_browser(self, url, use_chrome=True):
        """URL을 외부 브라우저로 여는 함수"""
        try:
            if use_chrome:
                # 크롬 브라우저 경로 설정 (Windows 기준)
                chrome_path = None
                if sys.platform == 'win32':
                    # Windows에서 크롬 브라우저 경로
                    chrome_paths = [
                        'C:/Program Files/Google/Chrome/Application/chrome.exe',
                        'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
                        os.path.expanduser('~') + '/AppData/Local/Google/Chrome/Application/chrome.exe'
                    ]
                    for path in chrome_paths:
                        if os.path.exists(path):
                            chrome_path = path
                            break
                    
                    if chrome_path:
                        webbrowser.register('chrome', None, webbrowser.BackgroundBrowser(chrome_path))
                        webbrowser.get('chrome').open(url)
                    else:
                        # 크롬이 없으면 기본 브라우저 사용
                        webbrowser.open(url)
                elif sys.platform == 'darwin':  # macOS
                    # macOS에서 크롬 브라우저 열기
                    os.system(f'open -a "Google Chrome" "{url}"')
                else:  # Linux
                    # Linux에서 크롬 브라우저 열기 시도
                    os.system(f'google-chrome "{url}" || chromium-browser "{url}" || xdg-open "{url}"')
            else:
                # 기본 브라우저 사용
                webbrowser.open(url)
            
            return {'success': True}
        except Exception as e:
            error_msg = str(e)
            print(f"브라우저 열기 실패: {error_msg}")
            self.window.evaluate_js(
                f"alert('외부 브라우저로 열기 실패: {error_msg}')"
            )
            return {'success': False, 'error': error_msg}
    
    # open_urls_in_browser: 여러 URL을 한번에 외부 브라우저로 열기
    def open_urls_in_browser(self, urls, use_chrome=True):
        """여러 URL을 외부 브라우저로 여는 함수"""
        results = []
        success_count = 0
        
        for url in urls:
            result = self.open_in_browser(url, use_chrome)
            results.append(result)
            if result['success']:
                success_count += 1
            
            # 브라우저 과부하 방지를 위해 약간의 지연 추가
            time.sleep(0.5)
        
        return {
            'success': success_count > 0,
            'total': len(urls),
            'success_count': success_count,
            'results': results
        }
    
    # PyWebView에 노출될 API 메서드 정의
    # save_file: 파일 다운로드 및 저장 기능
    def save_file(self, file_url, file_name):
        """파일 다운로드 처리 함수"""
        
        # 다운로드 디렉토리를 마인크래프트 모드 폴더로 추천
        # 사용자 문서 폴더 내의 '마인크래프트 모드' 폴더 경로
        documents_path = os.path.expanduser('~/Documents')
        default_dir = os.path.join(documents_path, '마인크래프트 모드')
        
        # 디렉토리가 없으면 생성
        if not os.path.exists(default_dir):
            try:
                os.makedirs(default_dir)
            except:
                # 생성 실패 시 기본 다운로드 폴더 사용
                default_dir = os.path.expanduser('~/Downloads')
        
        # 파일 저장 대화상자 표시
        save_path = webview.windows[0].create_file_dialog(
            webview.SAVE_DIALOG,
            directory=default_dir,
            save_filename=file_name
        )
        
        if save_path:
            try:
                # 다운로드 진행 중 메시지
                self.window.evaluate_js(f"console.log('다운로드 중: {file_name}')")
                
                # 파일 다운로드
                urllib.request.urlretrieve(file_url, save_path)
                
                # 다운로드 카운트 증가
                self.download_count += 1
                self.last_download_path = os.path.dirname(save_path)
                
                # 첫 번째 다운로드 후 경로 알림
                if self.download_count == 1:
                    self.window.evaluate_js(
                        f"alert('파일이 다음 위치에 저장되었습니다:\\n{os.path.dirname(save_path)}')"
                    )
                
                return {'success': True, 'path': save_path}
            except Exception as e:
                error_msg = str(e)
                self.window.evaluate_js(
                    f"alert('다운로드 실패: {error_msg}')"
                )
                return {'success': False, 'error': error_msg}
        return {'success': False, 'error': '사용자가 취소함'}
    
    # PyWebView에 노출될 API 메서드 정의
    # show_download_path: 다운로드 경로 표시 기능
    def show_download_path(self):
        """마지막 다운로드 경로를 보여주는 함수"""
        try:
            if self.last_download_path and os.path.exists(self.last_download_path):
                self.window.evaluate_js(
                    f"alert('모드 파일이 저장된 경로:\\n{self.last_download_path}')"
                )
                # 파일 탐색기에서 폴더 열기
                try:
                    if sys.platform == 'win32':
                        os.startfile(self.last_download_path)
                    elif sys.platform == 'darwin':  # macOS
                        os.system(f'open "{self.last_download_path}"')
                    else:  # Linux
                        os.system(f'xdg-open "{self.last_download_path}"')
                except Exception as e:
                    print(f"폴더 열기 실패: {str(e)}")
                    
                return {'success': True, 'path': self.last_download_path}
            else:
                # 다운로드 기록이 없는 경우 기본 경로 제공
                documents_path = os.path.expanduser('~/Documents')
                default_dir = os.path.join(documents_path, '마인크래프트 모드')
                
                # 기본 디렉토리가 없으면 다운로드 폴더 안내
                if not os.path.exists(default_dir):
                    default_dir = os.path.expanduser('~/Downloads')
                
                # 사용자에게 추천 경로 안내
                self.window.evaluate_js(
                    f"alert('아직 다운로드한 파일이 없습니다.\\n\\n추천 다운로드 경로:\\n{default_dir}')"
                )
                return {'success': False, 'error': '다운로드 기록 없음', 'suggested_path': default_dir}
        except Exception as e:
            error_msg = str(e)
            print(f"다운로드 경로 확인 중 오류: {error_msg}")
            self.window.evaluate_js(
                f"alert('다운로드 경로 확인 중 오류가 발생했습니다.\\n오류 내용: {error_msg}')"
            )
            return {'success': False, 'error': error_msg}

# 메인 창 생성 및 실행
def create_window():
    # 로딩 표시
    print("마인크래프트 모드 관리자 실행 중...")
    
    # API 인스턴스 생성
    api = Api()
    
    # 창 크기 설정
    window = webview.create_window(
        title='마인크래프트 모드 관리자', 
        url=get_local_url(),
        width=1200, 
        height=800,
        resizable=True,
        min_size=(800, 600),
        js_api=api
    )
    
    api.set_window(window)
    
    # 웹뷰 옵션 설정 (디버그 모드 비활성화)
    webview.start(debug=False)

if __name__ == '__main__':
    create_window()
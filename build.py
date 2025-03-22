import os
import subprocess
import platform

def build_exe():
    # 현재 운영체제 확인
    system = platform.system().lower()
    
    # PyInstaller 명령 구성
    command = [
        'pyinstaller',
        '--name=마인크래프트_모드_관리자',
        '--onefile',
        '--windowed',
        '--icon=icon.ico',  # 아이콘 파일 (존재해야 함)
        '--add-data=index.html;.',  # HTML 파일 포함
        '--add-data=styles.css;.',  # CSS 파일 포함
        '--add-data=script.js;.',   # JS 파일 포함
        'app.py'
    ]
    
    # 운영체제에 따라 경로 구분자 변경
    if system != 'windows':
        # 리눅스나 맥에서는 콜론으로 구분
        for i, item in enumerate(command):
            if item.startswith('--add-data='):
                command[i] = item.replace(';', ':')
    
    print("빌드를 시작합니다...")
    subprocess.call(command)
    print("빌드가 완료되었습니다.")
    
    # 빌드 결과물 경로 안내
    print(f"\n실행 파일은 'dist' 폴더에 생성되었습니다.")

if __name__ == '__main__':
    # 아이콘 파일이 없는 경우 경고
    if not os.path.exists('icon.ico'):
        print("경고: icon.ico 파일이 없습니다. 기본 아이콘이 사용됩니다.")
        
    build_exe() 
import os
import shutil
import glob

def clean():
    """빌드 및 아이콘 생성 시 생성된 파일들을 정리합니다."""
    
    # 삭제할 디렉토리 목록
    directories = [
        'build',
        'dist',
        '__pycache__',
        '.pytest_cache',
        # Python 캐시 파일이 들어있는 모든 __pycache__ 폴더도 검색하여 삭제
        *glob.glob('**/__pycache__', recursive=True)
    ]
    
    # 삭제할 파일 패턴 목록
    file_patterns = [
        '*.spec',      # PyInstaller 스펙 파일
        '*.pyc',       # Python 컴파일 파일
        'icon.png',    # 아이콘 파일 (PNG)
        'icon.ico'     # 아이콘 파일 (ICO)
    ]
    
    # 디렉토리 삭제
    for directory in directories:
        if os.path.exists(directory):
            try:
                shutil.rmtree(directory)
                print(f"삭제됨: {directory}/")
            except Exception as e:
                print(f"오류: {directory} 삭제 실패 - {e}")
    
    # 파일 삭제
    for pattern in file_patterns:
        for file_path in glob.glob(pattern):
            try:
                os.remove(file_path)
                print(f"삭제됨: {file_path}")
            except Exception as e:
                print(f"오류: {file_path} 삭제 실패 - {e}")
    
    print("\n정리 완료! 모든 빌드 관련 파일이 삭제되었습니다.")

if __name__ == "__main__":
    confirmation = input("빌드 관련 파일을 모두 삭제하시겠습니까? (y/n): ").strip().lower()
    if confirmation == 'y':
        clean()
    else:
        print("작업이 취소되었습니다.") 
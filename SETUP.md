# 마인크래프트 모드 관리자 설치 및 실행 가이드

이 문서는 마인크래프트 모드 관리자 프로그램의 설치 및 실행 방법을 설명합니다.

## 사전 요구 사항

- Python 3.7 이상 설치
- pip 패키지 관리자

## 설치 방법

### 1. 필요한 패키지 설치

다음 명령을 실행하여 필요한 패키지를 설치합니다:

```bash
pip install -r requirements.txt
```

### 2. 아이콘 생성 (선택 사항)

프로그램 아이콘을 생성하려면 다음 명령을 실행합니다:

```bash
python create_icon.py
```

### 3. 실행 파일 빌드

다음 명령을 실행하여 실행 파일을 빌드합니다:

```bash
python build.py
```

빌드가 완료되면 `dist` 폴더에 `마인크래프트_모드_관리자.exe` 파일이 생성됩니다.

## 실행 방법

### 개발 모드로 실행

소스 코드에서 직접 실행하려면 다음 명령을 사용합니다:

```bash
python app.py
```

### 배포 버전 실행

빌드된 실행 파일을 실행하려면 `dist` 폴더의 `마인크래프트_모드_관리자.exe` 파일을 더블 클릭합니다.

## 문제 해결

### PyWebView 관련 오류

1. **WebView2 런타임 오류**:
   - Microsoft Edge WebView2 런타임 설치: https://developer.microsoft.com/en-us/microsoft-edge/webview2/

2. **빌드 오류**:
   - 모든 종속성이 설치되었는지 확인하세요:
     ```bash
     pip install -r requirements.txt --upgrade
     ```

3. **실행 오류**:
   - Windows에서 프로그램 실행이 안 되는 경우 관리자 권한으로 실행해보세요.

### PyInstaller 관련 오류

1. **모듈을 찾을 수 없음 오류**:
   - 필요한 모듈을 명시적으로 포함하기 위해 build.py 스크립트를 수정하세요:
     ```python
     command.append('--hidden-import=모듈_이름')
     ```

2. **안티바이러스 검출**:
   - 일부 안티바이러스 프로그램이 PyInstaller로 빌드된 파일을 오탐지할 수 있습니다.
   - 필요에 따라 예외 처리하세요.

## 최소 시스템 요구 사항

- Windows 10 이상
- Microsoft Edge WebView2 런타임
- 4GB RAM 이상
- 100MB 이상의 디스크 공간 
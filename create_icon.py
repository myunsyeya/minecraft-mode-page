from PIL import Image, ImageDraw, ImageFont
import os

def create_icon():
    # 아이콘 크기와 배경색 설정
    size = (256, 256)
    background_color = (139, 195, 74)  # 녹색 (앱 테마색)
    icon_image = Image.new('RGB', size, background_color)
    draw = ImageDraw.Draw(icon_image)
    
    # 간단한 블록 아이콘 그리기
    block_size = 150
    block_pos = ((size[0] - block_size) // 2, (size[1] - block_size) // 2)
    
    # 블록 그리기
    draw.rectangle(
        [block_pos[0], block_pos[1], block_pos[0] + block_size, block_pos[1] + block_size],
        fill=(51, 105, 30),  # 어두운 녹색
        outline=(220, 237, 200),  # 밝은 녹색
        width=5
    )
    
    # 블록 패턴 추가
    draw.line(
        [block_pos[0], block_pos[1], block_pos[0] + block_size, block_pos[1] + block_size],
        fill=(220, 237, 200),
        width=3
    )
    draw.line(
        [block_pos[0] + block_size, block_pos[1], block_pos[0], block_pos[1] + block_size],
        fill=(220, 237, 200),
        width=3
    )
    
    # 텍스트 추가
    try:
        # font = ImageFont.truetype("arial.ttf", 40)
        # Windows 기본 폰트
        font = ImageFont.truetype("C:\\Windows\\Fonts\\malgun.ttf", 40)
        draw.text((size[0]//2, block_pos[1] + block_size + 30), "M", fill=(255, 255, 255), font=font, anchor="mm")
    except Exception as e:
        print(f"폰트 로드 실패: {e}")
        # 폰트를 찾을 수 없는 경우 기본 폰트 사용
        draw.text((size[0]//2, block_pos[1] + block_size + 30), "M", fill=(255, 255, 255), anchor="mm")
    
    # 이미지 저장
    icon_image.save('icon.png')
    
    try:
        # ICO 파일로 변환
        icon_image.save('icon.ico', format='ICO', sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)])
        print("아이콘이 성공적으로 생성되었습니다: icon.ico")
    except Exception as e:
        print(f"ICO 파일 생성 중 오류 발생: {e}")
        print("PNG 파일만 생성되었습니다. ICO 파일 생성을 위해서는 외부 도구를 사용하세요.")

if __name__ == '__main__':
    create_icon() 
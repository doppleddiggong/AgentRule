# Alpha 보고서 슬라이드 생성 - 사용 예시

## 시나리오: 2025년 10월 20~27일 보고서 생성

### 1단계: 작업 환경 설정

```bash
# 작업 디렉토리 생성
mkdir -p /home/claude/alpha_report_oct20_27
cd /home/claude/alpha_report_oct20_27

# 템플릿 파일 복사
cp -r /mnt/skills/user/alpha-report-slides/templates/* .

# 구조 확인
ls -1
# generate.js
# shared-styles.css
# slide1.html
# slide2.html
# slide3.html
# slide4.html
# slide5.html
# slide6.html
# slide7.html
# slide8.html
```

### 2단계: Markdown 보고서 확인

```bash
# 보고서 내용 읽기
view /mnt/user-data/uploads/Alpha_Report_2025-10-20_to_2025-10-27.md
```

### 3단계: 슬라이드 내용 수정

#### slide1.html - 타이틀 수정

```html
<!-- 수정 전 -->
<h2 style="color: rgba(255,255,255,0.9); font-weight: 400;">{{기간}}</h2>

<!-- 수정 후 -->
<h2 style="color: rgba(255,255,255,0.9); font-weight: 400;">2025년 10월 20일 ~ 10월 27일</h2>
```

#### slide2.html - 주요 변경 사항

Markdown의 "## 1. 주요 변경 사항" 섹션 내용을 복사:

```html
<ul style="margin-top: var(--spacing-md);">
  <li><strong>네트워크 및 멀티플레이어:</strong> 로비 시스템 골격 완성, 심리스 트래블 구현, 모듈형 채팅 시스템 도입</li>
  <li><strong>NPC 및 상호작용:</strong> '다산' NPC 가이드 투어 및 질의응답 기능 개발, GameState 중심 상태 통합</li>
  <!-- ... -->
</ul>
```

#### slide3.html - UI/UX 세부 사항

Markdown의 "### UI/UX" 섹션 내용 기반:

```html
<div style="margin-bottom: var(--spacing-md);">
  <h3 style="color: var(--accent-blue); margin-bottom: var(--spacing-xs);">팝업 시스템 리팩토링</h3>
  <p style="color: var(--text-muted);">기존 블루프린트 기반 팝업을 C++ 클래스로 재작성하여 성능 개선</p>
</div>
```

#### slide6.html - 해결된 문제

Markdown의 "## 3. 해결된 주요 문제" 섹션:

```html
<div style="background: #E5E7EB; padding: 10px; margin-bottom: 10px; border-left: 4px solid #3B82F6; border-radius: 4px;">
  <p><strong>MegaPopup 리소스 해제 오류</strong> <span style="color: #6B7280; font-size: 15px;">(2025-10-20)</span></p>
  <p style="color: #6B7280; margin-top: 8px;">위젯이 닫힐 때 사운드 등 리소스가 정상 해제되지 않던 문제 수정</p>
</div>
```

#### slide7.html - 향후 과제

Markdown의 "## 4. 알려진 문제 및 향후 과제" 섹션:

```html
<div style="flex: 1;">
  <h3 style="color: #F97316; margin-bottom: 16px;">🔴 High Priority</h3>
  <ul style="font-size: 18px;">
    <li>로비 UI 재설계 및 단계적 도입</li>
    <li>음성 시스템 장시간 부하 테스트</li>
    <li>'ASK' 기능 완성 및 UX 정의</li>
  </ul>
</div>
```

#### slide8.html - 개발 메트릭

Markdown의 "## 5. 개발 메트릭 요약" 섹션:

```html
<h2 style="color: #3B82F6;">50+</h2>
<p style="color: #6B7280;">총 커밋 수</p>

<!-- ... -->

<p style="color: #111418;">
  <strong>기여자:</strong> dopple, Ju100, kbm
</p>
```

### 4단계: PPTX 생성

```bash
# html2pptx 패키지 확인
npm list -g @ant/html2pptx || npm install -g /mnt/skills/public/pptx/html2pptx.tgz

# PPTX 생성
NODE_PATH="$(npm root -g)" node generate.js

# 출력:
# Converting HTML slides to PowerPoint...
# Font: 배달의 민족 도현체
# Color Palette: 모노톤 + 듀얼 엑센트
#
# Processing slide1.html...
#   ✓ slide1.html converted
# ...
# ✓ Presentation created successfully!
```

### 5단계: 시각적 검증

```bash
# 썸네일 생성
python /mnt/skills/public/pptx/scripts/thumbnail.py Alpha_Report_2025-10-20_to_2025-10-27.pptx --cols 4

# 썸네일 이미지 확인
view thumbnails.jpg
```

### 6단계: 최종 파일 저장

```bash
# outputs 디렉토리로 복사
cp Alpha_Report_2025-10-20_to_2025-10-27.pptx /mnt/user-data/outputs/
cp thumbnails.jpg /mnt/user-data/outputs/Alpha_Report_Thumbnails.jpg
```

---

## 결과물

**생성된 파일:**
- `Alpha_Report_2025-10-20_to_2025-10-27.pptx` (8장)
- `thumbnails.jpg` (미리보기)

**슬라이드 구성:**
1. 타이틀 - 블랙→블루 그라데이션
2. 주요 변경 사항 - 5개 분야 요약
3. UI/UX - 4개 기능 상세
4. 네트워크 - 3개 기능 상세
5. NPC/음성 - 4개 기능 상세
6. 해결된 문제 - 4개 이슈 (블루 카드)
7. 향후 과제 - High(오렌지) / Medium(그레이)
8. 개발 메트릭 - 숫자 박스 + 기여자

**디자인 적용:**
- ✅ 배달의 민족 도현체 폰트
- ✅ 모노톤 + 듀얼 엑센트 (#3B82F6, #F97316)
- ✅ 일관된 간격 및 타이포그래피
- ✅ 전문적인 레이아웃

---

## 시간 절약 팁

### Markdown → HTML 자동 변환 스크립트 (Python)

```python
#!/usr/bin/env python3
import re
from pathlib import Path

def parse_markdown_to_dict(md_file):
    """Markdown 보고서를 딕셔너리로 파싱"""
    content = Path(md_file).read_text(encoding='utf-8')
    
    data = {
        'period': '',
        'main_changes': [],
        'ui_ux': [],
        'network': [],
        'npc_voice': [],
        'issues': [],
        'todos_high': [],
        'todos_medium': [],
        'metrics': {}
    }
    
    # 기간 추출
    period_match = re.search(r'\*\*기간:\*\* (.+)', content)
    if period_match:
        data['period'] = period_match.group(1)
    
    # 주요 변경 사항 추출
    main_section = re.search(r'## 1\. 주요 변경 사항(.+?)## 2\.', content, re.DOTALL)
    if main_section:
        items = re.findall(r'- \*\*(.+?):\*\* (.+)', main_section.group(1))
        data['main_changes'] = items
    
    # ... (다른 섹션 파싱)
    
    return data

def generate_slide_html(template, data):
    """템플릿에 데이터 주입"""
    # 템플릿 변수 치환
    pass

# 사용 예
data = parse_markdown_to_dict('/mnt/user-data/uploads/Alpha_Report.md')
# slide2.html 자동 생성...
```

### 일괄 처리 Bash 스크립트

```bash
#!/bin/bash
# quick_generate.sh

REPORT_MD=$1
OUTPUT_DIR="/home/claude/report_$(date +%Y%m%d)"

mkdir -p "$OUTPUT_DIR"
cd "$OUTPUT_DIR"

# 템플릿 복사
cp -r /mnt/skills/user/alpha-report-slides/templates/* .

# TODO: Markdown 파싱 및 HTML 업데이트
# (Python 스크립트 호출)

# PPTX 생성
NODE_PATH="$(npm root -g)" node generate.js

# 썸네일
python /mnt/skills/public/pptx/scripts/thumbnail.py *.pptx --cols 4

# outputs 복사
cp *.pptx /mnt/user-data/outputs/
cp thumbnails.jpg /mnt/user-data/outputs/

echo "✓ Complete! Check /mnt/user-data/outputs/"
```

---

## 다음 단계

1. **스킬 확장**: 다른 보고서 형식 지원 (Beta, RC, Final)
2. **자동화**: GitHub Actions 연동
3. **테마**: 다크 모드 팔레트 추가
4. **차트**: 개발 메트릭 시각화 추가

---

**작성:** dopple  
**날짜:** 2025-10-28  
**버전:** 1.0.0

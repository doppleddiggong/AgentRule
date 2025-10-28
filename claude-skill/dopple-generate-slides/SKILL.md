---
name: alpha-report-slides
description: "Alpha 단계 개발 보고서를 Markdown 형식에서 PowerPoint 슬라이드로 자동 변환. 배민 도현체 폰트와 모노톤 + 듀얼 엑센트 컬러 팔레트 적용."
version: 1.0.0
author: dopple
---

# Alpha 보고서 슬라이드 생성 스킬

## 개요

Alpha 단계 개발 보고서 Markdown 파일을 전문적인 PowerPoint 슬라이드로 자동 변환하는 스킬입니다.

### 주요 기능
- Markdown 보고서 → 8장 구조화된 슬라이드 자동 변환
- 배달의 민족 도현체 폰트 적용
- 모노톤 + 듀얼 엑센트 컬러 팔레트 (Blue/Orange)
- 일관된 디자인 시스템

---

## 입력 파일 형식

### Alpha 보고서 Markdown 구조

```markdown
# Alpha 단계 개발 보고서

**기간:** YYYY년 MM월 DD일 ~ YYYY년 MM월 DD일

## 1. 주요 변경 사항

- **분야1:** 요약 설명
- **분야2:** 요약 설명
- **분야3:** 요약 설명
- **분야4:** 요약 설명
- **코어 시스템:** 요약 설명

## 2. 세부 변경 사항

### 분야1 (예: UI/UX)
- **기능명1:** 상세 설명
- **기능명2:** 상세 설명

### 분야2 (예: 네트워크)
- **기능명1:** 상세 설명
- **기능명2:** 상세 설명

### 분야3 (예: NPC/AI)
- **기능명1:** 상세 설명

### 분야4 (예: 음성)
- **기능명1:** 상세 설명

## 3. 해결된 주요 문제

- 문제1 설명 (YYYY-MM-DD)
- 문제2 설명 (YYYY-MM-DD)
- 문제3 설명 (YYYY-MM-DD)

## 4. 알려진 문제 및 향후 과제 (TODO)

### 분야1
- **과제명1:** 설명

### 분야2
- **과제명1:** 설명

## 5. 개발 메트릭 요약

- **기간:** YYYY년 MM월 DD일 ~ YYYY년 MM월 DD일
- **총 커밋:** N개
- **주요 기여자:** 이름1, 이름2, 이름3
```

---

## 디자인 시스템

### 폰트
- **메인 폰트:** 배달의 민족 도현체 (BaeMin_DoHyeon)
- **CDN:** `https://cdn.jsdelivr.net/gh/webfontworld/woowahan/Baemin_DoHyeon.css`

### 컬러 팔레트 (모노톤 + 듀얼 엑센트)

| 역할 | HEX | 사용처 |
|------|-----|--------|
| Primary | `#111418` | 제목, 본문 텍스트 |
| Secondary | `#E5E7EB` | 카드/배경 분리 |
| Text Muted | `#6B7280` | 보조 텍스트 |
| Accent Blue | `#3B82F6` | 기술 키워드, 링크, 타이틀 그라데이션 |
| Accent Orange | `#F97316` | High Priority 항목 |
| Background | `#FFFFFF` | 슬라이드 배경 |

### 타이포그래피

```css
--size-h1: 48px;
--size-h2: 36px;
--size-h3: 26px;
--size-body: 20px;
--size-small: 16px;
```

### 간격

```css
--spacing-xs: 8px;
--spacing-sm: 16px;
--spacing-md: 24px;
--spacing-lg: 32px;
--spacing-xl: 48px;
```

---

## 슬라이드 구조 (총 8장)

### 1. 타이틀 슬라이드
- 그라데이션 배경 (블랙 → 블루)
- 보고서 제목
- 기간
- 프로젝트명

### 2. 주요 변경 사항 개요
- 5개 분야 bullet point 요약
- 블루 언더라인 제목

### 3-6. 세부 변경 사항 (분야별)
- 각 슬라이드당 3-4개 기능
- 블루 h3 제목
- 그레이 본문

**슬라이드 순서:**
- Slide 3: UI/UX
- Slide 4: 네트워크
- Slide 5: NPC/음성
- Slide 6: 해결된 문제

### 7. 향후 과제 (TODO)
- 2컬럼 레이아웃
- High Priority (오렌지)
- Medium Priority (그레이)

### 8. 개발 메트릭
- 3개 숫자 박스 (블루)
- 기여자 정보
- 주석

---

## 사용 방법

### 1. Markdown 파일 준비
```bash
# 보고서 파일 확인
view /mnt/user-data/uploads/Alpha_Report_*.md
```

### 2. 작업 디렉토리 설정
```bash
mkdir -p /home/claude/report_slides
cd /home/claude/report_slides
```

### 3. 공통 CSS 파일 생성

`shared-styles.css` 파일을 생성하고 디자인 시스템 변수를 정의합니다.

```css
@import url('https://cdn.jsdelivr.net/gh/webfontworld/woowahan/Baemin_DoHyeon.css');

:root {
  /* 컬러 팔레트 */
  --primary-color: #111418;
  --secondary-color: #E5E7EB;
  --accent-blue: #3B82F6;
  --accent-orange: #F97316;
  --text-muted: #6B7280;
  --bg-white: #FFFFFF;

  /* 타이포그래피 */
  --font-title: 'BaeMin_DoHyeon', 'Malgun Gothic', sans-serif;
  --size-h1: 48px;
  --size-h2: 36px;
  --size-h3: 26px;
  --size-body: 20px;
  --size-small: 16px;

  /* 간격 */
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 32px;
  --spacing-xl: 48px;
}

body {
  font-family: var(--font-title);
  color: var(--primary-color);
  margin: 0;
  padding: 0;
}

h1 { font-size: var(--size-h1); font-weight: 700; line-height: 1.2; }
h2 { font-size: var(--size-h2); font-weight: 600; line-height: 1.3; }
h3 { font-size: var(--size-h3); font-weight: 600; line-height: 1.4; }
p { font-size: var(--size-body); line-height: 1.6; }
strong { color: var(--accent-blue); font-weight: 700; }
```

### 4. 각 슬라이드 HTML 생성

Markdown 보고서 내용을 기반으로 8개 HTML 파일 생성:
- `slide1.html` - 타이틀
- `slide2.html` - 주요 변경 사항
- `slide3.html` - UI/UX
- `slide4.html` - 네트워크
- `slide5.html` - NPC/음성
- `slide6.html` - 해결된 문제
- `slide7.html` - 향후 과제
- `slide8.html` - 개발 메트릭

**중요 규칙:**
- 각 HTML 파일은 `960px × 540px` (16:9)
- CSS 변수 사용 필수
- h1 태그에 border 금지 (div로 감싸기)
- 하단 여백 최소 0.5인치 확보
- bullet 기호(*) 금지 (ul/li 사용)

### 5. PPTX 생성 스크립트 작성

```javascript
const pptxgen = require("pptxgenjs");
const { html2pptx } = require("@ant/html2pptx");
const path = require("path");

async function generatePresentation() {
  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_16x9";
  pptx.author = "YiSan Project Team";
  pptx.title = "Alpha 단계 개발 보고서";

  const slides = [
    "slide1.html", "slide2.html", "slide3.html", "slide4.html",
    "slide5.html", "slide6.html", "slide7.html", "slide8.html"
  ];

  for (const slideFile of slides) {
    await html2pptx(path.join(__dirname, slideFile), pptx);
  }

  await pptx.writeFile({ fileName: "Alpha_Report.pptx" });
  console.log("✓ Presentation created!");
}

generatePresentation();
```

### 6. 실행

```bash
# html2pptx 설치 확인
npm list -g @ant/html2pptx || npm install -g /mnt/skills/public/pptx/html2pptx.tgz

# PPTX 생성
NODE_PATH="$(npm root -g)" node generate.js

# 썸네일 생성 (시각적 검증)
python /mnt/skills/public/pptx/scripts/thumbnail.py Alpha_Report.pptx --cols 4

# outputs로 복사
cp Alpha_Report.pptx /mnt/user-data/outputs/
cp thumbnails.jpg /mnt/user-data/outputs/Alpha_Report_Thumbnails.jpg
```

---

## 슬라이드 템플릿 예시

### Slide 1: 타이틀

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    @import url('https://cdn.jsdelivr.net/gh/webfontworld/woowahan/Baemin_DoHyeon.css');
    /* CSS 변수 정의 */
  </style>
</head>
<body style="width: 960px; height: 540px;">
  <div class="col center" style="height: 100%; background: linear-gradient(135deg, #111418, #3B82F6); padding: 48px;">
    <div>
      <h1 style="color: white; margin-bottom: 24px;">Alpha 단계 개발 보고서</h1>
      <h2 style="color: rgba(255,255,255,0.9);">{{기간}}</h2>
      <p style="color: rgba(255,255,255,0.85); margin-top: 48px; font-size: 26px;">
        {{프로젝트명}}
      </p>
    </div>
  </div>
</body>
</html>
```

### Slide 3-5: 세부 변경 사항

```html
<body style="width: 960px; height: 540px; padding: 32px;">
  <div>
    <h1 style="color: #111418; margin-bottom: 24px;">{{분야명}}</h1>
    
    <div style="margin-bottom: 24px;">
      <h3 style="color: #3B82F6; margin-bottom: 8px;">{{기능명}}</h3>
      <p style="color: #6B7280; font-size: 19px;">{{설명}}</p>
    </div>
    <!-- 반복 -->
  </div>
</body>
```

### Slide 6: 해결된 문제

```html
<body style="width: 960px; height: 540px; padding: 32px 32px 56px 32px;">
  <h1 style="color: #111418; margin-bottom: 24px;">해결된 주요 문제</h1>
  
  <div style="background: #E5E7EB; padding: 10px; margin-bottom: 10px; border-left: 4px solid #3B82F6; border-radius: 4px;">
    <p><strong>{{문제명}}</strong> <span style="color: #6B7280; font-size: 15px;">({{날짜}})</span></p>
    <p style="color: #6B7280; margin-top: 8px;">{{해결방법}}</p>
  </div>
  <!-- 반복 -->
</body>
```

### Slide 7: 향후 과제

```html
<body style="width: 960px; height: 540px; padding: 32px;">
  <h1 style="color: #111418; margin-bottom: 24px;">향후 과제 (TODO)</h1>
  
  <div style="display: flex; gap: 24px;">
    <div style="flex: 1;">
      <h3 style="color: #F97316; margin-bottom: 16px;">🔴 High Priority</h3>
      <ul style="font-size: 18px;">
        <li>{{과제1}}</li>
        <li>{{과제2}}</li>
      </ul>
    </div>
    
    <div style="flex: 1;">
      <h3 style="color: #6B7280; margin-bottom: 16px;">🟡 Medium Priority</h3>
      <ul style="font-size: 18px;">
        <li>{{과제3}}</li>
        <li>{{과제4}}</li>
      </ul>
    </div>
  </div>
</body>
```

---

## 트러블슈팅

### 문제: 웹폰트가 로드되지 않음
**현상:** "Failed to load resource: net::ERR_NAME_NOT_RESOLVED"
**해결:** 정상 동작. 로컬 환경에서 발생하지만 PPTX에는 폰트가 정상 임베드됨.

### 문제: 하단 여백 부족 오류
**오류:** "Text box ends too close to bottom edge"
**해결:** `padding: 32px 32px 56px 32px;` 처럼 하단 패딩 증가

### 문제: h1 border 오류
**오류:** "Text element has border"
**해결:** h1을 div로 감싸고 div에 border 적용

### 문제: bullet 기호 오류
**오류:** "Text element starts with bullet symbol"
**해결:** `*` 대신 `<ul><li>` 사용

---

## 자동화 스크립트 (선택사항)

### Python 기반 자동 생성

```python
#!/usr/bin/env python3
import sys
import subprocess
from pathlib import Path

def generate_slides(markdown_file):
    # Markdown 파싱
    # HTML 생성
    # PPTX 변환
    # 썸네일 생성
    pass

if __name__ == "__main__":
    generate_slides(sys.argv[1])
```

---

## 라이선스

이 스킬은 프로젝트 내부 사용을 위해 제작되었습니다.

**폰트 라이선스:** 배달의 민족 도현체 (우아한형제들)
**pptx 스킬:** Anthropic 제공

---

## 버전 히스토리

- **1.0.0** (2025-10-28): 초기 버전 생성
  - 8장 구조 템플릿
  - 배민 도현체 + 모노톤 듀얼 엑센트 팔레트
  - Alpha 보고서 전용 레이아웃

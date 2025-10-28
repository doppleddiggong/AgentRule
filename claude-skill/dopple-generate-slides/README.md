# Alpha 보고서 슬라이드 생성 스킬

## 빠른 시작

```bash
# 1. 스킬 템플릿 복사
cp -r /mnt/skills/user/alpha-report-slides/templates/* /home/claude/my_report/

# 2. Markdown 파일 기반으로 HTML 수정
# slide2.html ~ slide8.html 내용 업데이트

# 3. PPTX 생성
cd /home/claude/my_report
NODE_PATH="$(npm root -g)" node generate.js

# 4. 결과 확인
python /mnt/skills/public/pptx/scripts/thumbnail.py *.pptx --cols 4
```

## 템플릿 파일 구조

```
templates/
├── shared-styles.css      # 공통 CSS (수정 불필요)
├── slide1.html            # 타이틀 (기간/프로젝트명만 수정)
├── slide2.html            # 주요 변경 사항 (5개 항목)
├── slide3.html            # UI/UX 세부 사항 (3-4개)
├── slide4.html            # 네트워크 세부 사항 (3개)
├── slide5.html            # NPC/음성 세부 사항 (4개)
├── slide6.html            # 해결된 문제 (4개)
├── slide7.html            # 향후 과제 (High/Medium)
├── slide8.html            # 개발 메트릭
└── generate.js            # PPTX 변환 스크립트
```

## 디자인 커스터마이징

### 색상 변경

`shared-styles.css` 또는 각 HTML의 `:root` 섹션에서:

```css
--primary-color: #111418;      /* 제목/본문 */
--accent-blue: #3B82F6;        /* 강조1 */
--accent-orange: #F97316;      /* 강조2 */
```

### 폰트 변경

```css
@import url('원하는_폰트_CDN_URL');
--font-title: '폰트명', 'Malgun Gothic', sans-serif;
```

## 자주 사용하는 패턴

### 항목 추가 (slide3-5)

```html
<div style="margin-bottom: 24px;">
  <h3 style="color: #3B82F6; margin-bottom: 8px;">새 기능명</h3>
  <p style="color: #6B7280; font-size: 19px;">설명 텍스트</p>
</div>
```

### 문제 항목 추가 (slide6)

```html
<div style="background: #E5E7EB; padding: 10px; margin-bottom: 10px; border-left: 4px solid #3B82F6; border-radius: 4px;">
  <p><strong>문제명</strong> <span style="color: #6B7280; font-size: 15px;">(2025-10-28)</span></p>
  <p style="color: #6B7280; margin-top: 8px;">해결 방법 설명</p>
</div>
```

## 문제 해결

**Q: 폰트가 적용 안됨**  
A: `@import url()` 구문이 `<style>` 태그 첫 줄에 있는지 확인

**Q: 하단 텍스트 잘림**  
A: `<body>` 태그의 하단 패딩을 `56px` 이상으로 증가

**Q: 생성 실패**  
A: html2pptx 설치 확인: `npm install -g /mnt/skills/public/pptx/html2pptx.tgz`

## 예시 출력

실행 후 다음 파일들이 생성됩니다:
- `Alpha_Report_YYYY-MM-DD_to_YYYY-MM-DD.pptx` - 최종 슬라이드
- `thumbnails.jpg` - 미리보기 이미지

---

**제작:** dopple  
**버전:** 1.0.0  
**업데이트:** 2025-10-28

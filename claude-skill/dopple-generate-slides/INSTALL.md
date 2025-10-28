# Alpha 보고서 슬라이드 스킬 - 설치 가이드

## 방법 1: GitHub에서 설치 (추천)

### 1-1. GitHub Repository 설정 (최초 1회)

```bash
# Claude.ai에서 실행
cd /mnt/skills/user/alpha-report-slides

# Git 초기화
git init
git add .
git commit -m "Initial commit: Alpha report slides skill v1.0.0"

# GitHub repo 생성 후 연결
git remote add origin https://github.com/YOUR_USERNAME/alpha-report-slides-skill.git
git branch -M main
git push -u origin main
```

### 1-2. 다른 PC에서 설치

```bash
# Claude.ai 접속 후
cd /mnt/skills/user/

# GitHub에서 클론
git clone https://github.com/YOUR_USERNAME/alpha-report-slides-skill.git alpha-report-slides

# 설치 확인
ls -la alpha-report-slides/
# SKILL.md, README.md, templates/ 등이 보이면 성공
```

### 1-3. 업데이트

```bash
cd /mnt/skills/user/alpha-report-slides
git pull origin main
```

---

## 방법 2: 압축 파일로 설치

### 2-1. 압축 파일 생성

```bash
# 원본 PC의 Claude.ai에서
cd /mnt/skills/user
tar -czf /mnt/user-data/outputs/alpha-report-slides-skill-v1.0.0.tar.gz alpha-report-slides/
```

**다운로드:** [alpha-report-slides-skill-v1.0.0.tar.gz](computer:///mnt/user-data/outputs/alpha-report-slides-skill-v1.0.0.tar.gz) (11KB)

### 2-2. 다른 PC에 설치

```bash
# 1. 압축 파일을 Claude.ai에 업로드 (drag & drop)
# 2. 압축 해제
cd /mnt/skills/user/
tar -xzf /mnt/user-data/uploads/alpha-report-slides-skill-v1.0.0.tar.gz

# 3. 확인
ls -la alpha-report-slides/
```

---

## 방법 3: Google Drive / Notion (백업용)

### 3-1. Google Drive에 백업

```bash
# 압축 파일 생성 후 구글 드라이브에 업로드
# 링크 공유 설정: "링크가 있는 모든 사용자"
```

### 3-2. 다운로드 및 설치

```bash
# 구글 드라이브 링크에서 다운로드
# Claude.ai에 업로드 후 압축 해제
cd /mnt/skills/user/
tar -xzf /mnt/user-data/uploads/alpha-report-slides-skill-v1.0.0.tar.gz
```

---

## 설치 후 사용법

### 빠른 테스트

```bash
# 템플릿 복사
mkdir -p ~/test_slides
cp -r /mnt/skills/user/alpha-report-slides/templates/* ~/test_slides/
cd ~/test_slides

# 생성 테스트
NODE_PATH="$(npm root -g)" node generate.js

# 결과 확인
ls -lh *.pptx
```

### 실제 보고서 생성

```bash
# 작업 디렉토리 생성
mkdir -p ~/alpha_report_$(date +%Y%m%d)
cd ~/alpha_report_$(date +%Y%m%d)

# 템플릿 복사
cp -r /mnt/skills/user/alpha-report-slides/templates/* .

# Markdown 보고서 기반으로 HTML 수정
# slide1.html ~ slide8.html 내용 업데이트

# PPTX 생성
NODE_PATH="$(npm root -g)" node generate.js

# 썸네일 확인
python /mnt/skills/public/pptx/scripts/thumbnail.py *.pptx --cols 4

# outputs로 복사
cp *.pptx /mnt/user-data/outputs/
cp thumbnails.jpg /mnt/user-data/outputs/
```

---

## 의존성 확인

### 필수 패키지

```bash
# 1. Node.js & npm (Claude.ai에 기본 설치)
node --version  # v18+
npm --version   # v9+

# 2. pptxgenjs (전역 설치)
npm list -g pptxgenjs || npm install -g pptxgenjs

# 3. html2pptx (Anthropic 제공)
npm list -g @ant/html2pptx || npm install -g /mnt/skills/public/pptx/html2pptx.tgz

# 4. Python 3 (썸네일 생성용)
python3 --version  # v3.9+
```

---

## 트러블슈팅

### 문제: 스킬 디렉토리가 없음

```bash
ls /mnt/skills/user/alpha-report-slides
# No such file or directory

# 해결: 다시 설치
cd /mnt/skills/user/
# GitHub clone 또는 tar 압축 해제
```

### 문제: html2pptx 패키지 없음

```bash
node generate.js
# Error: Cannot find module '@ant/html2pptx'

# 해결: 패키지 재설치
npm install -g /mnt/skills/public/pptx/html2pptx.tgz
```

### 문제: PPTX 생성 실패

```bash
# 로그 확인
NODE_PATH="$(npm root -g)" node generate.js 2>&1 | tee error.log

# HTML 파일 문법 검증
for f in slide*.html; do
  echo "Checking $f..."
  # 기본 HTML 구조 확인
done
```

---

## 버전 관리 (GitHub 사용 시)

### 새 버전 릴리스

```bash
cd /mnt/skills/user/alpha-report-slides

# 변경 사항 커밋
git add .
git commit -m "v1.1.0: Add dark mode palette"

# 태그 생성
git tag -a v1.1.0 -m "Version 1.1.0"
git push origin main --tags
```

### 특정 버전 설치

```bash
# v1.0.0 설치
git clone --branch v1.0.0 https://github.com/YOUR_USERNAME/alpha-report-slides-skill.git

# 또는 기존 repo에서
git checkout v1.0.0
```

---

## 팀원과 공유

### GitHub 공유 (Private Repo)

1. GitHub에서 Private Repository 생성
2. Collaborators 초대
3. 팀원들이 각자 clone

### 압축 파일 공유

1. `alpha-report-slides-skill-v1.0.0.tar.gz` 다운로드
2. Slack/Email로 전송
3. 팀원들이 각자 압축 해제

---

## 자동 백업 스크립트 (선택사항)

```bash
#!/bin/bash
# backup-skill.sh

SKILL_DIR="/mnt/skills/user/alpha-report-slides"
BACKUP_DIR="/mnt/user-data/outputs/skill-backups"
DATE=$(date +%Y%m%d_%H%M%S)

mkdir -p "$BACKUP_DIR"
cd /mnt/skills/user/

tar -czf "$BACKUP_DIR/alpha-report-slides-$DATE.tar.gz" alpha-report-slides/

echo "✓ Backup saved: $BACKUP_DIR/alpha-report-slides-$DATE.tar.gz"

# 오래된 백업 삭제 (30일 이상)
find "$BACKUP_DIR" -name "*.tar.gz" -mtime +30 -delete
```

```bash
# 실행 권한
chmod +x backup-skill.sh

# 실행
./backup-skill.sh
```

---

## 요약

| 방법 | 장점 | 단점 | 추천 |
|------|------|------|------|
| **GitHub** | 버전 관리, 자동 업데이트, 협업 | GitHub 계정 필요 | ⭐⭐⭐⭐⭐ |
| **압축 파일** | 간단, 빠름 | 버전 관리 수동 | ⭐⭐⭐ |
| **Google Drive** | 접근 쉬움 | 버전 관리 어려움 | ⭐⭐ |

**추천 방식:** GitHub Private Repo

---

**파일 크기:** 11KB (압축)  
**설치 시간:** ~1분  
**버전:** 1.0.0  
**작성:** 2025-10-28

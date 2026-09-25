# PDF · Web Portfolio 통합 계획

마지막 업데이트: 2026-09-25

## 1. 목표

현재 제작 중인 SK hynix AI Hackathon 2026 지원용 PDF 포트폴리오와 공개 웹 포트폴리오를 하나의 Git 저장소에서 관리한다.

- PDF 버전은 현재의 A4 Landscape 9페이지 구성과 출력 규칙을 유지한다.
- 웹 버전은 PDF 화면을 확대하거나 세로로 이어 붙이지 않고, 반응형 case study 사이트로 별도 설계한다.
- 프로젝트 사실, 역할, 기술, 성과, 공개 제한은 공통 데이터에서 관리한다.
- `https://bhbh1226.github.io/`에는 웹 버전만 배포한다.
- 완성된 PDF는 웹에서 다운로드할 수 있도록 제공한다.

핵심 원칙은 **콘텐츠는 공유하고 표현 계층은 분리하는 것**이다.

---

## 2. 확인된 현재 상태

### 2.1 현재 PDF 포트폴리오 저장소

- 로컬 원본 저장소: `/Users/bhbh1226/coding/portfolio`
- 현재 Codex worktree: `/Users/bhbh1226/.codex/worktrees/1dbf/portfolio`
- 기본 브랜치: `main`
- 기술 스택: React + Vite + CSS Modules
- 9개 페이지가 모두 구현되어 있으며 PDF는 약 15.9MB이다.
- 현재 Git 저장소에는 remote가 등록되어 있지 않다.
- Codex worktree는 detached HEAD이므로 여기서 곧바로 원격 기본 브랜치에 push하지 않는다.

### 2.2 기존 GitHub Pages 저장소

- 저장소: `https://github.com/bhbh1226/bhbh1226.github.io`
- 공개 상태: Public
- 기본 브랜치: `master`
- 확인 시점 기준 17 commits
- 기술 스택: React 17 + Create React App + react-app-rewired + Sass + Framer Motion 5
- 배포 방식: `build/` 폴더를 저장소에 커밋하고 `git subtree`로 `gh-pages`에 push하는 구조
- 주요 구현:
  - 6개 화면을 가로로 이동하는 wheel 기반 navigation
  - 배경색 전환
  - 별, 구름, 선, 바다의 parallax animation
  - 마지막 contact/name card
- 현재 콘텐츠 영역은 대부분 placeholder 상태이다.
- 모바일과 태블릿은 `MobileHider`로 차단되어 있다.
- `screen_size = window.innerWidth`가 module load 시 고정되어 resize 대응이 어렵다.
- `.env`가 Git에 포함되어 있다. 현재 확인된 항목은 `SASS_PATH`지만, 새 구조에서는 `.env` 파일 자체를 추적하지 않는다.
- `build/`가 소스와 함께 추적되어 있어 source/build 경계가 불명확하다.

### 판단

기존 사이트를 그대로 확장하지 않는다.

이유:

1. CRA와 React 17 기반이라 현재 Vite 프로젝트보다 유지보수성이 낮다.
2. 모바일을 지원하지 않아 포트폴리오 공개 사이트의 기반으로 사용하기 어렵다.
3. 가로 wheel을 가로채는 방식은 trackpad, keyboard, touch, 접근성 대응에 불리하다.
4. 실제 프로젝트 콘텐츠를 수용할 구조가 거의 구현되어 있지 않다.
5. 현재 PDF 프로젝트에 이미 최신 콘텐츠와 디자인 시스템이 구축되어 있다.

다만 다음 아이디어는 새 웹사이트에서 재해석할 수 있다.

- 스크롤에 따른 배경 톤 변화
- 여러 깊이의 parallax
- 마지막 contact card로 수렴하는 흐름
- Framer Motion을 이용한 화면 전환 경험

기존 구현 코드를 그대로 복사하기보다 새 접근성·반응형 구조 안에서 다시 구현한다.

---

## 3. 선택한 Git 통합 전략

### 결론

**기존 GitHub Pages 저장소를 별도 integration checkout으로 clone한 뒤, 현재 PDF 저장소의 `main` history를 unrelated-history merge로 합친다.**

현재 PDF 저장소에 바로 `origin`을 붙여 `master`를 덮어쓰거나 force push하지 않는다.

### 이 방식을 선택하는 이유

- 기존 GitHub Pages의 17개 commit을 보존할 수 있다.
- 현재 PDF 저장소의 commit history도 보존할 수 있다.
- 두 저장소가 서로 다른 root history를 갖고 있어 단순 fast-forward push는 불가능하다.
- integration branch에서 충돌과 최종 파일 구조를 충분히 검토할 수 있다.
- `master`에 직접 작업하지 않고 PR 또는 명시적 merge로 전환할 수 있다.
- 문제가 생기면 기존 `master`와 legacy tag로 즉시 돌아갈 수 있다.

### 하지 않을 방식

- 기존 저장소 파일을 현재 저장소에 수동 복사한 뒤 history를 버리는 방식
- 현재 PDF 저장소를 `bhbh1226.github.io`에 force push하는 방식
- 기존 CRA 앱 안에 PDF 코드를 그대로 섞는 방식
- 두 저장소를 장기간 별도로 유지하며 콘텐츠를 수동 동기화하는 방식
- `build/` 결과물을 계속 Git에 직접 커밋하는 방식

---

## 4. 안전한 통합 절차

아래 명령은 계획이며, 실행 전에 working tree와 원격 브랜치를 다시 확인한다.

### Phase A — 백업과 integration checkout

```bash
cd /Users/bhbh1226/coding
git clone https://github.com/bhbh1226/bhbh1226.github.io.git portfolio-site-integration
cd portfolio-site-integration

git fetch origin --prune
git status
git branch -a
git tag legacy-site-before-portfolio-redesign-2026-09-25 origin/master
git switch -c codex/portfolio-web-redesign origin/master
```

tag는 로컬 검증 후 원격에 push한다. 원격 변경이므로 실행 시점에 다시 확인한다.

### Phase B — 현재 PDF history 연결

로컬 경로를 임시 remote로 등록한다.

```bash
git remote add portfolio-source /Users/bhbh1226/coding/portfolio
git fetch portfolio-source main
git merge portfolio-source/main --allow-unrelated-histories --no-commit
```

이 merge는 `package.json`, `package-lock.json`, `src/`, `README.md` 등에서 충돌할 가능성이 높다. 자동 해결을 신뢰하지 않고 아래 기준으로 수동 정리한다.

- 현재 Vite 포트폴리오를 새 application 기반으로 선택한다.
- 기존 CRA application은 production 코드에서 제거한다.
- 기존 사이트의 보존 가치가 있는 코드와 이미지는 merge 직전 tag/history에서 조회할 수 있으므로 중복 보관하지 않는다.
- 기존 `.env`, `build/`, CRA boilerplate test와 service worker 파일은 최종 tree에 포함하지 않는다.
- 기존 `master` history와 현재 PDF history가 모두 merge commit의 parent로 남는지 확인한다.

### Phase C — 검증 후 원격 작업 브랜치 push

```bash
npm install
npm run build
npm run build:web
npm run build:pdf
git diff --check
git log --graph --oneline --all --decorate
git push -u origin codex/portfolio-web-redesign
```

`master`에는 직접 push하지 않는다. GitHub에서 diff와 배포 preview를 확인한 뒤 새 `main` 브랜치로 전환한다.

### Phase D — 기본 브랜치를 `master`에서 `main`으로 전환

통합이 끝난 뒤에는 현재 PDF 저장소와 동일하게 GitHub Pages 저장소의 기본 브랜치도 `main`으로 통일한다. 브랜치 이름 변경과 Pages 배포 방식 변경을 동시에 섞지 않고 다음 순서로 진행한다.

1. `codex/portfolio-web-redesign`에서 build, PDF 회귀, 웹 preview를 모두 검증한다.
2. 검증된 통합 commit을 기준으로 원격 `main` 브랜치를 생성한다.
3. GitHub Actions가 `main` push를 기준으로 실행되도록 설정한다.
4. GitHub Pages source를 branch 직접 배포가 아닌 GitHub Actions로 전환한다.
5. GitHub repository의 default branch를 `master`에서 `main`으로 변경한다.
6. branch protection, Actions trigger, README badge, 문서와 링크에서 `master` 참조를 `main`으로 변경한다.
7. production URL과 case-study 직접 진입을 확인한다.
8. 안정화 전에는 원격 `master`와 `gh-pages`를 삭제하지 않는다.
9. 안정화 후에도 기존 `master` tip은 legacy tag로 보존한다.

예상 명령은 다음과 같다. 실제 실행 전 원격 상태를 다시 확인한다.

```bash
git switch codex/portfolio-web-redesign
git branch main
git push -u origin main
```

그다음 GitHub repository 설정에서 default branch를 `main`으로 바꾼다. 이 설정 변경이 완료되기 전에는 `master`를 삭제하지 않는다.

원격 `master` 삭제는 필수가 아니다. 혼동 방지를 위해 삭제한다면 `main` 배포가 안정화되고 legacy tag가 원격에 존재하는 것을 확인한 뒤 별도 단계로 수행한다.

### Rollback

- 통합 전 상태: `legacy-site-before-portfolio-redesign-2026-09-25`
- 현재 PDF 상태: `portfolio-source/main` 또는 merge parent
- production 배포 실패 시 GitHub Pages source를 이전 정상 deployment로 되돌린다.

---

## 5. 목표 저장소 구조

통합 후 저장소는 다음 구조를 목표로 한다.

```text
bhbh1226.github.io/
├── apps/
│   ├── pdf/
│   │   ├── index.html
│   │   ├── src/
│   │   ├── styles/
│   │   └── vite.config.js
│   └── web/
│       ├── index.html
│       ├── public/
│       ├── src/
│       └── vite.config.js
├── packages/
│   ├── portfolio-content/
│   └── design-tokens/
├── assets/
│   ├── shared/
│   ├── pdf/
│   └── web/
├── docs/
├── scripts/
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
├── package.json
└── package-lock.json
```

### `apps/pdf`

- 현재 9페이지 React/Vite 구현을 이동한다.
- A4 Landscape 규격과 print stylesheet를 그대로 유지한다.
- screen view는 PDF 검수를 위한 preview로만 취급한다.
- animation dependency를 추가하지 않는다.
- `npm run build:pdf`와 PDF export workflow를 독립적으로 유지한다.

### `apps/web`

- 반응형 공개 웹 포트폴리오이다.
- 프로젝트 index와 개별 case study route를 제공한다.
- animation, scroll interaction, SVG diagram, 선택적 WebGL을 사용한다.
- GitHub Pages에는 이 앱의 build output만 배포한다.

### `packages/portfolio-content`

다음과 같은 사실 데이터를 공유한다.

```js
{
  slug: 'magar-xai',
  category: 'AI_RESEARCH',
  title: 'MaxViT 기반 CLE 종양 분류와 MAGAR XAI',
  problem: '...',
  contribution: [],
  tech: [],
  results: [],
  disclosure: {
    syntheticVisualOnly: true,
    restrictedAssets: [],
  },
}
```

공유 대상:

- 프로젝트명과 한 줄 설명
- 문제와 접근 방법
- 본인 역할
- 사용 기술
- 검증된 결과와 publication/award
- synthetic visual 표기
- 비공개 정보와 사용 금지 asset

공유하지 않을 대상:

- PDF 전용 줄바꿈
- PDF의 mm/pt layout 값
- 웹 animation state
- 웹 route와 interaction configuration

### `packages/design-tokens`

- 공통 검은 배경과 typography color
- AI RESEARCH `#a63b2d`
- GPU INFRA `#3f8f66`
- SERVICE `#5b87b5`
- PROFILE `#8e78b8`

PDF와 웹은 색상 identity를 공유하지만 layout scale과 typography scale은 별도로 둔다.

---

## 6. 웹 정보 구조

### 기본 route

```text
/
/work/ica-morphology
/work/digital-phenotyping
/work/lung-ventilation
/work/magar-xai
/work/gpu-infrastructure
/work/recappers
/work/time-blending
/profile
```

SPA routing을 사용할 경우 GitHub Pages의 직접 URL 진입 문제를 해결해야 한다. 구현 단계에서 다음 둘 중 하나를 선택한다.

1. React Router + GitHub Pages 404 fallback
2. 프로젝트 상세를 hash route로 구성

사용자 사이트 root 도메인이므로 `base: '/'`를 사용한다. 가능하면 clean URL과 접근성이 나은 404 fallback 방식을 우선 검토한다.

### Home

- 이름과 핵심 포지션
- Medical AI · AI Service · GPU Infrastructure의 연결 구조
- 대표 프로젝트 index
- PDF 다운로드
- GitHub · LinkedIn · Email

### Case Study 공통 구조

```text
Problem
  ↓
Input / Data
  ↓
Research or System Pipeline
  ↓
My Contribution
  ↓
Result
  ↓
Limit / Disclosure
```

웹의 넓은 공간을 사용하되 논문 초록식 장문을 만들지 않는다. 실제 결과물, architecture, flow, 본인 기여를 우선한다.

---

## 7. Motion 및 기술 표현 전략

목표는 애니메이션 수가 많은 사이트가 아니라 **기술 구조가 움직임으로 이해되는 사이트**이다.

### 공통 원칙

- Hero 한 곳에만 WebGL 또는 Canvas를 강하게 사용한다.
- 연구 pipeline은 SVG와 HTML/CSS를 기본으로 한다.
- 프로젝트마다 대표 interaction은 하나만 둔다.
- scroll hijacking은 사용하지 않는다.
- native vertical scroll을 유지한다.
- `prefers-reduced-motion`에서는 모든 핵심 정보를 정적 상태로 제공한다.
- mouse, keyboard, touch가 같은 정보에 접근할 수 있어야 한다.
- animation이 실패해도 내용과 navigation은 동작해야 한다.

### 프로젝트별 대표 interaction

| Project | Interaction |
| --- | --- |
| ICA Morphology | landmark → centerline → 좌우 feature 결합 |
| Digital Phenotyping | longitudinal feature → participant split → nested CV |
| Lung Ventilation | 같은 입력이 네 모델 경로로 분기되고 두 평가 관점으로 비교 |
| MAGAR XAI | Block/Grid attention → gradient weighting → reassembly → heatmap |
| GPU Infrastructure | 분산 서버가 인증·스토리지·접속·스케줄링으로 통합 |
| Recappers | PDF + Audio → Lecture Context → AI Content → Professor Review |
| 잔향 | 사진 두 장 → Gemini prompt → Kling task/polling → video |

### 기술 스택 후보

- React + Vite
- React Router
- Motion 또는 최신 Framer Motion
- SVG + CSS transitions
- Intersection Observer
- React Three Fiber는 Hero에 실제 이점이 있을 때만 추가
- 이미지 AVIF/WebP 최적화

라이브러리는 visual direction과 첫 prototype을 검증한 뒤 최소한으로 추가한다.

---

## 8. 구현 단계

### Milestone 0 — Git 통합

- 기존 Pages 저장소 전체 branch와 deployment 상태 재확인
- legacy tag 생성
- integration branch 생성
- unrelated histories merge
- 현재 Vite 프로젝트를 기준으로 충돌 해결
- 기존 `.env`, `build/`, CRA boilerplate 정리
- 양쪽 history 보존 확인

완료 조건:

- 기존 17 commits와 현재 PDF commits를 모두 조회할 수 있다.
- force push 없이 작업 branch가 원격에 올라간다.
- 현재 PDF build가 통합 전과 동일하게 통과한다.

### Milestone 1 — Workspace와 공통 콘텐츠

- `apps/pdf`, `apps/web`, `packages/portfolio-content` 구성
- 현재 PDF 앱 이동
- 공통 project schema 작성
- PDF의 문구를 단계적으로 공통 데이터에 연결
- 민감정보와 disclosure rule을 schema에 포함

완료 조건:

- PDF 9페이지의 layout과 출력 결과에 회귀가 없다.
- 웹 앱의 빈 shell이 별도 build된다.

### Milestone 2 — Web foundation

- design token
- responsive typography와 spacing
- navigation
- Hero prototype
- project index
- PDF download
- reduced-motion fallback
- metadata, favicon, 404 처리

완료 조건:

- desktop/mobile에서 첫 화면과 project index가 정상 작동한다.
- WebGL을 끈 환경에서도 핵심 콘텐츠가 보인다.
- GitHub Actions preview/deployment pipeline이 동작한다.

### Milestone 3 — 대표 case study

서로 성격이 다른 두 프로젝트를 먼저 구현한다.

1. MAGAR XAI — 연구와 XAI 시각화
2. GPU Infrastructure — 시스템과 인프라 구조

이 두 페이지에서 공통 case-study shell, animation 수준, 모바일 축약 규칙을 확정한다.

### Milestone 4 — 전체 프로젝트 확장

- ICA Morphology
- Digital Phenotyping
- Lung Ventilation
- Recappers
- 잔향
- Profile · Awards · Early Work

### Milestone 5 — 최종 품질 검수

- Chrome, Safari, Firefox
- desktop, tablet, mobile
- keyboard navigation
- touch interaction
- `prefers-reduced-motion`
- 직접 case-study URL 진입
- 404 fallback
- image loading과 layout shift
- 의료·연구 disclosure 재검수
- PDF 링크 및 파일 크기 확인
- Lighthouse Performance/Accessibility 점검

---

## 9. 배포 구조

### 권장 방식

- source/default branch: `main`
- 작업 branch: `codex/portfolio-web-redesign`
- GitHub Actions가 `apps/web`을 build
- build artifact만 GitHub Pages에 배포
- `build/` 또는 `dist/`는 Git에 커밋하지 않음

예상 workflow:

```text
push / merge to main
        ↓
npm ci
        ↓
npm run build:web
        ↓
upload Pages artifact
        ↓
deploy-pages
```

PDF build와 웹 배포는 분리한다.

- `build:web`: GitHub Pages 배포 대상
- `build:pdf`: PDF preview bundle 검증
- `export:pdf`: 로컬 또는 별도 workflow에서 PDF 생성

최종 PDF는 `apps/web/public/files/park-pyeongjin-portfolio.pdf` 같은 경로에 복사해 다운로드 링크로 제공할 수 있다. PDF가 바뀔 때만 명시적으로 갱신한다.

---

## 10. 보안·공개 범위 점검

통합 전에 반드시 확인한다.

- 기존 `.env`를 새 기본 브랜치에서 제거하고 `.env.example`만 유지
- 기존 history에 secret이 있었는지 검사
- API key가 포함된 저장소나 코드 캡처를 웹에서 링크하지 않음
- 실제 의료영상, landmark 좌표, 내부 cohort 정보 사용 금지
- synthetic visual과 schematic heatmap 표기 유지
- 공개 승인 전 PECT 세부 내용 제외
- 이메일과 공개 프로필 링크 외의 개인정보는 제거
- 기존 사이트의 전화번호와 Naver 이메일은 새 콘텐츠 기준에 따라 제거 또는 사용자 확인 후 사용

중요: 파일을 최신 commit에서 삭제해도 과거 Git history에는 남는다. 실제 secret이 발견되면 단순 삭제가 아니라 key 폐기·재발급과 history 정리가 필요하다.

---

## 11. 성능·접근성 목표

- main body 16px 이상
- 주요 UI label 14px 이상
- 모바일에서 가로 overflow 없음
- animation 없는 fallback 제공
- initial hero asset lazy loading 또는 staged loading
- route 단위 code splitting
- 이미지 크기 명시로 layout shift 방지
- focus visible 유지
- 의미 없는 자동 반복 animation 최소화
- Lighthouse Performance 85 이상을 1차 목표로 사용
- Lighthouse Accessibility 95 이상을 목표로 사용

성능 수치는 개발 장비의 단일 실행 결과가 아니라 동일 조건에서 반복 확인한다.

---

## 12. 다음 실행 순서

다음 작업 세션에서는 아래 순서를 따른다.

1. GitHub CLI 인증 문제 재확인
2. 원격 `master`, `gh-pages` 및 Pages 설정 확인
3. 기존 저장소의 전체 clone을 integration 디렉터리에 생성
4. legacy tag와 `codex/portfolio-web-redesign` branch 준비
5. 현재 PDF 저장소를 local remote로 연결
6. `--allow-unrelated-histories --no-commit` merge
7. 예상 충돌 목록을 사용자에게 보고
8. Vite 기반 workspace 구조로 충돌 해결
9. PDF build와 visual regression 확인
10. 원격 `main` 생성, GitHub default branch와 Actions trigger 전환
11. `main` 기반 GitHub Pages 배포 확인
12. 웹 foundation 구현 시작

원격 tag push, 작업 branch push, PR 생성, Pages 설정 변경은 실제 외부 상태를 바꾸므로 각 단계의 검증이 끝난 뒤 수행한다.

---

## 13. 현재 결정 요약

- 기존 GitHub Pages 저장소를 버리거나 force push하지 않는다.
- 기존 사이트를 clone한 integration checkout에서 작업한다.
- 두 저장소의 history를 unrelated-history merge로 보존한다.
- 통합 검증 후 GitHub 기본 브랜치를 `master`에서 `main`으로 전환한다.
- `main` 배포 안정화 전에는 기존 `master`와 `gh-pages`를 삭제하지 않는다.
- 현재 Vite 포트폴리오를 새 기술 기반으로 채택한다.
- 기존 CRA 코드는 archive history로 보존하고 production에서는 제거한다.
- PDF와 웹은 별도 app으로 구성한다.
- 프로젝트 사실과 disclosure만 공통 package로 공유한다.
- GitHub Actions가 웹 build artifact만 Pages에 배포한다.
- 기존 사이트의 parallax 아이디어는 새 반응형·접근성 구조로 재해석한다.

# AGENTS.md

## 1. Project Overview

이 프로젝트는 **SK hynix AI Hackathon 2026 지원용 포트폴리오 PDF**를 제작하기 위한 프로젝트다.

최종 제출 형식은 PDF이며, 웹페이지를 서비스로 배포하는 것이 목적이 아니다.

React + Vite로 PDF 페이지 크기에 맞춘 포트폴리오를 제작하고,
Chromium 기반 브라우저의 Print to PDF 기능을 사용해 최종 PDF로 변환한다.

최종 결과물은 다음 조건을 만족해야 한다.

- PDF 1개
- 최대 파일 크기 50MB
- 총 9페이지
- 발표 자료가 아니라 **지원자가 실제로 수행한 AI 프로젝트와 연구 경험을 보여주는 포트폴리오**
- 텍스트 설명보다 실제 결과물, UI 화면, 구조도, 데이터 흐름, 시스템 구성 등을 우선
- 짧은 시간 안에 핵심 경험을 이해할 수 있어야 함


---

# 2. Portfolio Goal

이 포트폴리오의 핵심 메시지는 다음과 같다.

> AI 모델 자체에 머무르지 않고,
> 문제에 맞는 AI 기술을 선택하고 실제 서비스·연구·인프라까지 연결해온 개발자

포트폴리오 전체에서 다음 역량이 자연스럽게 드러나야 한다.

- LLM / Generative AI 활용
- Multi-Modal AI
- Computer Vision
- Medical AI
- Full-stack AI Service Development
- AI Engineering
- GPU / AI Infrastructure
- 문제 발견 및 해결 능력
- 연구 결과를 실제 동작하는 시스템으로 구현하는 능력

단순히 프로젝트 개수를 보여주는 것이 목적이 아니다.

각 프로젝트에서 다음 4가지가 명확히 보여야 한다.

1. 어떤 문제였는가
2. 어떤 AI / 기술을 사용했는가
3. 지원자가 직접 무엇을 했는가
4. 어떤 결과물이 만들어졌는가


---

# 3. General Writing Rules

## 반드시 지킬 것

- 사실에 없는 내용을 만들어내지 않는다.
- 숫자, 성능 수치, 기간, 수상명 등을 임의로 추가하지 않는다.
- 제공되지 않은 기술 스택을 추측해서 넣지 않는다.
- 모든 프로젝트에서 지원자의 역할이 명확히 보이도록 한다.
- 설명은 논문 초록처럼 쓰지 않는다.
- 지나치게 홍보성 문구를 쓰지 않는다.
- "혁신적인", "획기적인", "최고의", "압도적인" 등의 표현은 피한다.
- "단순히 ~가 아니라", "~뿐만 아니라", "기능 단위의 데모가 아니라" 같은 AI 자기소개서식 표현을 남발하지 않는다.
- 실제 사람이 작성한 포트폴리오처럼 담백하게 작성한다.

## 문체

과도하게 딱딱한 보고서 문체를 피한다.

좋은 예:

> 두 장의 사진과 주제를 입력하면 서로 다른 두 시점을 연결한 영상을 생성하는 웹서비스를 개발했습니다.

나쁜 예:

> 최신 생성형 AI 기술을 기반으로 혁신적인 사용자 경험을 제공하는 차세대 플랫폼을 구현하였습니다.

## 언어

- 기본 언어: 한국어
- 기술명 / Framework / Model은 공식 영문명 사용 가능
- 한글과 영문의 혼용은 최소화
- 용어 표기는 페이지 전체에서 통일


---

# 4. Technical Implementation

## 기본 기술

React + Vite로 구현한다.

- React: 페이지와 페이지 내부 figure를 컴포넌트 단위로 구성
- Vite: 개발 서버와 빌드 (`npm run dev`, `npm run build`)
- CSS Modules: 페이지별 스타일 (`*.module.css`)
- 전역 CSS: 공통 page 규격, header/footer, category mark, print 규칙

포트폴리오는 인터랙티브 웹사이트가 아니라 PDF 출력물이다.
React는 구조화와 재사용을 위해 사용하며, 화면 동작이나 animation을 위해 쓰지 않는다.

- 반복되는 도식 요소(패널, 점, 열, 모델 목록 등)는 데이터 배열로 관리하고 map으로 렌더링한다.
- 한 페이지 안에서도 의미 단위로 컴포넌트를 나눈다.
- Diagram은 JSX 안의 HTML/CSS 또는 inline SVG로 직접 제작한다.
- 이미지는 `assets/`에서 import해 Vite가 번들링하도록 한다.
- 불필요한 UI 라이브러리, 상태 관리 라이브러리, CSS framework는 추가하지 않는다.

## Project Structure

```text
portfolio/
├── AGENTS.md
├── README.md
├── index.html
├── vite.config.js
├── docs/
│   └── PROGRESS.md              # 진행 상황과 확정된 결정
├── styles/
│   ├── global.css               # 공통 page / header / footer / category
│   └── print.css                # @page, print 규칙
├── assets/
│   └── images/                  # synthetic visual 등 raster 자료
└── src/
    ├── main.jsx
    ├── App.jsx                  # 9페이지 순서 조립
    ├── components/
    │   └── PageShell.jsx        # 페이지 번호, section, tone, header/footer
    └── pages/
        ├── 01-cover/
        ├── 02-aneurysm/
        ├── 03-digital-phenotyping/
        ├── 04-ventilation/
        └── project-skeleton/    # 아직 구현하지 않은 페이지의 placeholder
```

새 페이지는 `src/pages/NN-name/` 폴더에 `NamePage.jsx`와 `NamePage.module.css`를 만들고,
`App.jsx`에서 `PageShell`로 감싸 해당 순서의 skeleton을 교체한다.

페이지 수정 후에는 `npm run build`가 통과하는지 확인한다.


---

# 5. PDF Page Specification

기본적으로 **A4 Landscape**를 사용한다.

```css
@page {
  size: A4 landscape;
  margin: 0;
}

.page {
  width: 297mm;
  height: 210mm;
  break-after: page;
  overflow: hidden;
}
```

## Print Rules

```css
@media print {
  html,
  body {
    margin: 0;
    padding: 0;
  }

  .page {
    break-after: page;
  }

  .page:last-child {
    break-after: auto;
  }
}
```

PDF 출력 시 다음 문제를 반드시 확인한다.

- 페이지 잘림
- 텍스트 overflow
- 이미지 crop
- 폰트 깨짐
- SVG 깨짐
- 배경색 누락
- 페이지 사이 빈 페이지 생성
- 브라우저 margin 삽입


---

# 6. Design Direction

## Overall

깔끔하고 기술적인 인상을 주되,
기업 발표자료나 논문 포스터처럼 지나치게 딱딱하게 만들지 않는다.

디자인 방향:

- 검은 배경 (`#090a09`, 표지 `#080908`)
- 저채도 밝은 회색 typography (`#ecece6`와 투명도 단계)
- 분야별 category color 1개씩
- 충분한 whitespace
- 큰 프로젝트 화면
- 간단한 architecture diagram
- 짧은 설명

프로젝트 페이지는 `PageShell`의 `tone="dark"`를 사용한다.

## Category Color

페이지의 분야를 우측 상단 category mark(`.case-category--corner`)와 accent color로 구분한다.

| Category | Color | Pages |
| --- | --- | --- |
| AI RESEARCH | 적갈색 `#a63b2d` | 02, 03, 04, 05 |
| GPU INFRA | 초록색 `#3f8f66` | 06 |
| SERVICE | 파란색 (값은 Page 07 작업 시 확정) | 07, 08 |

- Page 05는 웹서비스도 포함하지만 핵심 기여가 MAGAR 제안이므로 AI RESEARCH로 분류한다.
- 적갈색은 이미 Page 02~04에서 사용 중이며 확정된 값이다.
- 초록색과 파란색은 적갈색과 같은 채도·명도 수준으로 맞춰, 검은 배경에서 한 색만 튀지 않게 한다.
- 한 페이지에는 해당 분야의 색 하나만 사용한다. 다른 분야 색을 섞지 않는다.
- category color는 category mark, 번호, 강조선, 핵심 도식의 강조 요소에만 사용하고 넓은 면적을 칠하지 않는다.
- 새 색은 CSS 변수로 추가한다. 현재 Page 02~04와 `global.css`에는 `#a63b2d`가 직접 쓰여 있으므로, 통합 단계에서 category 변수로 정리한다.

## Layout

한 페이지에 너무 많은 요소를 넣지 않는다.

우선순위:

1. 실제 결과물 / Screenshot
2. Architecture / Flow
3. Key message
4. 지원자 역할
5. 기술 스택

텍스트만 가득한 페이지를 만들지 않는다.

## Typography

한 페이지에 font weight를 너무 많이 사용하지 않는다.

예시 계층:

- Project title
- One-line description
- Section heading
- Body
- Caption

본문은 충분히 크게 유지한다.

PDF를 100% 확대하지 않고 보더라도 읽을 수 있어야 한다.


---

# 7. Common Project Page Structure

각 프로젝트 페이지는 가능한 한 다음 구조를 따른다.

```text
PROJECT TITLE

한 줄 설명

[Large Screenshot / Main Visual]

Problem
짧은 설명

Approach
사용 기술 및 구조

My Role
직접 수행한 작업

Result
실제 결과
```

단, 모든 프로젝트를 똑같은 카드 UI로 만들 필요는 없다.

각 프로젝트의 특징에 따라 시각적 구성을 바꿀 수 있다.


---

# 8. Portfolio Structure

페이지 수: 9 pages

최종 페이지 순서는 다음과 같다.

1. Profile / Intro
2. 서울대학교병원 — ICA Morphology & Aneurysm Feasibility
3. 서울대학교병원 — Pediatric Digital Phenotyping
4. 서울아산병원 MI2RL
5. CLE Tumor Classification + MAGAR XAI (Pathology AI + XAI)
6. AI Infrastructure
7. Recappers
8. Generative AI Video
9. Profile / Other Projects / Awards / Contact

페이지 흐름은 의료 AI 연구 경험에서 시작해 병리 AI 서비스와 GPU 인프라로 연구 수행 범위를 확장하고, 이후 Multi-Modal LLM과 Generative AI 서비스 구현 경험으로 연결한다.


==================================================
PAGE 1 — PROFILE / INTRO
==================================================

## Goal

지원자가 어떤 개발자인지 5초 안에 이해할 수 있어야 한다.

## Main Message

추천 헤드라인:

> AI를 실제 서비스와 연구 환경에 연결해온 개발자

또는 의미가 유사한 짧은 문구.

## Keywords

- LLM
- Multi-Modal AI
- Computer Vision
- Medical AI
- AI Infrastructure

## Basic Information

- 이름: 박평진
- 영문 이름: Park PyeongJin
- 순천향대학교 컴퓨터공학과 졸업
- 학위: 공학사
- 졸업일: 2026년 8월 20일

학교는 현재 소속처럼 표기하지 않는다. 필요한 경우 학력 정보로만 배치한다.

연락처는 표지와 마지막 페이지에 작게 배치할 수 있다. 표지에서는 이름과 오브제보다 시각적 우선순위가 낮아야 한다.

- GitHub: https://github.com/bhbh1226/
- LinkedIn: https://www.linkedin.com/in/bhbh1226/
- Email: bhbh1226@gmail.com

## Profile Summary

2~3줄 이내.

핵심 내용:

- AI 모델 연구
- AI 서비스 개발
- 의료 AI
- GPU 인프라 경험

장문 자기소개 금지.

## Visual

프로젝트 썸네일 3~4개를 작게 배치할 수 있음.

예:

- Recappers
- Medical AI
- Generative Video
- AI Infrastructure


==================================================
PAGE 8 — GENERATIVE AI VIDEO
==================================================

## Project

두 이미지 기반 AI 영상 생성 웹서비스

## Concept

AI 시대에도 인간에게 중요한 감각 중 하나인 "시간"에 주목.

서로 다른 두 시점의 기억을 하나의 장면으로 연결하는
예술적 경험을 AI로 구현.

사용자가:

- 이미지 2장
- 주제

를 입력하면

10초 길이의 영상 생성.

## Architecture

반드시 시각화:

```text
Image A
        \
         → Gemini → Video Prompt → Kling → Generated Video
        /
Image B

       + User Theme
```

좀 더 상세하게:

```text
Two Images + Theme
        ↓
Gemini API
- 이미지 분석
- 주제 해석
- 시작 장면
- 전환 과정
- 종결 장면
        ↓
Generated Video Prompt
        ↓
Kling multi-image-to-video API
        ↓
10 sec Video
```

## Tech

- React
- Gemini API
- Kling API
- multi-image-to-video

## Key Problem

이미지를 그대로 영상 생성 모델에 전달할 경우:

- 사용자 의도 반영 부족
- 두 장면 사이 흐름 불안정
- 전환 과정 제어 어려움

## Solution

Gemini가 영상 생성용 프롬프트를 생성한 후
Kling이 영상을 생성하도록 파이프라인 구성.

## My Role

- React UI 구현
- 이미지 입력
- Gemini 연동
- 프롬프트 설계
- Kling API 연동
- 서버 요청 및 결과 반환 흐름 구현

## Result

사용자가 영상 생성 모델이나 프롬프트 작성법을 몰라도

두 이미지 + 주제

만으로 하나의 영상을 생성할 수 있도록 구현.

생성 결과를 반복 비교하며 프롬프트를 수정해
장면 전환 및 영상 흐름 개선.

## Visual Priority

반드시 가능하면 다음 자료 사용:

- 실제 입력 화면
- 두 원본 이미지
- 생성된 영상 대표 frame
- Pipeline diagram


==================================================
PAGE 7 — RECAPPERS
==================================================

## Project

Multi-Modal LLM 기반 강의 학습 플랫폼

## Problem

학생이 강의를 복습할 때:

- PDF 강의자료
- 강의 녹음

을 따로 확인해야 함.

중요 내용을 다시 직접 정리해야 함.

## Input

```text
PDF Lecture Material
+
Lecture Audio
```

## Pipeline

```text
PDF
 ↓
PyMuPDF / OCR
 ↓
Document Content
                \
                 → Lecture Context → LLM
                /
Audio
 ↓
Whisper STT
 ↓
Transcript
```

LLM output:

- Lecture Summary
- Expected Questions
- Chat Agent

이후:

```text
AI Generated Content
        ↓
Professor Review / Edit
        ↓
Student
```

## Tech

- PyMuPDF
- OCR
- Whisper
- LLM
- React
- Backend

실제 사용한 기술만 표기.

## Key Feature

### Multi-Modal Lecture Context

강의자료와 음성 정보를 따로 처리한 후
강의 흐름에 맞게 연결.

### AI Content

- 강의 요약
- 예상 문제
- 강의 기반 Q&A Agent

### Human Review

AI 생성 결과를 바로 학생에게 제공하지 않음.

교수가 검수 / 수정 후 학생에게 제공.

## My Role

팀장 경험이 드러나도 됨.

- AI pipeline
- 서비스 구조 설계
- LLM 활용
- Full-stack integration
- Team coordination

실제 수행 범위에 맞춰 작성.

## Result

- 실제 웹서비스 구현
- 관련 연구 제1저자
- 한국융합신호처리학회 2025 추계학술대회
  우수발표논문상

## Visual Priority

- 실제 웹 UI
- Architecture
- 교수 / 학생 flow
- AI result 화면


==================================================
PAGE 2–4 — MEDICAL AI
==================================================

Medical AI는 연구 성격에 따라 세 페이지로 나눈다.

- Page 2: 서울대학교병원 — ICA Morphology & Aneurysm Feasibility
- Page 3: 서울대학교병원 — Pediatric Digital Phenotyping
- Page 4: 서울아산병원 MI2RL


----------------------------------
서울대학교병원
----------------------------------

## Experience

- 기관: 서울대학교병원 Medical Vision Lab
- 기간: 2026년 7월 1일 ~ 2026년 8월 31일
- 역할: 인턴

## ICA Morphology & Aneurysm Feasibility Study

### Research Context

- 영상: TOF-MRA
- 모델 입력: TOF-MRA에서 추출한 환자 단위 좌·우 ICA 기하 및 radiomics tabular feature
- 실제 주 task: ACoA vs rest binary classification feasibility
- label은 ACoA, PCoA, MCA, Normal로 구성
- detection, lesion segmentation, 미래 발생 예측 또는 end-to-end image classification으로 표현하지 않는다.
- 소규모 단일기관 retrospective feasibility 분석이며, 임상용 자동 진단 모델로 표현하지 않는다.

### ICA Extraction

- 연구진이 제공한 3D Slicer Markups `.mrk.json` landmark annotation을 사용
- 각 좌·우 ICA 분석 구간의 시작점, 끝점과 중간 waypoint를 실제 추출 seed로 사용
- 혈관 mask 안에서 landmark를 경유하는 centerline과 ICA ROI를 추출
- annotation은 분석 구간을 지정하지만 코드에 해부학적 segment 명칭이 없으므로 cavernous, clinoid 등 특정 segment로 단정하지 않는다.
- 실제 annotation 파일, 좌표, case별 point 수와 Slicer 화면은 공개하지 않는다.

### Data Integrity Issue

- 서로 다른 익명 ID로 중복 저장된 동일 환자·동일 영상 사례를 발견
- 전체 scan의 NIfTI header를 검사하고 동일 signature 후보의 파일 hash를 비교
- pixel/voxel array equality 비교와 육안 검토를 통해 동일 영상을 추가 확인
- 원본을 삭제하지 않고 분석 제외 로직을 구현
- 공용 loader의 일부 분석에는 제외가 적용되지만 모든 평가 진입점에서 최신 cohort 재평가가 완료된 것은 아님
- 특정 CV 실행에서 중복 사례가 서로 다른 fold에 배정됐는지는 확인되지 않았으므로 leakage 또는 성능 상승으로 단정하지 않는다.

### Feature Engineering

- 좌·우 ICA의 기하 및 PyRadiomics feature 생성
- 전체 기하 feature와 radiomics feature에 양측 평균 `(L+R)/2`와 절댓값 차이 `|L-R|`를 직접 제안·구현
- 기하 feature에는 signed difference `L-R`와 `log(L/R)`도 구현
- 동일 fold와 환자 집합에서 feature 조합을 비교하는 ablation 분석 구성

### My Role

- 전달받은 원본 코드 없이 저장소의 분석 코드를 직접 설계·구현
- TOF-MRA 전처리와 landmark 기반 좌·우 ICA centerline / ROI 추출
- 기하 및 PyRadiomics feature 생성
- 좌우 비대칭 feature engineering과 ablation 분석
- Logistic Regression, RBF SVM, Random Forest, Gradient Boosting 학습·평가
- cohort 중복 검사 및 분석 제외 로직 구현
- 결과 분석과 실행 기록 작성

### Disclosure

- 실제 의료영상 사용 금지
- 원본 landmark annotation, 내부 annotation 화면과 cohort 구성 공개 금지
- 최신 전처리 기준 feature / radiomics 재생성 및 중복 제외 cohort 재평가가 완료되지 않았으므로 기존 성능 수치와 그래프 사용 금지
- 논문 또는 완료된 연구처럼 표현하지 않는다.
- synthetic ICA schematic, 좌우 feature 수식과 데이터 검증 flow를 사용한다.


## Pediatric Psychiatry AI

### Research Context

- 소아·청소년의 스마트폰·웨어러블 센서와 자기보고 데이터를 이용한 디지털 페노타이핑 연구
- 주 실행·평가 타깃은 대조군과 임상군 전체를 구분하는 이진 선별
- depression / anxiety one-vs-rest 타깃도 코드에서 지원하지만, 포트폴리오의 대표 결과처럼 쓰지 않는다.

### Work

- 전임자 연구 코드와 기존 보고 결과를 재현
- 최신 scikit-learn에서 동작하지 않는 AdaBoost 설정과 custom transformer의 fitted-state 문제 수정
- macOS 환경에서 XGBoost·LightGBM 실행에 필요한 OpenMP 환경 정리
- 약 2,000개 feature에서 실행이 어려웠던 상관 필터를 벡터화
- 결측·중도탈락·미분류 라벨이 임상군으로 포함되던 규칙 수정
- 센티넬, 무한대, 불가능한 생체신호 값 정제
- 정답 생성 척도와 시점·주차 메타데이터를 feature에서 제거해 정보 누수 방지
- 환자 ID 중복과 merge 행 증식 가능성 탐지
- 결측 제거, 상관 제거, 대치, 표준화, feature selection을 CV 학습 fold 내부로 이동
- 환자 단위 평가의 행 순서 의존성을 제거하고 라벨 불일치 대상을 별도로 처리
- 학습과 추론의 정제·feature 정렬을 통일
- 부분 모델 실패를 격리하고 실행별 코드 버전·환경·입력 지문·설정을 기록

### Evaluation

- Logistic Regression과 Random Forest corrected plain baseline을 실제 학습·평가
- SVM, Gradient Boosting, AdaBoost, KNN, MLP, XGBoost, LightGBM, CatBoost 등을 포함한 기존 모델군 재현
- 환자 단위 StratifiedGroupKFold 기반 nested cross-validation
- 주 단위 OOF 예측과 환자 단위 확률 평균 평가
- 여러 random seed 반복 실험으로 기존 보고 결과의 재현 범위와 성능 변동성을 확인
- 정확한 수치를 쓸 경우 `BASELINE_LOG.md`의 실행 조건과 함께 표기하고, 단일 최고 AUC를 성능 향상처럼 제시하지 않는다.

### Page Message

이 작업은 단순한 실행 환경 복구가 아니라 다음 흐름으로 설명한다.

```text
Legacy Research Pipeline
        ↓
Reproduce Reported Baseline
        ↓
Audit Data / Labels / Evaluation
        ↓
Corrected Patient-level CV Pipeline
        ↓
Repeated-seed Reliability Check
```

페이지의 중심 메시지는 **기존 결과를 재현한 뒤 데이터와 평가 과정을 감사하고, 환자 단위 평가 조건을 재구성한 작업**이다.

### Page 2 Composition

서울대학교병원 한 페이지는 두 연구를 동일한 상세도로 나열하지 않는다.

- 상단: 기관, 역할, 기간과 페이지를 관통하는 짧은 메시지
- 메인 영역 약 60%: Pediatric Psychiatry AI의 `재현 → 감사 → corrected evaluation → repeated-seed check` 흐름
- 보조 영역 약 40%: ICA/Aneurysm의 `landmark → ICA feature → asymmetry` 흐름과 중복 scan audit
- 실제 의료영상, 실제 landmark 좌표와 결과 그래프 대신 HTML/CSS 또는 SVG schematic 사용

슬라이드에 직접 노출할 Pediatric Psychiatry 핵심은 다음으로 제한한다.

- 스마트폰·웨어러블·자기보고 기반 임상군 선별 연구
- 라벨과 센티넬 처리 교정, 누수 가능 feature 제거, 환자 단위 평가 재구성
- 환자 단위 nested cross-validation과 반복 seed 검증
- 기존 조건 재현과 예측 신호의 변동성을 각각 확인

슬라이드에 직접 노출할 ICA/Aneurysm 핵심은 다음으로 제한한다.

- 3D Slicer landmark를 이용한 좌·우 ICA centerline / ROI 추출
- 기하·radiomics feature와 좌우 평균·비대칭 feature 직접 구현
- 서로 다른 익명 ID로 저장된 동일 환자·동일 영상을 발견하고 중복 검사·제외 로직 구현
- 최신 cohort 재평가가 완료되지 않아 성능 수치와 그래프는 제시하지 않음
- ACoA 등 세부 class label과 cohort 구성은 내부 근거로만 유지하고 공개 슬라이드에는 노출하지 않음


----------------------------------
서울아산병원
----------------------------------

## Experience

- 기관: 서울아산병원 MI2RL
- 기간: 2025년 12월 22일 ~ 2026년 6월 30일
- 역할:
  - 인턴: 2025년 12월 ~ 2026년 1월
  - 위촉연구원: 2026년 3월 ~ 2026년 6월 30일
  - 2026년 2월의 역할과 정확한 역할 전환일은 추후 확인

## Page Focus — CT-based Lung Ventilation Synthesis

Page 4는 논문으로 완료된 폐 환기지도 합성 비교 연구에 단독 할당한다. Contrast-enhanced CT / PECT 연구를 같은 페이지에 함께 배치하지 않는다.

연구 내용:

- 공동 연구자가 전처리한 흡기·호기 CT로 폐 환기지도를 합성
- 비교 모델: pix2pixHD, ResViT, I2SB, SelfRDB
- 일반 영상 품질과 환기 결손 재현 성능을 함께 평가
- 영상 유사도가 높은 모델과 환기 결손을 잘 재현한 모델이 서로 달랐다는 비교 결과를 중심으로 구성

지원자의 직접 수행 범위:

- 연구진이 지정한 4개 생성 모델을 해당 task에 맞게 구현
- 모델 학습·평가 실행과 공통 평가 코드 구성
- 통계 분석과 비교 figure 제작
- 실험 방법·결과·해석을 중심으로 논문 작성

연구 방향, 비교 모델과 평가 지표는 선임 연구자의 요청으로 정해졌다. 따라서 다음 표현은 사용하지 않는다.

- 연구 전체를 주도하거나 설계했다.
- 비교 모델과 평가 지표를 직접 선정했다.
- 새로운 생성 모델을 제안했다.
- 데이터 전처리를 담당했다.

## Contrast-enhanced CT / PECT Disclosure

PECT 연구는 공개 승인을 받지 않았으므로 Page 4 본문에서 제외한다.

승인 전에는 다음을 공개하지 않는다.

- 실제 CT·DICOM과 생성 결과
- 환자 수, cohort 구성과 내부 데이터 흐름
- 에너지 조건, FDA 설정과 상세 모델 구조
- 성능 수치, 결과 figure와 실험 화면
- 코드, 저장소, 내부 서버 경로와 파일명

기관에서 업무 내용의 외부 표기를 허용하는 것이 확인된 경우에만 마지막 페이지에 `의료영상 생성 모델의 학습·평가 환경과 비교 실험 파이프라인 구현` 정도의 일반적인 한 줄을 사용할 수 있다. PECT, A2SB, FDA 및 구체적인 변환 조건은 연구진의 명시적 승인 후에만 추가한다.

## Research Result

MICCAI 2026 SASHIMI Workshop

- 연구 채택
- 공저자

## Visual

이 페이지에서는 민감 의료 데이터를 사용하지 않는다.

실제 환자 데이터가 포함된 이미지는 넣지 않는다.

실제 환자 CT나 논문의 임상 영상 figure를 그대로 사용하지 않는다.

다음을 synthetic schematic으로 재구성한다.

- 흡기 CT + 호기 CT 입력
- GAN 2종 / Diffusion 2종 비교 구조
- 폐 환기지도 출력
- 영상 유사도 평가와 환기 결손 평가의 대비

결과 수치는 페이지의 논지를 설명하는 대표 지표만 최소한으로 사용한다.


==================================================
PAGE 5 — CLE TUMOR CLASSIFICATION + MAGAR XAI
==================================================

## Project

- 공식 제목: 공초점 레이저 내시현미경 영상의 MaxViT 기반 MAGAR XAI 적용 종양 분류 연구
- 영문: A Study on MaxViT-based Tumor Classification of Confocal Laser Endomicroscopy Images Using MAGAR XAI
- 페이지 제목: MaxViT 기반 CLE 종양 분류와 MAGAR XAI
- 헤더 라벨: Soonchunhyang University · Medical AI Lab · Undergraduate Research
- Category: AI RESEARCH

## Two Phases

두 시기의 결과를 섞지 않는다.

- 2024 순천향대학교 공과대학 학술제 (2024.04.01 ~ 2024.11.13, 3인 팀)
  - 본인: MaxViT 분류 모델 개발, MAGAR 제안·구현. 웹은 다른 팀원이 구현
  - 결과: 제33회 순천향대학교 공과대학 학술제 은상
- 2026 학사 졸업논문 (개인, 2026년 5월 제출)
  - 본인: 5-fold 앙상블 학습·평가, XAI 정량 검증, 웹 추론 시스템 새로 구현, 논문 작성
  - 페이지의 성능 수치와 XAI 평가 수치는 모두 졸업논문 기준

학술제 당시 수치(예: Accuracy 98.21%)는 실험 조건이 달라 논문 수치와 함께 쓰지 않는다.

## Background / Problem

- 배경: 시간이 오래 걸리는 동결절편 검사. 논문에서 동결절편은 연구 배경과 시간 비교 대상이며, 판정 시간 단축을 달성한 결과처럼 쓰지 않는다.
- 연구 목적: CLE 영상의 Normal / Tumor 분류와 MAGAR를 이용한 XAI 시각화
- 제안 이유: Grad-CAM은 마지막 conv feature에 의존해 MaxViT의 Block · Grid attention을 반영하지 못하고, 일반 Attention Rollout은 class gradient가 없으며 MaxViT의 partition attention과 바로 호환되지 않는다.

## Data

- 고려대학교 안암병원 임상 CLE 영상, 대장 선암. 공개 데이터셋 아님
- 1024 × 1024 흑백 단일 프레임 → scale bar 제거 crop → 512 × 512. WSI patch가 아니다.
- 영상 단위 Normal / Tumor 라벨
- 전체 규모(163명 · 9,031장)는 공개 가능하지만 페이지 본문에는 평가 조건만 표기

## Model / XAI

- MaxViT (MBConv + Block attention + Grid attention), 5-fold soft-voting ensemble
- 비교 모델: ResNet-50, EfficientNet-B3, EfficientNetV2-S, ConvNeXt-Tiny, ConvNeXt-Small, Swin-Small
- MAGAR: Multi-Axis Gradient-weighted Attention Rollout
  - attention 추출 → class gradient 계산 · spatial centering → positive gradient weighting → partition reassembly → layer aggregation → percentile normalization

## Results

- 환자 단위 GroupKFold, 학습과 분리된 new cohort 4,889장 test
- F1 0.9485 · AUROC 0.9910 · Recall 0.9727 · Accuracy 0.9589
- 단일 영상 추론 약 205 ms (RTX A6000)
- Baseline(단일 모델, 동일 조건): MaxViT F1 1위, AUROC는 Swin-Small 근소 우위. 앙상블 수치와 조건이 다르므로 F1 값을 나란히 쓰지 않는다.
- XAI: Stability(Pearson)는 MAGAR 0.27–0.31, Grad-CAM −0.03. Faithfulness(Insertion − Deletion AUC)는 Grad-CAM 우위. MAGAR가 모든 지표에서 우수하다고 쓰지 않는다.

## Web System (2026)

- React · Vite · Tailwind / FastAPI · SQLAlchemy · PostgreSQL / JWT / Docker Compose · nginx
- 업로드 → 5-fold 앙상블 추론 → Grad-CAM · MAGAR 표시 → 결과 저장 · 조회

## Disclosure

- 실제 CLE 영상, 논문 figure와 웹 스크린샷의 환자 영상을 사용하지 않는다.
- synthetic CLE 영상(`assets/images/synthetic-cle-colorectal-v1.png`) 위에 도식 heatmap을 그린다.
- 웹 UI는 스크린샷 대신 포트폴리오 톤으로 재구성하고 "UI 재구성 · SYNTHETIC CLE · SCHEMATIC HEATMAP"을 표시한다.
- GitHub 저장소는 비공개이므로 링크하지 않는다.


==================================================
PAGE 6 — GPU / AI INFRASTRUCTURE
==================================================

## Project

- 페이지 제목: 분산 GPU 서버를 공용 Slurm 클러스터로 통합
- 헤더 라벨: Soonchunhyang University · Efficient Computing Lab · Undergraduate Research
- Category: GPU INFRA (`#3f8f66`)
- 근거: 인프라 저장소의 코드·설정·문서와 git 기록

## Role

- 연구실 랩장으로서 인프라 구축을 총괄했다. 랩장 재임 기간(2025년 ~ 2026년 8월)은 이 페이지가 아니라 Page 09 경력에 쓴다.
- 2026.07 설계·구축: 저장소 커밋은 2026-07-03 ~ 07-08, 전체 180개 중 37개
- 이후 현재까지 커밋 없이 운영과 장애 대응을 계속했고, 후임 담당자에게 인수인계했다.
- 2026-07-12 이후 모니터링, Ansible, Slurm accounting, 정량 지표, 보안, DR, 인수인계 문서는 다른 기여자가 만들었다. 이 항목과 그 정량 지표(대기 시간, 우회 점유 건수 등)는 본인 성과로 쓰지 않는다.

## Cluster

- 관리 노드 2(Slurm 제어 노드, FreeIPA 인증 노드) + GPU 노드 3, GPU 6장
  - RTX A6000 ×1 (로컬), RTX Pro 6000 ×2 (로컬), L40 ×3 (원격, Tailscale)
- 통합 전: 서버마다 로컬 계정과 서로 다른 UID/GID, 채팅으로 GPU 사용 조율, SSH로 직접 GPU 점유 가능

## Work (본인)

- 로컬·원격 GPU 클러스터 아키텍처 설계
- FreeIPA 중앙 인증: 계정 10개 이식, 파일 소유권 보존을 위해 기존 UID/GID 유지, SSSD/PAM
- 로컬 노드 NFS 중앙 홈 통합, 원격 노드는 데이터를 현지에 유지
- Slurm: GPU 타입별 GRES(`a6000` / `rtxpro6000` / `l40`), partition, cgroup으로 CPU·RAM·swap·GPU 장치 격리, 기본 24시간, DOWN 노드 자동 복귀
- JupyterHub + MOSlurmSpawner: GPU 종류·개수·CPU·시간을 골라 Slurm 잡으로 실행
- 로컬망 + Tailscale 하이브리드 네트워크
- Borg 암호화·dedup·append-only 홈 일일 백업, 별도 경로 복원 검증을 직접 수행
- Git 런북과 CHANGELOG로 인프라 변경 이력 관리

## Troubleshooting (본인)

1. 제어 노드 주소 충돌: 학교망의 다른 장비와 같은 주소(ARP 충돌) → 주소 재배치, hosts · NFS · Slurm · JupyterHub 설정 정리
2. 컨테이너 CUDA 소실: systemd reload 때 cgroup이 GPU 장치 권한을 회수 → NVIDIA CDI 방식 전환, CDI 명세 자동 갱신
3. 증분 백업이 매번 전체 복사(약 273GB): hardlink 증분이 성립하지 않음 → Borg dedup 백업 전환

## Wording Rules

- "고정 IP 전환"이라고 쓰지 않는다. 주소 예약이 확인되지 않았으므로 "주소 재배치"로 쓴다.
- 백업은 "홈 백업"으로 한정한다. 대용량 RAID0와 원격 노드 데이터는 백업되지 않았다.
- L40 노드가 이후 추론 서비스 전용으로 Slurm에서 빠진 것과 JupyterHub 유휴 서버 자동 종료는 본인 이후의 일이라 쓰지 않는다.
- 내부 IP, 호스트명, 도메인, 계정명, realm, 키, 경로는 공개하지 않는다.

## Visual

- 반투명 GPU 서버 3대 synthetic 이미지(`assets/images/gpu-cluster-translucent-v3.png`). 그림 속 GPU 수는 실제와 같은 1 · 2 · 3장
- 왼쪽 접근 흐름(연구원 · 관리자 → JupyterHub · SSH → Slurm)에서 Slurm 배정선이 서버 위 LOCAL · REMOTE 선으로 이어진다.
- 문제 해결 3건은 "위 줄 흐린 점선 = 문제, 아래 줄 초록 실선 = 조치" micro-diagram으로 보여준다.


==================================================
PAGE 9 — PROFILE / OTHER PROJECTS / AWARDS / CONTACT
==================================================

마지막 페이지는 가볍게 구성.

메인 프로젝트처럼 상세하게 설명하지 않는다.

----------------------------------
Profile / Experience
----------------------------------

- 박평진 / Park PyeongJin
- 순천향대학교 컴퓨터공학과 졸업 · 공학사 · 2026년 8월 20일
- 서울대학교병원 Medical Vision Lab 인턴 · 2026년 7월 1일 ~ 2026년 8월 31일
- 서울아산병원 MI2RL · 인턴 2025년 12월~2026년 1월 · 위촉연구원 2026년 3월~6월 30일
- 의료 AI 연구 · 소프트웨어 개발 · GPU 인프라 엔지니어링

서울아산병원의 정확한 역할 전환일과 2026년 2월의 역할은 사용자 확인 후 표기한다.

----------------------------------
Samsung Bixby Crew Hackathon
----------------------------------

Award:

우수상

Project:

문화활동 정보를 음성으로 탐색하고 이용할 수 있는
Bixby Capsule.

Work:

- 사용자 의도 기반 대화 흐름
- 영화 특화 DB
- 정보 조회
- 음성 인터랙션
- Service logic


----------------------------------
STAC
----------------------------------

Award:

미래산업부문 우수상

Project:

시각장애인을 위한

- 물건 위치 알림
- 위험 경보

솔루션.

Role:

Front-end

Work:

- 실시간 socket 통신
- 상태 확인
- 제어
- UI / UX


----------------------------------
Additional Awards
----------------------------------

필요 시:

- Recappers 우수발표논문상
- 공과대학 학술제 은상

이미 이전 페이지에서 충분히 강조됐다면
중복 표기 최소화.


----------------------------------
Contact
----------------------------------

- GitHub
- LinkedIn
- Email

가능하면 QR Code 활용 가능.


---

# 9. Visual Assets

## Screenshots

실제 프로젝트 화면을 우선한다.

초기 Skeleton과 각 페이지의 첫 구현에서는 실제 이미지가 없어도 작업을 진행한다. 이미지 영역에는 다음 내용이 드러나는 placeholder를 사용한다.

- 필요한 자료의 종류
- 권장 비율 또는 crop 방향
- 해당 자료가 전달해야 할 핵심 내용

실제 자료는 해당 페이지 검토 과정에서 필요성이 확인될 때 교체한다.

Screenshot 사용 시:

- 불필요한 브라우저 chrome 제거
- 개인정보 제거
- 작은 글씨가 너무 많은 화면은 crop
- 핵심 UI 부분 확대

## Architecture Diagram

가능하면 React 컴포넌트 안의 HTML/CSS 또는 inline SVG로 직접 제작한다.

장점:

- PDF에서도 선명
- 스타일 통일
- 수정 용이

스크린샷 형태의 diagram은 가급적 사용하지 않는다.

## Icons

아이콘을 사용할 경우 한 스타일로 통일.

아이콘 남용 금지.


---

# 10. Sensitive Data

의료 AI 프로젝트에서 다음 데이터는 포트폴리오에 포함하지 않는다.

- 환자 개인정보
- 식별 가능한 의료 이미지
- 병원 내부 시스템 화면
- 내부 연구 데이터
- 공개 여부가 불확실한 자료

필요하면 synthetic / schematic visualization을 사용한다.


---

# 11. Content Priority

포트폴리오는 다음 서사 순서로 경험을 강조한다.

1. Medical AI — 병원 연구실 인턴과 의료 AI 연구 경험
2. CLE Tumor Classification + MAGAR XAI — 모델·XAI 제안·구현과 웹서비스 연결
3. AI Infrastructure — 연구 환경을 운영 가능한 공용 인프라로 확장
4. Recappers — Multi-Modal LLM 기반 학습 플랫폼과 연구 성과
5. Generative AI Video — 생성형 AI 파이프라인과 사용자 서비스 구현
6. Other Projects — 초기 프로젝트와 수상 경험

페이지 순서를 변경할 때는 개별 프로젝트의 중요도뿐 아니라 이 연구 → 시스템 → 서비스 흐름이 유지되는지 먼저 확인한다.


---

# 12. Avoid

다음 디자인은 피한다.

- PowerPoint template 느낌
- 지나치게 많은 card
- 모든 요소에 border
- excessive gradient
- glassmorphism
- excessive shadow
- emoji icon
- 기술 logo wall
- progress bar 형태의 기술 숙련도
- Python 90%, React 80% 같은 skill percentage
- 의미 없는 수치 강조
- 긴 자기소개
- 긴 프로젝트 설명

포트폴리오가 AI가 자동 생성한 웹사이트처럼 보이지 않게 한다.


---

# 13. PDF Export Checklist

PDF 생성 전에 반드시 확인.

## Layout

- [ ] 모든 페이지 동일한 size
- [ ] page overflow 없음
- [ ] text clipping 없음
- [ ] 이미지가 page boundary를 넘지 않음
- [ ] 페이지 사이 빈 페이지 없음

## Text

- [ ] 오탈자 없음
- [ ] 기술명 표기 통일
- [ ] 한국어 / 영어 띄어쓰기 확인
- [ ] 작은 본문 없음

## Image

- [ ] pixelated image 없음
- [ ] 너무 큰 image file 없음
- [ ] 필요 없는 metadata 제거
- [ ] screenshot crop 확인

## Privacy

- [ ] 개인정보 없음
- [ ] 환자 정보 없음
- [ ] 내부 시스템 정보 없음
- [ ] 공개 불가능한 데이터 없음

## PDF

- [ ] 50MB 이하
- [ ] 모든 font 정상 출력
- [ ] SVG 정상 출력
- [ ] link 정상
- [ ] 페이지 번호 확인


---

# 14. File Size Optimization

최종 PDF 제한:

50MB

가능하면 10~20MB 이내 목표.

이미지는 필요 이상으로 큰 해상도를 사용하지 않는다.

권장:

- screenshot: WebP / PNG
- photo: JPEG / WebP
- diagram: SVG

영상 자체는 PDF에 삽입하지 않는다.

영상은 대표 frame + QR / link 사용.


---

# 15. Codex Workflow

Codex는 **처음부터 9페이지 전체를 한 번에 완성하지 않는다.**

다음 원칙을 기본 작업 방식으로 사용한다.

1. 먼저 9페이지 전체의 빈 Skeleton과 공통 디자인 시스템만 만든다.
2. 표지(Page 1)를 먼저 완성하고 사용자 확인을 받는다.
3. 이후에는 한 번에 한 페이지만 작업한다.
4. 각 프로젝트 페이지를 만들기 전에 사용자와 함께 그 페이지에서 가장 크게 보여줄 대상 하나를 정한다.
5. 해당 페이지를 구현한 뒤 사용자 확인과 수정을 거쳐야 다음 페이지로 넘어간다.
6. 확인되지 않은 페이지의 세부 콘텐츠나 시각 구성을 미리 완성하지 않는다.

페이지별 핵심 시각 요소는 다음 후보 중 프로젝트의 강점을 가장 잘 설명하는 하나를 우선한다.

- 실제 서비스 화면
- 입력과 출력의 비교
- Architecture / Data Flow
- 모델 비교 또는 연구 과정
- 지원자가 해결한 핵심 문제
- 최종 결과물

핵심 시각 요소가 정해지지 않았거나 필요한 실제 자료가 없으면, 사실을 추측해 채우지 않는다. 해당 위치에는 용도와 필요한 자료가 명확한 placeholder만 둔다.

## 작업 단계별 승인 범위

- Skeleton 단계: 9페이지의 순서, 공통 여백, typography, grid, page number, placeholder만 확정한다.
- 표지 단계: headline, profile summary, 연락처, 대표 썸네일 구성을 확정한다.
- 프로젝트 단계: 해당 페이지의 핵심 메시지와 가장 큰 시각 자료 하나를 먼저 확정한 뒤 구현한다.
- 통합 단계: 모든 페이지가 승인된 뒤에만 전체 간격과 표기 방식, PDF 출력 품질을 일괄 조정한다.

사용자 확인 없이 다음 페이지의 세부 디자인이나 문구를 선행 제작하지 않는다.

## 사용자 입력 관리

다음 정보가 없을 경우 임의로 만들지 않고 사용자에게 요청한다.

### 표지 확정 정보

- 영문 이름: Park PyeongJin
- GitHub: https://github.com/bhbh1226/
- LinkedIn: https://www.linkedin.com/in/bhbh1226/
- Email: bhbh1226@gmail.com
- 표지 프로젝트 썸네일: 초기에는 placeholder를 사용하고 필요할 때 실제 자료로 교체

### 각 프로젝트 페이지 전 필수

- 프로젝트의 공식 표기명
- 본인이 직접 수행한 범위
- 실제 사용 기술과 모델명
- 공개 가능한 실제 화면 또는 이미지의 위치
- 외부 공개가 불가능한 자료의 범위
- 결과와 수상·논문·채택 정보의 정확한 공식 표기

현재 추후 확인이 필요한 항목:

- 서울아산병원의 정확한 역할 전환일과 2026년 2월의 역할
- 각 프로젝트의 정확한 수행 기간
- 서울아산병원 논문의 채택·저자 표기 공식 문구와 슬라이드용 대표 지표
- PECT 연구의 프로젝트명·방법·담당 범위 공개 가능 여부에 대한 연구진 승인
- Recappers의 실제 Backend 기술과 논문 제목·저자 정보
- 연구실 랩장 재임 시작 월 (Page 09 경력용)
- Bixby Crew Hackathon과 STAC의 개최 연도 및 수상 공식 표기
- 포트폴리오에 연결할 프로젝트 URL 또는 저장소 URL

### 최종 출력 전 필수

- 모든 외부 링크와 QR 대상 URL
- 이미지 및 화면의 공개 가능 여부
- 제출용 PDF 파일명
- 필요 시 영문 이름 표기

Codex는 다음 순서로 작업한다.

## STEP 1

전체 portfolio skeleton 작성.

- 9 pages
- page dimensions
- design system
- typography
- grid
- print CSS

이 단계에서는 페이지 제목, 기본 영역, placeholder만 배치하고 실제 콘텐츠를 지나치게 채우지 않는다.

Skeleton 구현 후 전체 페이지 흐름과 디자인 시스템을 사용자에게 먼저 확인받는다.

## STEP 2

Page 1 작성.

사용자 확인 후 다음 페이지 진행.

## STEP 3

서울대학교병원 ICA Morphology & Aneurysm Feasibility 작성.

합성 3D 뇌혈관 오브제, 직접 제작한 Circle of Willis diagram, landmark 기반 ICA 추출과 좌우 feature 설계를 중심으로 구성한다. 실제 의료영상처럼 오인되지 않도록 synthetic visualization임을 명시한다.

## STEP 4

서울대학교병원 Pediatric Digital Phenotyping 작성.

28일 센서 관측 구조와 라벨·전처리·평가 교정 기록을 중심으로 구성한다. 추상적인 4단계 카드형 pipeline은 사용하지 않는다.

## STEP 5

서울아산병원 MI2RL 작성.

CT-based Lung Ventilation Synthesis 논문을 한 페이지의 단독 주제로 구성한다.

연구진이 지정한 pix2pixHD, ResViT, I2SB, SelfRDB를 구현·학습·평가하고 통계 분석, 비교 figure, 실험 방법과 결과 해석 원고를 작성한 범위를 보여준다. 연구 기획이나 모델 선정의 주도성을 주장하지 않는다.

PECT는 공개 승인 전까지 이 페이지에서 제외한다. 실제 환자 영상 대신 synthetic CT·ventilation map·defect mask schematic을 사용한다.

## STEP 6

CLE Tumor Classification + MAGAR XAI 작성. (완료)

MaxViT 구조 → 포트폴리오 톤으로 재구성한 웹 Assessment 창(Original · Grad-CAM · MAGAR 비교)을 메인으로 두고, MAGAR 절차, 분류·XAI 평가, 2024 / 2026 역할을 배치한다.

## STEP 7

GPU / AI Infrastructure 작성. (완료)

반투명 GPU 서버 이미지와 Slurm 배정 경로를 메인으로 두고, 기반 구성 한 줄, 문제 해결 micro-diagram 3건, 구축 총괄 역할을 배치한다.

## STEP 8

Recappers 작성.

Architecture diagram 포함.

작업 전, 실제 웹 UI / Multi-Modal pipeline / 교수 검수 flow / AI 결과 화면 중 무엇을 가장 크게 보여줄지 결정한다.

## STEP 9

Generative AI Video page 작성.

실제 screenshot 위치 placeholder 포함.

작업 전, 실제 입력 화면 / 원본 이미지 / 생성 영상 frame / pipeline 중 무엇을 가장 크게 보여줄지 결정한다.

## STEP 10

Profile / Other Projects / Awards / Contact 작성.

학력, 주요 연구 경험, 수상, Bixby, STAC, 연락처를 간결하게 정리한다. 앞 페이지에서 충분히 설명한 수상 실적은 중복 강조하지 않는다.

## STEP 11

전체 typography / spacing / visual hierarchy 통일.

## STEP 12

Print PDF test.

- page break
- image
- font
- size

확인.

각 STEP 2~10은 반드시 다음 순환을 따른다.

```text
페이지 목표 확인
    ↓
가장 크게 보여줄 대상 결정
    ↓
해당 페이지만 구현
    ↓
브라우저 / PDF 기준 시각 검토
    ↓
사용자 확인 및 수정
    ↓
다음 페이지 진행
```


---

# 16. Codex Modification Rules

사용자가 특정 페이지 수정을 요청하면:

1. 해당 페이지의 목적을 유지한다.
2. 기존 디자인 시스템을 깨지 않는다.
3. 관련 없는 페이지는 임의로 변경하지 않는다.
4. 콘텐츠 사실을 새로 만들어내지 않는다.
5. 기존 사실과 충돌하는 내용을 추가하지 않는다.

사용자가:

"여백이 너무 많다"

라고 요청하면 단순히 요소를 크게 늘리지 말고
정보 구조와 시각적 균형을 먼저 검토한다.

사용자가:

"더 멋있게"

라고 요청해도
gradient / animation / decoration을 무작정 추가하지 않는다.

포트폴리오의 최우선 목표는:

**읽기 쉬움 + 실제 결과물 전달 + 기술적 신뢰감**

이다.


---

# 17. Definition of Done

최종 결과물은 다음 질문에 모두 YES여야 한다.

- 10초 안에 지원자의 주요 AI 경험을 이해할 수 있는가?
- 각 프로젝트에서 지원자가 무엇을 했는지 알 수 있는가?
- 실제 결과물이 보이는가?
- AI 모델 / 서비스 / 연구 / 인프라 경험이 모두 드러나는가?
- 텍스트보다 시각 정보가 중심인가?
- 페이지가 과밀하지 않은가?
- 의료 데이터 보안 문제가 없는가?
- PDF가 50MB 이하인가?
- 모바일 웹이 아니라 PDF로 봤을 때 완성도가 높은가?
- SK hynix AI Hackathon 지원 자료로 제출 가능한 수준인가?

모든 조건을 만족한 뒤 최종 PDF를 생성한다.

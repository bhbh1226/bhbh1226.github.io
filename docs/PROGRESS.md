# Portfolio Progress

마지막 업데이트: 2026-09-23

## 1. Current State

최종 결과물은 A4 Landscape 규격의 9페이지 PDF로 제작한다.

전체 페이지를 한 번에 완성하지 않고 다음 순서를 유지한다.

`전체 Skeleton → 표지 → 한 페이지씩 구현·검토 → 전체 통일 → PDF 검수`

현재 1~3페이지 초안을 확정했으며, 다음 작업 대상은 4페이지 서울아산병원 Medical AI다.

| Page | Content | Status |
| --- | --- | --- |
| 01 | Cover | Draft approved |
| 02 | SNUH — Aneurysm / ICA feature study | Draft approved |
| 03 | SNUH — Pediatric digital phenotyping | Draft approved |
| 04 | Asan Medical Center — Medical AI | Skeleton / next |
| 05 | Pathology AI + XAI | Skeleton |
| 06 | GPU / AI Infrastructure | Skeleton |
| 07 | Recappers | Skeleton |
| 08 | Generative AI Video | Skeleton |
| 09 | Profile, Awards & Other Work | Skeleton |

## 2. Design Direction Confirmed

- 검은 배경, 저채도 회색 typography, 적갈색 accent를 기본으로 사용한다.
- 표지에서 정한 기술적·편집 디자인의 결을 프로젝트 페이지까지 연결한다.
- 동일한 카드와 번호 원을 반복하는 전형적인 AI 생성형 레이아웃을 피한다.
- 프로젝트마다 핵심 작업을 설명하는 고유한 figure를 사용한다.
- 장식용 이미지보다 실제 데이터 구조와 작업 내용을 설명하는 schematic을 우선한다.
- 페이지마다 가장 크게 보여줄 한 가지를 먼저 결정한 뒤 세부 디자인을 진행한다.

## 3. Page 01 — Cover

### Confirmed

- 이름 `Park PyeongJin`을 주요 시각 요소로 사용한다.
- 이름의 대소문자는 논문 표기와 동일하게 유지한다.
- 분야는 Medical AI, Software, Infrastructure의 관계가 드러나도록 구성한다.
- GitHub, LinkedIn, Email은 표지에 유지한다.
- 학교 소속처럼 오해될 수 있는 현재 소속 표기는 넣지 않는다.
- 불필요한 행사명과 `Selected Works` 문구는 사용하지 않는다.
- 기술적 3D 오브제는 이름을 방해하지 않는 보조 요소로 사용한다.

### Deferred

- 최종 PDF 단계에서 연락처 크기와 링크 동작 확인
- 전체 페이지와 비교해 표지 오브제 대비 최종 조정

## 4. Page 02 — SNUH Aneurysm Study

### Main Message

TOF-MRA에서 좌우 ICA 구간의 geometry·radiomics 특성을 구성하고, classical ML과 feature ablation으로 뇌동맥류 발생 부위와 관련된 신호를 검토한 연구 작업을 보여준다.

### Confirmed Content

- 3D Slicer Markups landmark를 ICA 구간 추출에 실제 사용
- landmark 기반 centerline 및 ROI 추출
- geometry·radiomics feature 생성
- 좌우 평균과 절댓값 차이 feature를 직접 설계
- classical ML 및 feature ablation
- 서로 다른 익명 ID로 중복 저장된 동일 환자·영상 사례 확인
- 중복 확인은 header, hash, voxel 비교와 육안 검토를 사용

### Disclosure Rules

- 실제 환자 영상, cohort 구성, annotation 좌표를 사용하지 않는다.
- 승인되지 않은 성능 수치와 결과 그래프를 공개하지 않는다.
- 최신 전처리·수정 cohort로 재평가하지 않은 기존 수치를 최종 성능으로 제시하지 않는다.
- 현재 3D 뇌혈관 이미지는 synthetic visual임을 명시한다.

### Deferred

- PDF 출력 크기에서 작은 영문 caption 가독성 확인
- Page 03과 title/body/caption 크기 최종 통일

## 5. Page 03 — Pediatric Digital Phenotyping

### Main Message

스마트폰·웨어러블·자가보고 데이터를 사용하는 기존 연구 파이프라인을 재현하고, 데이터 규칙과 참여자 단위 평가 구조를 교정한 작업을 보여준다.

### Confirmed Content

- 스마트폰 사용·사회활동·GPS
- 웨어러블 활동·수면·심박
- 자가보고 설문
- 대조군과 우울·불안 관련 임상군을 구분한 기존 연구 재현
- 참여자 단위 split과 nested cross-validation
- 전처리·대치·feature selection을 학습 fold 내부에서 수행
- 결측·중도탈락·미분류 라벨 제외
- 센티넬·무한대·비정상 생체값 정제
- 정답 척도와 시점 metadata 제거
- 여러 seed에서 기존 보고 조건 재현 및 성능 변동성 확인

### Visual Structure

- 좌측 상단: 관측창별 longitudinal input과 feature table
- 우측 상단: 참여자 단위 학습·평가 분리
- 좌측 하단: Data Rules / Evaluation Rules audit micro-diagram
- 우측 하단: Reproduction / Observation / My Scope

### Implementation Notes

- `DigitalPhenotypingPage.jsx`를 의미 단위 컴포넌트로 분리했다.
- 패널 위치, 설문 점, 참여자 주차, feature 열을 데이터로 관리한다.
- 폐기된 Page 03 CSS와 후행 override를 제거했다.
- 네 audit SVG는 동일한 `210 × 34` 좌표계를 사용한다.

### Deferred

- `feature`, `metadata`, `seed`, `fold`, `pipeline`의 표기 통일
- PDF 출력 시 micro-diagram 내부 글자 크기 확인
- 전체 페이지 완성 후 Page 02와 정보 밀도 비교

## 6. Next Page — Asan Medical Center

다음 페이지를 구현하기 전에 가장 크게 보여줄 연구 한 가지를 먼저 결정한다.

현재 후보:

1. Contrast-enhanced CT synthesis와 Fourier Domain Adaptation
2. 구조가 다른 CT-based lung ventilation synthesis 모델 4종의 공통 학습·평가 pipeline

필요한 정보:

- 두 연구에서 본인이 직접 수행한 범위
- 실제 사용한 모델명과 framework
- 공개 가능한 architecture 또는 abstracted result
- MICCAI 2026 SASHIMI Workshop 채택 연구와 각 작업의 관계
- 병원 승인 없이 공개하면 안 되는 자료의 범위

실제 의료영상이나 내부 결과를 확인하기 전에는 placeholder 또는 synthetic schematic만 사용한다.

## 7. Final QA Backlog

- 전체 페이지의 기술 용어 표기 통일
- title/body/caption 크기 통일
- PDF 100% 미만 배율에서 본문 가독성 확인
- 페이지 overflow와 footer 침범 확인
- 실제 링크 동작 확인
- 배경색과 SVG의 Print to PDF 출력 확인
- 의료 데이터 및 내부 정보 노출 재검토
- 최종 PDF 50MB 이하 확인

## 8. Git / Commit Plan

현재 `/Users/bhbh1226/coding/portfolio`는 Git 저장소가 아니다.

사용자 확인 후 다음 순서로 시작한다.

1. `git init`
2. `.gitignore` 추가
   - `node_modules/`
   - `dist/`
   - macOS 임시 파일
3. `npm run build` 재검증
4. 현재 상태를 기준 커밋으로 생성

권장 첫 커밋:

```text
feat: establish portfolio skeleton and first medical AI pages
```

첫 커밋에는 다음을 함께 포함한다.

- Vite/React 및 A4 landscape print 구조
- 9페이지 Skeleton
- Cover
- SNUH Aneurysm page
- SNUH Digital Phenotyping page
- 현재 디자인 시스템과 synthetic assets
- README와 진행 상황 문서

현재까지의 작업은 서로 의존성이 높고 Git 이력이 없으므로, 과거 작업을 억지로 여러 커밋으로 분할하지 않는다.

이후에는 페이지 단위로 커밋한다.

```text
feat: build Asan Medical Center case study
feat: build pathology AI and XAI case study
feat: document GPU training infrastructure
feat: build Recappers case study
feat: build generative AI video case study
feat: complete profile awards and other work
style: unify portfolio typography and spacing
chore: verify print layout and export final PDF
```

커밋 전에는 항상 해당 페이지의 화면 확인과 `npm run build`를 완료한다.

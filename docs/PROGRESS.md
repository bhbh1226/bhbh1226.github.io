# Portfolio Progress

마지막 업데이트: 2026-09-25

## 1. Current State

최종 결과물은 A4 Landscape 규격의 9페이지 PDF로 제작한다.

전체 페이지를 한 번에 완성하지 않고 다음 순서를 유지한다.

`전체 Skeleton → 표지 → 한 페이지씩 구현·검토 → 전체 통일 → PDF 검수`

현재 1~3페이지 초안을 확정했고, 4페이지 서울아산병원 폐 환기지도 합성 연구의 상세 초안을 구현·검토했다.

5페이지 CLE 종양 분류와 MAGAR XAI 연구는 구현과 사용자 검토를 마쳤고, Chrome Print to PDF 출력까지 확인했다. 다음 작업은 Page 06 GPU / AI Infrastructure다.

| Page | Content | Status |
| --- | --- | --- |
| 01 | Cover | Draft approved |
| 02 | SNUH — Aneurysm / ICA feature study | Draft approved |
| 03 | SNUH — Pediatric digital phenotyping | Draft approved |
| 04 | Asan Medical Center — CT-based lung ventilation synthesis | Detailed draft / reviewing |
| 05 | CLE tumor classification + MAGAR XAI | Draft approved / PDF checked |
| 06 | GPU / AI Infrastructure | Skeleton |
| 07 | Recappers | Skeleton |
| 08 | Generative AI Video | Skeleton |
| 09 | Profile, Awards & Other Work | Skeleton |

## 2. Design Direction Confirmed

- 검은 배경, 저채도 회색 typography, 적갈색 accent를 기본으로 사용한다.
- 분야별 category color를 사용한다: AI RESEARCH 적갈색 `#a63b2d`(확정), GPU INFRA 초록색, SERVICE 파란색. 초록·파란색 값은 해당 페이지 작업 시 확정한다.
- Page 05는 AI RESEARCH로 확정했다.
- 구현은 React + Vite + CSS Modules를 기준으로 한다.
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

## 6. Current Review — Asan Medical Center

Page 04는 논문으로 완료된 **CT 기반 폐 환기지도 합성 연구**에 단독 할당한다. PECT 연구는 같은 페이지에 넣지 않는다.

### Ventilation Study — Confirmed Scope

- 입력: 공동 연구자가 전처리한 흡기·호기 CT
- 비교 모델: pix2pixHD, ResViT, I2SB, SelfRDB
- 박평진의 직접 수행 범위:
  - 연구진이 지정한 4개 생성 모델을 연구 task에 맞게 구현
  - 모델 학습과 평가 실행
  - 공통 평가 코드 구성
  - 통계 분석
  - 비교 figure 제작
  - 실험 방법·결과·해석을 중심으로 논문 작성
- 데이터 전처리는 공동 연구자가 담당
- 연구 방향, 비교 모델과 평가 지표는 선임 연구자의 요청에 따라 정해졌으므로 연구 기획·모델 선정의 주도성을 주장하지 않는다.
- 결과: MICCAI 2026 SASHIMI Workshop 채택 논문, 제2저자

페이지의 중심 메시지:

> 4개 생성 모델을 같은 데이터와 평가 조건에서 구현·비교했으며, 영상 유사도가 높은 모델과 환기 결손을 잘 재현한 모델이 서로 달랐다.

주요 결과는 ResViT의 PSNR·SSIM과 SelfRDB의 결손 영역 DSC·Sensitivity 차이를 중심으로 최소한만 노출한다. 실제 환자 CT와 논문 figure를 그대로 사용하지 않고, synthetic CT·ventilation map·defect mask schematic으로 평가 구조를 재구성한다.

### PECT — Deferred / Disclosure Rule

PECT는 공개 승인을 받지 않은 미공개 연구이므로 현재 포트폴리오 본문에서 제외한다.

승인 전 공개하지 않는 정보:

- 실제 CT·DICOM 및 생성 영상
- 환자 수와 cohort 구성
- 내부 전처리 및 데이터 흐름
- 에너지 조건, FDA 설정과 상세 모델 구조
- 중간·최종 성능 수치와 결과 figure
- 코드, 저장소, 내부 경로와 실행 화면

기관에서 업무 내용 자체의 외부 표기를 허용한다는 전제에서 마지막 페이지에 `의료영상 생성 모델의 학습·평가 환경과 비교 실험 파이프라인 구현` 정도의 일반적인 한 줄만 사용할 수 있다. 프로젝트명, PECT, A2SB, FDA와 구체적인 변환 조건은 연구진의 명시적 승인 후에만 추가한다.

### Implemented Visual Structure

- 상단: 연구 제목과 `AI RESEARCH` category mark
- 요약: 동일 데이터·평가 조건에서 GAN 2종과 Diffusion 2종을 비교했다는 연구 범위
- 메인 도식: `정합된 흡기·호기 CT → 4개 생성 모델 → 폐 환기지도`
- 결과 비교: ResViT의 영상 유사도와 SelfRDB의 환기 결손 재현 결과를 하나의 비교축으로 구성
- 공통 결론: 영상 유사도와 환기 결손 재현에서 서로 다른 모델이 가장 높은 결과를 보였음을 명시
- 하단: `본인 기여 → 연구 맥락 → 논문 정보` 순서로 역할과 결과를 분리

### Synthetic Assets

- 입력은 실제 연구 데이터가 아닌 lung-masked coronal synthetic CT를 사용한다.
- 흡기 이미지: `assets/images/synthetic-coronal-inspiratory-ct-v1.png`
- 정합 호기 이미지: `assets/images/synthetic-coronal-registered-expiratory-ct-v1.png`
- 출력 이미지: `assets/images/synthetic-lung-ventilation-v3.png`
- 초기 axial CT는 실제 입력 형태 및 coronal output과 연결성이 부족해 폐기했다.
- ventilation v2의 기관·주기관지가 입력 폐 마스크와 일치하지 않아, 좌우 폐만 남긴 v3로 교체했다.
- 출력에서는 밝은 영역을 높은 환기, 어두운 영역을 낮은 환기로 설명한다.

### Role Presentation

- 본인 기여를 `4개 모델 구현 → 공통 조건 학습·평가 → 통계 분석·비교 figure → 방법·결과·해석 원고 작성`의 네 단계로 표시한다.
- 연구진이 비교 모델과 평가 지표를 지정한 사실은 `RESEARCH CONTEXT`에 배치한다.
- 공동 연구자가 CT 전처리를 담당한 사실을 같은 영역에 명시한다.
- 연구 전체 기획, 모델·지표 선정 또는 데이터 전처리를 주도한 것처럼 표현하지 않는다.

### Layout Verification

- 중앙 모델 영역은 `GENERATIVE MODELS` 아래 GAN / Diffusion 두 열로 단순화했다.
- 불필요했던 `IMPLEMENT · TRAIN · EVALUATE`, `SYNTHESIZE`, `같은 데이터` 표기를 제거했다.
- 하단을 `평가별 대표 결과 → 공통 결론 → 본인 기여 → 연구 맥락·출판` 순서로 재구성했다.
- 고정 행 높이를 재배분해 하단 영역의 실제 overflow를 제거했다.
- 브라우저 측정 결과 Page 04의 `.vent-case`와 `.vent-foot`은 `scrollHeight === clientHeight`이며 내부 넘침이 없다.
- `npm run build`와 `git diff --check`를 통과했다.

### Remaining Review

- `MICCAI 2026 SASHIMI Workshop`과 `Second author`의 최종 공식 표기 확인
- 최종 PDF 배율에서 대표 수치와 영문 caption 가독성 확인
- 실제 PDF 출력에서 v3 이미지의 검은 배경, crop, grayscale 대비 확인
- Page 04 사용자 승인 후에만 Page 05 Pathology AI로 이동

### Image Generation Workflow

- 이후 신규 raster 이미지가 필요해도 Codex에서 바로 생성하지 않는다.
- 먼저 이미지의 역할, 구도, 표현 방식과 금지 요소를 정리한다.
- 사용자가 ChatGPT에서 생성할 수 있도록 완성된 이미지 생성·편집 프롬프트를 제공한다.
- 사용자가 전달한 결과물을 페이지에 적용하고 crop·크기·대비만 조정한다.

## 6-1. Page 05 — CLE Tumor Classification + MAGAR XAI (Approved)

### Sources

- 학사 졸업논문: 공초점 레이저 내시현미경 영상의 MaxViT 기반 MAGAR XAI 적용 종양 분류 연구 (2026)
- 소스코드 저장소 `CLSM-cancer-classification` (비공개, 링크 사용 안 함)

### Confirmed Content

- Category: AI RESEARCH
- CLE 영상, 대장 선암 Normal / Tumor 영상 단위 분류. WSI patch가 아님
- 동결절편 검사는 연구 배경과 시간 비교 대상으로만 사용. 판정 시간 단축을 결과로 쓰지 않음
- MaxViT 5-fold soft-voting ensemble, 환자 단위 GroupKFold, new cohort 4,889장 test
- F1 0.9485 · AUROC 0.9910 · Recall 0.9727 · 단일 영상 추론 약 205 ms (RTX A6000)
- MAGAR: Multi-Axis Gradient-weighted Attention Rollout
- XAI 평가: Stability는 MAGAR 0.27–0.31, Grad-CAM −0.03. Faithfulness(Ins − Del AUC)는 Grad-CAM 우위. MAGAR가 모든 지표에서 우수하다고 쓰지 않음
- 2024 공과대학 학술제(3인 팀): MaxViT 분류 모델 개발, MAGAR 제안·구현 (웹을 제외한 작업 담당), 제33회 순천향대학교 공과대학 학술제 은상. 당시 웹은 본인 구현 아님
- 2026 졸업논문(개인): 모델 학습·평가, XAI 정량 검증, 웹 추론 시스템 새로 구현, 논문 작성
- 웹: React · Vite · Tailwind / FastAPI · SQLAlchemy · PostgreSQL / JWT / Docker Compose · nginx
- 학술제 당시 성능 수치(예: Accuracy 98.21%)는 논문 수치와 실험 조건이 달라 함께 쓰지 않음

### Disclosure

- 실제 CLE 영상, 논문 figure의 환자 영상 사용 안 함. synthetic CLE + schematic heatmap
- 전체 데이터 규모(163명 · 9,031장)는 공개 가능하지만 본문에서는 test 조건만 표기
- 웹 UI는 스크린샷을 쓰지 않고, 실제 화면 구성(Assessment Result · Original / Grad-CAM / MAGAR / Compare 탭)을 참고해 포트폴리오 톤으로 재구성. 확률과 calibrated confidence는 실제 화면의 표시 형식대로 넣고, synthetic 영상이라 예시 표기는 하지 않음
- Heatmap은 도식: Grad-CAM은 jet colormap과 격자형으로 흩어진 반응, MAGAR는 흑백 영상 위 노란 heatmap이 종양 의심 구조 쪽에 모이고 조직 경계를 따라가도록 표현 (논문 figure의 정성적 경향)

### Implemented Visual Structure

- 메인: MaxViT 구조 칸 → 포트폴리오 톤으로 재구성한 CLE Assessment 웹 창 (확률 · calibrated confidence · Model / Inference / Serving, Original · Grad-CAM · MAGAR 비교)
- MAGAR 5단계 절차 줄. MAGAR 이름을 MaxViT보다 크게 표시
- 하단 3칸: CLASSIFICATION 대표 수치 / Stability dot plot과 Faithfulness 한 줄 / 2024 · 2026 MY SCOPE
- 헤더 라벨: Soonchunhyang University · Medical AI Lab · Undergraduate Research
- Baseline 한 줄: 동일 조건 7개 모델 중 MaxViT F1 1위, 단일 모델 기준 · AUROC는 Swin-S 근소 우위 (앙상블 수치와 조건이 다름을 명시)
- STUDY 줄 오른쪽: 배경(동결절편 검사 · 대장 선암 CLE 영상)과 문제(Grad-CAM이 MaxViT의 Block · Grid attention을 반영하지 못함)
- 뺀 내용: 전체 데이터 규모, Sanity · Concentration 언급, 웹 흐름 목록 (UI 창으로 대체)
- Chrome headless Print to PDF에서 heatmap blend · SVG mask 정상 출력 확인

### Synthetic Asset

- `assets/images/synthetic-cle-colorectal-v1.png`: ChatGPT로 생성. 처음 프롬프트 결과는 세포 구조가 거부감을 줄 수 있어, 사용자가 찾은 CLE 참고 이미지를 바탕으로 다시 생성
- 실제 환자 CLE가 포함된 웹 스크린샷(`fig06_web_ui.png`)은 포트폴리오 폴더에서 제거함

### Remaining

- 전체 통합 단계에서 `#a63b2d` 하드코딩을 category 변수로 정리

## 6-2. Next — Page 06 GPU / AI Infrastructure

작업 전 결정할 것:

- 가장 크게 보여줄 것: 전체 cluster architecture 또는 운영 문제 해결 경험
- GPU INFRA category의 초록색 값 (적갈색과 채도·명도를 맞춤)
- 운영 기간과 공식 역할 (AGENTS.md의 추후 확인 항목)

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

Git 저장소와 기준 커밋이 생성되어 있다.

```text
9b51757 feat: establish portfolio skeleton and first medical AI pages
```

Page 04의 사용자 검토가 끝나면 다음 커밋으로 분리한다.

```text
feat: build Asan Medical Center ventilation study page
```

Page 05는 다음 메시지로 분리해 커밋한다. 커밋 대상은 `src/pages/05-pathology-xai/`, `assets/images/synthetic-cle-colorectal-v1.png`, `src/App.jsx`의 Page 05 등록이다.

```text
feat: build CLE tumor classification and MAGAR XAI page
```

React 우선 구조와 분야별 category color를 반영한 `AGENTS.md` 수정은 문서 커밋으로 분리한다.

```text
docs: align agent guide with React stack and category colors
```

이후에는 페이지 단위로 커밋한다.

```text
feat: document GPU training infrastructure
feat: build Recappers case study
feat: build generative AI video case study
feat: complete profile awards and other work
style: unify portfolio typography and spacing
chore: verify print layout and export final PDF
```

커밋 전에는 항상 해당 페이지의 화면 확인과 `npm run build`를 완료한다.

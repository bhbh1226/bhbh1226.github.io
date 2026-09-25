# Portfolio Progress

마지막 업데이트: 2026-09-25

## 1. Current State

최종 결과물은 A4 Landscape 규격의 9페이지 PDF로 제작한다.

전체 페이지를 한 번에 완성하지 않고 다음 순서를 유지한다.

`전체 Skeleton → 표지 → 한 페이지씩 구현·검토 → 전체 통일 → PDF 검수`

현재 1~3페이지 초안을 확정했고, 4페이지 서울아산병원 폐 환기지도 합성 연구는 브라우저 기준 상세 디자인 검토를 마쳤다. 최종 PDF 출력 검수만 남아 있다.

5페이지 CLE 종양 분류와 MAGAR XAI 연구는 구현과 사용자 검토를 마쳤고, Chrome Print to PDF 출력까지 확인했다.
6페이지 GPU / AI Infrastructure는 인프라 저장소의 git 기록으로 본인 범위를 확인한 뒤 구현했고, 사용자 검토와 Print to PDF 확인을 마쳤다.
7페이지 Recappers는 논문 원문과 사용자 확인을 바탕으로 구현했으며, 브라우저 기준 상세 디자인 검토를 마쳤다. 최종 PDF 출력 검수만 남아 있다.

| Page | Content | Status |
| --- | --- | --- |
| 01 | Cover | Draft approved |
| 02 | SNUH — Aneurysm / ICA feature study | Draft approved |
| 03 | SNUH — Pediatric digital phenotyping | Draft approved |
| 04 | Asan Medical Center — CT-based lung ventilation synthesis | Browser layout approved / PDF QA pending |
| 05 | CLE tumor classification + MAGAR XAI | Draft approved / PDF checked |
| 06 | GPU / AI Infrastructure — Slurm cluster | Draft approved / PDF checked |
| 07 | Recappers — Multi-Modal LLM lecture assistant | Browser layout approved / PDF QA pending |
| 08 | Generative AI Video — 잔향 | Draft approved / PDF checked |
| 09 | Profile, Awards & Other Work | Skeleton |

## 2. Design Direction Confirmed

- 검은 배경, 저채도 회색 typography, 적갈색 accent를 기본으로 사용한다.
- 분야별 category color를 사용한다: AI RESEARCH 적갈색 `#a63b2d`(확정), GPU INFRA 초록색 `#3f8f66`(확정), SERVICE 파란색 `#5b87b5`(Page 07 · 08 공통).
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

> 4개 생성 모델을 같은 데이터와 평가 조건에서 구현·비교했으며, 평가 지표에 따라 가장 높은 결과를 보인 모델이 달랐다.

주요 결과는 ResViT의 PSNR·SSIM과 SelfRDB의 결손 영역 DSC·Sensitivity를 중심으로 노출한다. pix2pixHD, ResViT, I²SB, SelfRDB 네 모델 모두 동일한 `PSNR / SSIM / DSC / Sensitivity` 평균값을 표시하고 최고값만 강조한다. 실제 환자 CT와 논문 figure를 그대로 사용하지 않고, synthetic CT·ventilation map schematic으로 평가 구조를 재구성한다.

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
- 결과 비교: 네 모델의 `PSNR / SSIM / DSC / Sensitivity` 평균값을 4열로 구성하고 `ResViT — PSNR·SSIM`, `SelfRDB — DSC·Sensitivity` 최고값을 구분
- 결과 해석: 수치 행 아래에서 `PSNR·SSIM 최고 · ResViT`, `결손 DSC·Sensitivity 최고 · SelfRDB`를 짧게 정리
- 하단: `MY CONTRIBUTION`을 `IMPLEMENT → EXPERIMENT → ANALYSIS → PAPER` 네 단계로 표시하고, 오른쪽에 연구 맥락과 논문 인용을 배치

### Synthetic Assets

- 입력은 실제 연구 데이터가 아닌 lung-masked coronal synthetic CT를 사용한다.
- 흡기 이미지: `assets/images/synthetic-coronal-inspiratory-ct-v1.png`
- 정합 호기 이미지: `assets/images/synthetic-coronal-registered-expiratory-ct-v1.png`
- 출력 이미지: `assets/images/synthetic-lung-ventilation-v3.png`
- 초기 axial CT는 실제 입력 형태 및 coronal output과 연결성이 부족해 폐기했다.
- ventilation v2의 기관·주기관지가 입력 폐 마스크와 일치하지 않아, 좌우 폐만 남긴 v3로 교체했다.
- 출력에서는 밝은 영역을 높은 환기, 어두운 영역을 낮은 환기로 설명한다.

### Role Presentation

- 본인 기여를 `4개 모델 구현 → 동일 조건 학습·평가 → 공통 평가 코드·통계 분석 → 비교 figure·논문 원고 작성`의 네 단계로 표시한다.
- `RESEARCH CONTEXT`에는 연구진이 정한 비교 조건과 공동 연구자가 전처리한 CT를 바탕으로 모델 구현·평가를 수행했다는 문장만 간결하게 배치한다.
- `PUBLICATION`에는 `Choi, C., Park, P., Lee, S. M., & Kim, N.` 저자 순서, 논문 제목, `SASHIMI Workshop, MICCAI 2026`을 축약 인용 형식으로 표시하고 `Park, P.`를 강조한다.
- 연구 전체 기획, 모델·지표 선정 또는 데이터 전처리를 주도한 것처럼 표현하지 않는다.

### Layout Verification

- 중앙 모델 영역은 `GENERATIVE MODELS` 아래 GAN / Diffusion 두 열로 단순화했다. GAN은 회색 이중선, Diffusion은 적갈색 단일선으로 구분한다.
- 불필요했던 `IMPLEMENT · TRAIN · EVALUATE`, `SYNTHESIZE`, `같은 데이터` 표기를 제거했다.
- 하단을 `4개 모델 정량 비교 → 지표별 결론 → 본인 기여 → 연구 맥락·논문 인용` 순서로 재구성했다.
- 입력 CT 라벨, 모델 그룹명, `4 MODEL COMPARISON`, 출력 설명과 하단 역할 설명의 글자 크기·대비를 확대했다.
- 고정 행 높이를 재배분해 하단 영역의 실제 overflow를 제거했다.
- 브라우저 측정 결과 Page 04의 page/content 모두 가로·세로 overflow가 없다.
- `npm run build`와 `git diff --check`를 통과했다.

### Remaining Review

- 최종 PDF 배율에서 4개 모델 수치, 영문 caption, 논문 인용의 가독성 확인
- 실제 PDF 출력에서 v3 이미지의 검은 배경, crop, grayscale 대비 확인
- PDF 출력에서 GAN 이중선과 Diffusion 단일선의 두께·강조색 재현 확인

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

## 6-2. Page 06 — GPU / AI Infrastructure (Approved)

### Sources

- 인프라 저장소의 코드·설정·문서와 git 기록 (별도 세션에서 조사, 사실마다 커밋·파일 근거 확인)
- 사용자 확인: 연구실 랩장으로 구축 총괄, 커밋 기간 이후에도 운영·장애 대응 지속, 후임 인수인계, 홈 백업 복원 검증 직접 수행

### Confirmed Content

- 본인 커밋 2026-07-03 ~ 07-08 (37 / 180). 이후 모니터링 · Ansible · accounting · 정량 지표 · 보안 · DR은 다른 기여자 작업이라 페이지에서 제외
- 관리 노드 2 + GPU 노드 3, GPU 6장 (A6000 ×1, RTX Pro 6000 ×2, L40 ×3 원격)
- FreeIPA 계정 10개 이식, NFS 중앙 홈, Slurm GRES · partition · cgroup, JupyterHub + MOSlurmSpawner, 로컬망 + Tailscale, Borg 홈 일일 백업과 복원 검증, Git 런북 · CHANGELOG
- 문제 해결: 제어 노드 주소 충돌, 컨테이너 CUDA 소실(CDI 전환), 매번 전체 복사되던 백업(Borg 전환)
- "고정 IP 전환", "전체 백업"은 기록과 맞지 않아 "주소 재배치", "홈 백업"으로 표현

### Implemented Visual Structure

- 요약 줄: 서버별 로컬 계정 · 직접 GPU 점유 → 중앙 인증 · GPU 타입별 스케줄링 · JupyterHub 셀프서비스. 오른쪽에 이전 상태와 규모
- 메인: 왼쪽 접근 흐름(USERS → ENTRY → Slurm) + 반투명 GPU 서버 이미지. Slurm 배정선이 서버 위 LOCAL 선으로 이어지고, LOCAL과 REMOTE 사이는 점선(Tailscale)
- 서버 위 라벨: GPU 이름, 장수, 초록 칩
- 기반 구성 한 줄: AUTH · NETWORK · STORAGE · BACKUP · DOCS
- 하단: 문제 해결 3건(문제 = 흐린 점선, 조치 = 초록 실선 micro-diagram) / MY ROLE 구축 총괄 · 설계·구축 → 운영·장애 대응 → 인수인계
- 후속 기여자 작업을 흐리게 적던 LATER 줄은 할 일 목록처럼 보여 제거

### Synthetic Asset

- `assets/images/gpu-cluster-translucent-v3.png`: ChatGPT 생성. 첫 이미지(광택 제품 렌더, 서버마다 GPU 4장)와 판화풍 이미지 두 장은 표지 질감과 맞지 않거나 GPU 수가 달라 쓰지 않음
- 표지 오브제의 표현 방식(반투명 외피 · 흑백 · 강조색 가닥)을 맞추고, 그림 속 GPU 수를 실제 1 · 2 · 3장과 일치시킴

### Remaining

- 쓰지 않는 서버 이미지 3장 정리
- 랩장 재임 시작 월은 Page 09 경력 작업 때 확인

## 6-3. Page 07 — Recappers (Browser Approved)

### Sources

- 논문: `강의자료 기반 Multi-Modal LLM Distillation을 활용한 강의 특화 학습 보조 시스템`
- 영문 제목: `Lecture-Tailored Learning Assistance via Multi-Modal LLM Distillation from Lecture Materials`
- 사용자 확인: 프로젝트 팀장으로 서비스 구조와 역할을 설계하고 개발 과제를 분배. Web Frontend / Backend와 STT 구현은 팀원 담당, 나머지 AI 파이프라인·실험·논문 작성 담당
- 초기 서비스는 학생이 PDF를 직접 질의하는 방식이었으나, 피드백 후 교수자가 강의자료를 업로드하고 검수한 뒤 학생에게 제공하는 구조로 변경

### Confirmed Content

- 입력: PDF 강의자료와 강의 음성
- 전처리: OCR 기반 slide parsing과 ASR transcript를 강의 구간 단위로 연결
- Teacher: GPT-5 · Gemini 2.5 Flash
- Student: Gemma-3n + 강의별 LoRA
- Teacher가 생성한 요약·질의응답 데이터를 이용한 lecture-specific multimodal distillation
- 학습 서비스: PDF 열람 · 강의 기반 Chat / Quiz · 음성과 연결된 Transcript
- 교수자 검수 후 학생에게 제공하는 흐름
- 연구 결과: 12개 강의 데이터셋, Teacher Q&A 성능 87% 유지, 질문 변형 응답 일관성 0.91, ROUGE-L 약 40, untuned baseline 대비 주요 지표 22–28% 향상
- 논문 제1저자, KICSP 2025 추계학술대회 우수발표논문상

### Implemented Visual Structure

- Category: AI SERVICE, Page 08과 같은 파란색 `#5b87b5`
- 상단 요약: 프로젝트 설명과 `학생의 단순 PDF 질의 도구 → 교수자 중심 강의 특화 시스템` 전환
- 메인 왼쪽: 두 Teacher 모델에서 하나의 lecture-specific Student 모델로 지식이 전달되는 합성 이미지
  - 이미지 위에 `2 TEACHERS → KNOWLEDGE TRANSFER → 1 STUDENT`를 직접 표시
  - 아래에 실제 모델명과 `Teacher 요약·질의응답 데이터 → 강의별 Gemma-3n LoRA 학습`을 표시
- 메인 오른쪽: 실제 기능 구조를 포트폴리오 톤으로 재구성한 Web UI
  - 왼쪽 PDF lecture slide, 오른쪽 Chat / Quiz, 하단 Audio & Linked Transcript
  - lecture slide는 밝은 차콜 배경과 흰색 본문·파란색 강조 사용
  - 오디오 행을 14mm로 줄여 채팅 영역을 확보
  - `INSTRUCTOR REVIEW → STUDENT` 상태 표시
- 왼쪽 이미지와 Web UI 박스의 시작점을 동일하게 정렬하고, Web UI 헤더 아래의 중복 가로선 제거
- 하단 3개 영역: RESEARCH RESULT / MY ROLE / PUBLICATION
  - MY ROLE은 `Project Lead → 핵심 책임 → LEAD / AI → DIRECT / TEAM` 순서로 구성
  - DIRECT: 실험·논문 작성
  - TEAM: Web Frontend / Backend · STT
  - 세로 구분선은 중간 영역과 footer 경계 기준으로 위아래 여백을 동일하게 조정
- 작은 회색 보조 텍스트는 크기와 명도를 높여 PDF 축소 보기에서도 읽히도록 조정
- 브라우저 기준 페이지, Web UI, Chat, Transcript overflow 없음

### Synthetic Asset

- 현재 사용 이미지: `assets/images/recappers-knowledge-distillation-v1.png`
- 두 개의 기계형 Teacher brain과 하나의 작은 Student brain을 연속적인 파란색 신호선으로 연결
- GPU 인프라 이미지로 오해되지 않도록 뇌 형태를 유지하고, 표지·Page 06과 같은 흑백 연필 질감과 단일 강조색을 사용

### Remaining

- 실패한 이미지 후보 정리
- Chrome Print to PDF에서 작은 UI 본문과 논문 인용문 가독성 확인
- 전체 페이지 용어 통일 단계에서 `Teacher`, `Student`, `distillation` 표기 최종 점검

## 6-4. Page 08 — Generative AI Video 〈잔향〉 (Approved)

### Sources

- 서비스 저장소 조사(별도 세션): 코드 · 설정 · git 기록. 커밋은 2025-06-19 한 개(본인)
- 사용자 확인: 컨버전스디자인과 연말 학과 전시 작품 〈잔향〉 팀(4명)의 요청으로 웹 · AI 파이프라인 전체 개발. 기획 · 검수 · 전시는 작품 팀. 얼굴 보존 제약은 작품 의미 때문에 추가. AirDrop → 입력 화면 → 렌즈 디스플레이 설치 구조

### Confirmed Content

- 스택: Vite · HTML/JS · SCSS / Node.js · Express · sharp · JWT / Gemini 2.0 Flash · Kling multi-image2video (AGENTS.md의 React 표기를 바로잡음)
- 파이프라인: 입력 → JPEG 정규화 → Gemini 프롬프트 → Kling 작업 생성 → 4초 폴링 → 저장 · 전시 화면 반복 재생
- 본인 작업: 화면 UI · 전시 재생 페이지 / API 5개 라우트 · JPEG 정규화 · 영상 저장 / Gemini 호출 · 지시문 설계 · Kling JWT · 폴링 · 오류 코드 한글 안내

### Evidence

- 입력 사진 2장과 주제는 실제. 사본은 GPS · EXIF 제거 후 900×1200
- Gemini 출력은 본인 프로그램으로 실제 생성
- 영상 프레임은 재현: Kling Trial Package($9.8)를 구매할 수 없어 ChatGPT 2×2 프레임을 잘라 사용. 페이지에 "재현 프레임 · 동일 입력, 다른 생성 모델"로 표시
- 전시 현장 사진은 초점이 작품 팀으로 옮겨가 사용하지 않음

### Implemented Visual Structure

- 요약 줄: 서비스 설명 + 문제 / 해결
- 메인: INPUT → GEMINI 실제 출력(0–3s ~ 8–10s 구간, 얼굴 보존 문장 인용) → OUTPUT 재현 프레임 4장
  - 주제 문장은 입력 사진 바로 아래에 붙여 사진과 한 묶음으로 둔다.
  - 세 칸 모두 위쪽 정렬. 입력 묶음(사진 + 주제)과 프레임 2×2의 높이를 같게 맞춘다.
  - 프레임 시간 라벨(0s · 3s · 6s · 10s)은 프레임 안쪽 왼쪽 아래에 겹쳐 높이를 아낀다.
  - GEMINI 칸을 66mm로 넓혀 얼굴 보존 인용문을 한 줄로 표시
  - OUTPUT 칸은 프레임 2×2 폭(약 100mm)에 맞춰 오른쪽 끝에 붙이고, 남는 폭은 INPUT(80.8mm)에 준다. 사진 비율은 22:23으로 입력 묶음 높이를 프레임과 맞춘다.
  - 주제 문장은 실제 입력 원문 그대로 한 줄로 둔다. "정말 재밌게"는 Gemini 출력의 "fun memory"와 연결되므로 빼지 않는다.
  - "실제 출력" / "재현 프레임" 라벨은 6.4pt · 불투명도 68%로 본문 수준으로 읽히게 한다.
- PIPELINE: 한 줄 연결선, 선 위 처리 주체, AI 단계(Gemini · Kling)만 파란색
  - 화살표는 다음 단계의 점 약 2mm 앞에서 끝나 단계 사이에 틈을 둔다.
  - 아래 간격은 위 간격의 약 1.5배(5.4mm)로 MY ROLE과 구분
- MY ROLE: FRONTEND · SERVER · AI 연동 세 층에 기술과 작업을 함께 표시 (STACK 칸 통합)
  - 층 이름 7.4pt, 스택 7pt. 세로선은 영역 끝까지 내리고 위아래 여백을 같게 둔다.
- Chrome Print to PDF 확인: 넘침 없음, 전체 9페이지 PDF 약 15.5MB

### Remaining

- 서비스 저장소의 평문 API 키 폐기 · 재발급
- Kling으로 실제 생성이 가능해지면 재현 프레임 교체
- 커밋 제외: 원본 사진 2장, ChatGPT 2×2 원본, 전시 사진 사본

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

Page 04의 브라우저 디자인 검토는 완료했으며, 현재 세부 수정분은 Page 05 작업과 분리해 커밋한다.

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

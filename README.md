# AI Portfolio

SK hynix AI Hackathon 2026 지원용 포트폴리오.

최종 결과물은 A4 Landscape 규격의 PDF 한 파일(50MB 이하)이며, 현재 9페이지로 구성합니다.

## Status

9페이지 모두 초안을 구현했습니다.

- 01 — Cover
- 02 — 서울대학교병원: 좌우 ICA 특성으로 뇌동맥류 부위 구분
- 03 — 서울대학교병원: 스마트폰·웨어러블 기반 소아·청소년 우울·불안 선별
- 04 — 서울아산병원: 흡기·호기 CT 기반 폐 환기지도 합성
- 05 — 순천향대학교: MaxViT 기반 CLE 종양 분류와 MAGAR XAI
- 06 — 순천향대학교 Efficient Computing Lab: 분산 GPU 서버를 공용 Slurm 클러스터로 통합
- 07 — 순천향대학교 캡스톤디자인: 강의 특화 Multi-Modal LLM, Recappers
- 08 — 순천향대학교 컨버전스디자인 전시 작품 〈잔향〉: 두 순간의 사진을 잇는 10초 AI 영상 서비스 (웹 · AI 파이프라인 개발)
- 09 — Profile · Awards · Early Work: 경력 색인, 초기 작업 구조 도식, 대학 수상 참조, 연락처

현재 04 — 서울아산병원 CT 기반 폐 환기지도 합성 연구의 상세 초안까지 구현했으며, 페이지 승인 전 최종 문구와 PDF 가독성을 검토하고 있습니다.

Page 04는 논문으로 완료된 폐 환기지도 연구에 단독 할당합니다. 공개 승인을 받지 않은 PECT 연구는 이 페이지에 함께 넣지 않으며, 승인 전에는 마지막 페이지의 경력 설명에도 상세 연구 조건이나 결과를 노출하지 않습니다.

Page 04의 실제 환자 CT와 논문 figure는 사용하지 않습니다. 입력과 출력은 lung-masked coronal synthetic visual로 구성했고, 결과·본인 기여·협업 범위를 분리해 표시했습니다.

Page 05는 직접 제안한 XAI 방법 MAGAR를 중심으로, 포트폴리오 톤으로 재구성한 웹 추론 화면에서 Grad-CAM과 비교해 보여줍니다. 실제 CLE 영상과 웹 스크린샷 대신 synthetic CLE와 도식 heatmap을 사용합니다.

Page 06은 구축을 총괄한 GPU 클러스터를 반투명 서버 synthetic 이미지와 Slurm 배정 경로로 보여주고, 직접 해결한 운영 문제 3건을 micro-diagram으로 정리했습니다. 후임 담당자가 확장한 부분은 본인 작업으로 표기하지 않습니다.

Page 08은 직접 개발한 영상 생성 서비스를 실제 입력 사진, 실제 Gemini 출력, 재현 프레임으로 보여주고, 재현 프레임임을 페이지에 표시합니다.

Page 09는 이력서를 옮기지 않고, 앞 페이지의 작업을 어디서 했는지 잇는 경력 색인과 초기 작업의 구조 도식으로 포트폴리오를 닫습니다.

상세 진행 상황, 확정된 디자인 결정과 다음 작업은 [`docs/PROGRESS.md`](docs/PROGRESS.md)를 참고합니다.

## Working Process

전체 9페이지를 한 번에 완성하지 않고 다음 순서로 진행합니다.

1. 전체 Skeleton 및 공통 디자인 시스템
2. 표지
3. 프로젝트 페이지별 핵심 시각 요소 결정
4. 한 페이지씩 구현 및 검토
5. 전체 통일 작업과 PDF 출력 점검

각 프로젝트 페이지는 핵심 시각 요소를 먼저 결정한 후 한 페이지씩 제작합니다.

페이지 순서:

`Profile → ICA Morphology → Pediatric Digital Phenotyping → Asan Medical Center → Pathology AI + XAI → AI Infrastructure → Recappers → Generative AI Video → Profile & Other Work`

## Run

```bash
npm install
npm run dev
```

Vite 개발 서버 주소를 브라우저에서 엽니다.

## Export

Chrome → Print → Save as PDF

- Layout: Landscape
- Paper: A4
- Margins: None
- Background graphics: On

세부 콘텐츠, 디자인 규칙과 검수 기준은 `AGENTS.md`를 따릅니다.

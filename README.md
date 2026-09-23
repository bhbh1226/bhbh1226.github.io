# AI Portfolio

SK hynix AI Hackathon 2026 지원용 포트폴리오.

최종 결과물은 A4 Landscape 규격의 9페이지 PDF입니다.

## Status

총 9페이지 Skeleton을 구성했고 다음 3페이지의 초안을 확정했습니다.

- 01 — Cover
- 02 — 서울대학교병원: 좌우 ICA 특성으로 뇌동맥류 부위 구분
- 03 — 서울대학교병원: 스마트폰·웨어러블 기반 소아·청소년 우울·불안 선별

다음 작업은 04 — 서울아산병원 Medical AI 페이지입니다.

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

import bioComputeCore from '../../assets/images/bio-compute-core-v1.png'
import PdfPortfolioStream from './PdfPortfolioStream.jsx'

const projects = [
  ['02', 'AI RESEARCH', 'research', '좌우 ICA morphology와 뇌동맥류 발생 부위 관련성 분석', '서울대학교병원 Medical Vision Lab', 'Landmark 기반 ICA 추출 · geometry·radiomics · 좌우 비대칭 feature · 데이터 중복 감사'],
  ['03', 'AI RESEARCH', 'research', '소아·청소년 디지털 페노타이핑 연구 파이프라인 재구성', '서울대학교병원 Medical Vision Lab', '스마트폰·웨어러블·자기보고 · 데이터 감사 · 참여자 단위 nested cross-validation'],
  ['04', 'AI RESEARCH', 'research', 'CT 기반 폐 환기지도 합성 모델 비교', '서울아산병원 MI2RL', 'pix2pixHD · ResViT · I2SB · SelfRDB 구현과 동일 조건 평가', 'MICCAI 2026 · SASHIMI Workshop'],
  ['05', 'AI RESEARCH', 'research', 'MaxViT 기반 CLE 종양 분류와 MAGAR XAI', 'Soonchunhyang University · Medical AI Lab', '5-fold ensemble · MAGAR 제안·구현 · XAI 정량 평가 · 웹 추론 시스템'],
  ['06', 'GPU INFRA', 'infra', '분산 GPU 서버를 공용 연구 인프라로 통합', 'Soonchunhyang University · Efficient Computing Lab', 'FreeIPA · NFS · Slurm · JupyterHub · Tailscale · Borg'],
  ['07', 'AI SERVICE', 'service', '강의 특화 Multi-Modal sLLM, Recappers', 'Soonchunhyang University · Capstone Design', '강의자료·음성 연결 · lecture-specific distillation · 교수자 검수 기반 학습 서비스'],
  ['08', 'AI SERVICE', 'service', '잔향 — 두 순간의 사진을 잇는 10초 AI 영상', 'Soonchunhyang University · Convergence Design Exhibition', '두 사진·주제 → Gemini 연출 프롬프트 → Kling 영상 생성 → 전시 화면'],
].map(([number, category, tone, title, organization, summary, result]) => ({ number, category, tone, title, organization, summary, result }))

export default function App() {
  return (
    <main className="portfolio-web">
      <section className="cover" aria-labelledby="cover-title">
        <header className="cover__header">
          <span>Portfolio · 2026</span>
          <a href="#portfolio-pages">Selected Projects</a>
        </header>

        <img className="cover__object" src={bioComputeCore} alt="의료영상, 그래프 구조, GPU 시스템을 결합한 Bio-Compute Core" />

        <div className="cover__name">
          <p>Pyeongjin Park</p>
          <h1 id="cover-title">박평진</h1>
        </div>

        <div className="cover__description">
          <p>의료 AI 연구자<br />소프트웨어 개발자 · GPU 인프라 엔지니어</p>
          <div className="cover__contact">
            <a href="https://github.com/bhbh1226/">github.com/bhbh1226</a>
            <a href="https://www.linkedin.com/in/bhbh1226/">linkedin.com/in/bhbh1226</a>
            <a href="mailto:bhbh1226@gmail.com">bhbh1226@gmail.com</a>
          </div>
        </div>

        <a className="cover__scroll" href="#portfolio-pages"><span>프로젝트</span><i aria-hidden="true" /></a>
      </section>

      <section className="projects" id="projects" aria-labelledby="projects-title">
        <header className="projects__header">
          <div>
            <p>Selected Projects · 2024–2026</p>
            <h2 id="projects-title">AI 연구와 시스템 구현</h2>
          </div>
          <p className="projects__intro">의료 AI 연구에서 시작해 병리 AI 서비스, GPU 연구 인프라, Multi-Modal LLM과 Generative AI 서비스로 이어진 작업입니다.</p>
        </header>

        <div className="project-index">
          {projects.map((project) => (
            <article className={`project-row project-row--${project.tone}`} key={project.number}>
              <p className="project-row__number">{project.number}</p>
              <p className="project-row__category">{project.category}</p>
              <div className="project-row__main">
                <h3>{project.title}</h3>
                <p>{project.organization}</p>
              </div>
              <div className="project-row__detail">
                <p>{project.summary}</p>
                {project.result && <span>{project.result}</span>}
              </div>
            </article>
          ))}
        </div>

        <footer className="projects__footer">
          <span>Pyeongjin Park</span>
          <span>AI Research · Software · Infrastructure</span>
        </footer>
      </section>

      <PdfPortfolioStream />
    </main>
  )
}

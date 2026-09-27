import { useEffect, useRef } from 'react'
import bioComputeCore from '../../assets/images/bio-compute-core-v1.png'
import cleImage from '../../assets/images/xai-baked-magar.png'
import gpuImage from '../../assets/images/gpu-cluster-translucent-v3.png'

const projects = [
  {
    number: '01',
    category: 'AI RESEARCH',
    tone: 'research',
    title: '의료영상에서 설명 가능한 판단까지',
    name: 'CLE Tumor Classification · MAGAR XAI',
    detail: 'MaxViT 분류 모델과 Multi-Axis Gradient-weighted Attention Rollout을 구현하고 정량 평가했습니다.',
    image: cleImage,
    imageAlt: 'Synthetic CLE 위에 재구성한 MAGAR heatmap',
  },
  {
    number: '02',
    category: 'GPU INFRA',
    tone: 'infra',
    title: '분산 서버를 공용 연구 인프라로',
    name: 'Authentication · Storage · Access · Scheduling',
    detail: '계정, 저장소, 접속과 GPU 스케줄링을 하나의 연구 환경으로 통합했습니다.',
    image: gpuImage,
    imageAlt: '공용 GPU 연구 인프라를 표현한 synthetic server visual',
  },
  {
    number: '03',
    category: 'AI SERVICE',
    tone: 'service',
    title: '연구 결과를 실제 사용 흐름으로',
    name: 'Recappers · Generative AI Video',
    detail: 'Multi-Modal LLM과 생성형 AI 파이프라인을 웹서비스와 전시 시스템으로 연결했습니다.',
  },
]

function SystemMap() {
  return (
    <svg className="system-map" viewBox="0 0 760 560" role="img" aria-label="AI 연구, 서비스, 인프라가 하나의 시스템으로 연결되는 구조">
      <defs>
        <linearGradient id="lineResearch" x1="0" x2="1">
          <stop offset="0" stopColor="#a63b2d" stopOpacity="0" />
          <stop offset="1" stopColor="#a63b2d" />
        </linearGradient>
        <linearGradient id="lineInfra" x1="0" x2="1">
          <stop offset="0" stopColor="#3f8f66" stopOpacity="0" />
          <stop offset="1" stopColor="#3f8f66" />
        </linearGradient>
        <linearGradient id="lineService" x1="0" x2="1">
          <stop offset="0" stopColor="#5b87b5" stopOpacity="0" />
          <stop offset="1" stopColor="#5b87b5" />
        </linearGradient>
      </defs>
      <g className="system-map__grid">
        {Array.from({ length: 10 }, (_, index) => <line key={`v-${index}`} x1={index * 84} x2={index * 84} y1="0" y2="560" />)}
        {Array.from({ length: 8 }, (_, index) => <line key={`h-${index}`} x1="0" x2="760" y1={index * 80} y2={index * 80} />)}
      </g>
      <g className="system-map__paths">
        <path className="path path--research" d="M72 155 C238 155 236 278 390 278" />
        <path className="path path--infra" d="M72 405 C238 405 246 296 390 296" />
        <path className="path path--service" d="M390 287 C518 287 538 220 696 220" />
      </g>
      <g className="system-map__nodes">
        <g transform="translate(70 155)">
          <circle r="9" className="node node--research" />
          <text x="20" y="-11">MEDICAL AI</text>
          <text x="20" y="10" className="node-copy">MODEL · DATA · EVALUATION</text>
        </g>
        <g transform="translate(70 405)">
          <circle r="9" className="node node--infra" />
          <text x="20" y="-11">GPU INFRASTRUCTURE</text>
          <text x="20" y="10" className="node-copy">COMPUTE · STORAGE · ACCESS</text>
        </g>
        <g transform="translate(390 287)">
          <circle r="16" className="node node--core" />
          <circle r="29" className="node-ring" />
          <text x="-70" y="62">ENGINEERING</text>
          <text x="-91" y="82" className="node-copy">RESEARCH → WORKING SYSTEM</text>
        </g>
        <g transform="translate(696 220)">
          <circle r="9" className="node node--service" />
          <text x="-160" y="-16">AI SERVICE</text>
          <text x="-210" y="6" className="node-copy">PRODUCT · INTERACTION · DELIVERY</text>
        </g>
      </g>
    </svg>
  )
}

function App() {
  const heroRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const move = (event) => {
      const rect = hero.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5
      hero.style.setProperty('--pointer-x', `${x * 18}px`)
      hero.style.setProperty('--pointer-y', `${y * 14}px`)
    }

    hero.addEventListener('pointermove', move)
    return () => hero.removeEventListener('pointermove', move)
  }, [])

  return (
    <main>
      <section className="hero" ref={heroRef} id="top">
        <nav className="nav" aria-label="주요 탐색">
          <a className="wordmark" href="#top" aria-label="Pyeongjin Park 홈">PP<span>/26</span></a>
          <div className="nav__links">
            <a href="#work">Work</a>
            <a href="https://github.com/bhbh1226/">GitHub</a>
            <a href="https://www.linkedin.com/in/bhbh1226/">LinkedIn</a>
          </div>
        </nav>

        <div className="hero__copy">
          <p className="eyebrow">AI RESEARCH · SOFTWARE · INFRASTRUCTURE</p>
          <h1>
            모델에서 멈추지 않고,<br />
            <span>작동하는 시스템</span>까지.
          </h1>
          <p className="hero__summary">
            의료 AI 연구, Multi-Modal LLM 서비스, GPU 연구 인프라를<br className="desktop-only" />
            문제에 맞게 설계하고 직접 구현해 왔습니다.
          </p>
          <div className="hero__actions">
            <a className="primary-link" href="#work">프로젝트 보기 <span aria-hidden="true">↘</span></a>
            <span className="availability">Pyeongjin Park · Portfolio 2026</span>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <img src={bioComputeCore} alt="" />
          <SystemMap />
        </div>

        <div className="hero__rail" aria-hidden="true">
          <span>01</span><i /><span>07</span>
        </div>
      </section>

      <section className="work" id="work">
        <header className="work__header">
          <p className="eyebrow">SELECTED SYSTEMS</p>
          <h2>연구가 실제로<br />동작하기까지</h2>
          <p>문제를 정의하고, 맞는 기술을 선택하고, 평가 가능한 결과물로 연결한 작업입니다.</p>
        </header>

        <div className="project-list">
          {projects.map((project) => (
            <article className={`project project--${project.tone}`} key={project.number}>
              <div className="project__number">{project.number}</div>
              <div className="project__body">
                <p className="project__category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project__name">{project.name}</p>
                <p className="project__detail">{project.detail}</p>
              </div>
              <div className="project__visual">
                {project.image ? <img src={project.image} alt={project.imageAlt} /> : <SystemMap />}
              </div>
              <span className="project__arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App

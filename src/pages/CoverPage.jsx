import bioComputeCore from '../../assets/images/bio-compute-core-v1.png'

export default function CoverPage() {
  return (
    <div className="hero-cover">
      <div className="hero-cover__meta">
        <span>Portfolio · 2026</span>
      </div>

      <img
        className="hero-cover__object"
        src={bioComputeCore}
        alt="의료영상, 그래프 구조, GPU 시스템을 결합한 Bio-Compute Core"
      />

      <div className="hero-cover__name">
        <p>Park PyeongJin</p>
        <h1>박평진</h1>
      </div>

      <div className="hero-cover__description">
        <p>의료 AI 연구자<br />소프트웨어 개발자 · GPU 인프라 엔지니어</p>
      </div>

      <div className="hero-cover__contact">
        <a href="https://github.com/bhbh1226/">github.com/bhbh1226</a>
        <a href="https://www.linkedin.com/in/bhbh1226/">linkedin.com/in/bhbh1226</a>
        <a href="mailto:bhbh1226@gmail.com">bhbh1226@gmail.com</a>
      </div>
    </div>
  )
}

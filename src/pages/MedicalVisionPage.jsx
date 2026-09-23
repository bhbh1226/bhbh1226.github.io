const AuditNode = ({ index, title, detail, tone = '' }) => (
  <div className={`audit-node ${tone}`}>
    <span>{index}</span>
    <strong>{title}</strong>
    <small>{detail}</small>
  </div>
)

export default function MedicalVisionPage() {
  return (
    <div className="medical-page">
      <div className="medical-title">
        <div>
          <p className="kicker">Research Internship · 2026.07—08</p>
          <h2>Medical Vision Lab</h2>
        </div>
        <p>
          모델의 결과보다 먼저,<br />
          데이터와 평가 과정이 성립하는지 확인했습니다.
        </p>
      </div>

      <div className="medical-body">
        <section className="phenotyping" aria-labelledby="phenotyping-title">
          <div className="study-index">
            <span>01</span>
            <div>
              <p>DIGITAL PHENOTYPING</p>
              <h3 id="phenotyping-title">소아·청소년 임상군 선별 연구 재현</h3>
            </div>
          </div>

          <p className="study-summary">
            스마트폰·웨어러블 센서와 자기보고 데이터를 사용한 기존 연구를 재현한 뒤,
            라벨·전처리·환자 단위 평가 경로를 다시 점검했습니다.
          </p>

          <div className="sensor-strip" aria-label="Research inputs">
            <div><i className="sensor-icon sensor-icon--phone" /><span>Smartphone</span></div>
            <div><i className="sensor-icon sensor-icon--watch" /><span>Wearable</span></div>
            <div><i className="sensor-icon sensor-icon--form" /><span>Self-report</span></div>
          </div>

          <div className="audit-flow" aria-label="Research pipeline audit">
            <AuditNode index="01" title="Reproduce" detail="기존 baseline과 실행 조건 확인" />
            <AuditNode index="02" title="Audit" detail="라벨 · 센티넬 · 누수 가능 feature" tone="audit-node--accent" />
            <AuditNode index="03" title="Rebuild" detail="전처리를 학습 fold 내부로 이동" />
            <AuditNode index="04" title="Validate" detail="환자 단위 nested CV · repeated seeds" />
          </div>

          <div className="correction-ledger" aria-label="Corrected evaluation rules">
            <div><span>LABEL</span><p>결측·중도탈락을<br />임상군에서 제외</p></div>
            <div><span>LEAKAGE</span><p>정답 척도·시점 정보를<br />입력 feature에서 제외</p></div>
            <div><span>CV</span><p>전처리와 feature selection을<br />학습 fold 안에서 수행</p></div>
          </div>

          <div className="phenotyping-foot">
            <span>MY WORK</span>
            <p>데이터 규칙 교정 · 평가 pipeline 재구성 · 반복 실험 및 실행 이력 관리</p>
          </div>
        </section>

        <section className="ica-study" aria-labelledby="ica-title">
          <div className="study-index study-index--compact">
            <span>02</span>
            <div>
              <p>ICA MORPHOLOGY</p>
              <h3 id="ica-title">Aneurysm Feasibility</h3>
            </div>
          </div>

          <div className="ica-visual" aria-label="ICA feature extraction schematic">
            <svg viewBox="0 0 460 230" role="img" aria-label="Landmark based left and right ICA feature extraction">
              <path className="ica-vessel ica-vessel--left" d="M101 201 C85 163 104 139 91 109 C78 79 96 48 135 24" />
              <path className="ica-vessel ica-vessel--right" d="M313 201 C333 164 310 140 327 108 C343 78 326 49 287 24" />
              <path className="ica-core" d="M101 201 C85 163 104 139 91 109 C78 79 96 48 135 24" />
              <path className="ica-core" d="M313 201 C333 164 310 140 327 108 C343 78 326 49 287 24" />
              {[['101','201'],['91','109'],['135','24'],['313','201'],['327','108'],['287','24']].map(([cx,cy], i) => (
                <circle key={i} className="ica-point" cx={cx} cy={cy} r="5" />
              ))}
              <line className="ica-link" x1="150" y1="112" x2="270" y2="112" />
              <text className="ica-side" x="68" y="220">LEFT ICA</text>
              <text className="ica-side" x="286" y="220">RIGHT ICA</text>
              <text className="ica-formula" x="210" y="88" textAnchor="middle">(L + R) / 2</text>
              <text className="ica-formula ica-formula--accent" x="210" y="145" textAnchor="middle">| L − R |</text>
            </svg>
          </div>

          <p className="ica-copy">
            3D Slicer landmark로 지정된 좌·우 ICA 구간에서 centerline과 ROI를 추출하고,
            기하·radiomics 및 좌우 비대칭 feature를 직접 구현했습니다.
          </p>

          <div className="duplicate-audit">
            <span>COHORT AUDIT</span>
            <div className="duplicate-flow">
              <b>Header</b><i />
              <b>Hash</b><i />
              <b>Voxel</b><i />
              <b>Exclude</b>
            </div>
            <p>서로 다른 익명 ID로 저장된 동일 환자·동일 영상을 확인하고 분석 제외 로직을 구현했습니다.</p>
          </div>
        </section>
      </div>

      <div className="medical-disclosure">
        <span>DISCLOSURE</span>
        <p>의료영상·annotation·cohort 정보·미완료 재평가 결과는 포함하지 않았습니다.</p>
      </div>
    </div>
  )
}

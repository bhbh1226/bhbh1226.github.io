import brainVisual from '../../../assets/images/synthetic-cerebrovascular-brain-v1-print.png'
import styles from './AneurysmPage.module.css'

const cx = (...names) => names.filter(Boolean).map((name) => styles[name]).join(' ')

function CowDiagram() {
  return (
    <svg className={cx('case-cow')} viewBox="0 0 420 330" role="img" aria-label="Circle of Willis와 좌우 ICA 모식도">
      <g className={cx('case-cow__vessel')}>
        <path d="M210 315V248M210 248L163 207M210 248L257 207" /><path d="M163 207C133 197 110 176 100 150M257 207C287 197 310 176 320 150" />
        <path d="M100 150C75 132 50 127 20 136M320 150C345 132 370 127 400 136" /><path d="M100 150C135 129 156 112 177 91M320 150C285 129 264 112 243 91" />
        <path d="M177 91L198 79M243 91L222 79M198 79H222" /><path d="M198 79L183 21M222 79L237 21" />
      </g>
      <g className={cx('case-cow__ica')}><path d="M100 300C82 265 117 237 98 205C82 178 82 163 100 150" /><path d="M320 300C338 265 303 237 322 205C338 178 338 163 320 150" /></g>
      <g className={cx('case-cow__points')}><circle cx="100" cy="300" r="6"/><circle cx="98" cy="205" r="6"/><circle cx="100" cy="150" r="6"/><circle cx="320" cy="300" r="6"/><circle cx="322" cy="205" r="6"/><circle cx="320" cy="150" r="6"/></g>
      <g className={cx('case-cow__label')}><text x="63" y="322">LEFT ICA</text><text x="306" y="322">RIGHT ICA</text><text x="187" y="11">ACA</text><text x="225" y="11">ACA</text><text x="193" y="67">ACoA</text><text x="4" y="126">MCA</text><text x="377" y="126">MCA</text><text x="200" y="329">BA</text></g>
    </svg>
  )
}

export default function AneurysmPage() {
  return (
    <div className={cx('aneurysm-case')}>
      <header className="case-header">
        <h2>좌우 ICA 특성으로 뇌동맥류 부위 구분</h2>
        <span className="case-category case-category--corner">AI RESEARCH</span>
      </header>
      <div className={cx('case-question')}><span>RESEARCH QUESTION</span><strong>ICA의 형태와 영상 특성에서<br />동맥류 발생 부위와 관련된 신호를 찾을 수 있는가?</strong><p>TOF-MRA에서 landmark로 지정한 좌우 ICA 구간을<br />환자 단위 tabular feature로 변환</p></div>
      <figure className={cx('case-brain')}><img src={brainVisual} alt="합성 3D 뇌혈관 및 좌우 ICA 시각화" /><figcaption>SYNTHETIC VISUAL · NOT PATIENT DATA</figcaption></figure>
      <div className={cx('case-method')}><div><b>01</b><span>구간 지정</span><p>Start · waypoint · end<br />3D Slicer landmark</p></div><div><b>02</b><span>ICA 추출</span><p>Centerline 탐색<br />좌·우 ROI 구성</p></div><div><b>03</b><span>Feature 생성</span><p>Geometry · Radiomics<br />환자 단위 집계</p></div><div><b>04</b><span>비교 실험</span><p>Classical ML<br />Feature ablation</p></div></div>
      <div className={cx('case-anatomy')}><CowDiagram /><p><span>ANATOMICAL CONTEXT</span> Circle of Willis와 연결되는 좌우 ICA 분석 구간</p></div>
      <div className={cx('case-features')}><span>DIRECT CONTRIBUTION</span><strong>좌우 feature engineering</strong><div className={cx('feature-equations')}><p><small>양측 평균</small><code>(L + R) / 2</code></p><p><small>좌우 비대칭</small><code>|L − R|</code></p></div></div>
      <div className={cx('case-audit')}><span>DATA QUALITY</span><strong>중복 환자·영상 검사</strong><p>익명 ID가 다른 동일 영상 발견 → header · hash · voxel · 육안 확인 → 분석 제외</p></div>
      <div className={cx('case-status')}><span>DISCLOSURE</span><p>실제 의료영상·cohort 정보<br />성능 수치·결과 그래프 제외</p></div>
    </div>
  )
}

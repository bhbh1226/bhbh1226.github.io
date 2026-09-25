import brainVisual from '../../../assets/images/synthetic-cerebrovascular-lateral-v1-print.png'
import cowVisual from '../../../assets/images/synthetic-circle-of-willis-v1.png'
import styles from './AneurysmPage.module.css'

const cx = (...names) => names.filter(Boolean).map((name) => styles[name]).join(' ')

// 합성 CoW 이미지 위에 라벨을 HTML로 올린다. 위치는 이미지 기준 %.
const COW_LABELS = [
  { text: 'ACA', x: 50, y: -5 },
  { text: 'ACoA', x: 50, y: 31 },
  { text: 'MCA', x: 6, y: 24 },
  { text: 'MCA', x: 94, y: 24 },
  { text: 'LEFT ICA', x: 19, y: 104, ica: true },
  { text: 'RIGHT ICA', x: 81, y: 104, ica: true },
  { text: 'BA', x: 50, y: 104 },
]

function CowDiagram() {
  return (
    <figure className={cx('case-cow')}>
      <img src={cowVisual} alt="Circle of Willis와 좌우 ICA 합성 이미지" />
      {COW_LABELS.map((label) => (
        <span key={`${label.text}-${label.x}`} className={cx(label.ica && 'is-ica')} style={{ left: `${label.x}%`, top: `${label.y}%` }}>{label.text}</span>
      ))}
    </figure>
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

import cleVisual from '../../../assets/images/synthetic-cle-colorectal-v1.png'
import styles from './PathologyXaiPage.module.css'

const cx = (...names) => names.filter(Boolean).map((name) => styles[name]).join(' ')

// 실제 attribution이 아닌 도식이다. 논문 figure의 정성적 경향만 따른다.
// Grad-CAM: jet colormap, 격자 형태로 흩어진 hot spot.
// MAGAR: 흑백 영상 위 노란 heatmap, 종양 의심 구조 쪽으로 모이고 조직 경계를 따라감.
const hash = (value) => {
  const x = Math.sin(value * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

const gradcamSpots = Array.from({ length: 49 }, (_, index) => {
  const col = index % 7
  const row = Math.floor(index / 7)
  return {
    x: 7 + col * 14.3 + (hash(index + 1) - .5) * 5,
    y: 7 + row * 14.3 + (hash(index + 101) - .5) * 5,
    heat: hash(index + 57) ** 1.6,
  }
})

const magarSpots = [
  { x: 70, y: 32, rx: 20, ry: 14, angle: -30, o: 1 },
  { x: 82, y: 52, rx: 15, ry: 18, angle: 10, o: .95 },
  { x: 63, y: 58, rx: 14, ry: 11, angle: 25, o: .85 },
  { x: 80, y: 74, rx: 12, ry: 9, angle: -15, o: .7 },
  { x: 57, y: 20, rx: 10, ry: 8, angle: 0, o: .6 },
  { x: 92, y: 24, rx: 9, ry: 12, angle: 0, o: .6 },
]

const magarSteps = [
  { label: 'Attention 추출', detail: 'Block · Grid 두 축' },
  { label: 'Class gradient', detail: '예측 class 기준 · centering' },
  { label: 'Gradient 가중', detail: '양의 gradient로 attention 가중' },
  { label: '공간 재조립', detail: 'Partition → 2D 좌표' },
  { label: 'Layer 누적', detail: 'Percentile 정규화 → heatmap' },
]

const metrics = [
  { name: 'F1', value: '0.9485' },
  { name: 'AUROC', value: '0.9910' },
  { name: 'Recall', value: '0.9727' },
]

function GradCamOverlay() {
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <radialGradient id="gradcam-hot">
          <stop offset="0" stopColor="#ff1f10" />
          <stop offset=".3" stopColor="#ffd21a" />
          <stop offset=".6" stopColor="#35e0d0" stopOpacity=".7" />
          <stop offset="1" stopColor="#35e0d0" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="gradcam-cool">
          <stop offset="0" stopColor="#b8f03a" />
          <stop offset=".5" stopColor="#35c8e0" stopOpacity=".6" />
          <stop offset="1" stopColor="#35c8e0" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill="#1638d8" opacity=".34" />
      {gradcamSpots.map((spot) => (
        <circle
          key={`${spot.x}-${spot.y}`}
          cx={spot.x}
          cy={spot.y}
          r={3 + spot.heat * 7}
          fill={spot.heat > .45 ? 'url(#gradcam-hot)' : 'url(#gradcam-cool)'}
          opacity={.2 + spot.heat * .75}
        />
      ))}
    </svg>
  )
}

function MagarOverlay() {
  const spots = magarSpots.map((spot) => (
    <ellipse key={`${spot.x}-${spot.y}`} cx={spot.x} cy={spot.y} rx={spot.rx} ry={spot.ry} transform={`rotate(${spot.angle} ${spot.x} ${spot.y})`} fill="url(#magar-heat)" opacity={spot.o} />
  ))

  return (
    <svg className={cx('xai-overlay--magar')} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <radialGradient id="magar-heat">
          <stop offset="0" stopColor="#fff4a8" />
          <stop offset=".35" stopColor="#ffcc33" />
          <stop offset=".7" stopColor="#e07a1c" stopOpacity=".55" />
          <stop offset="1" stopColor="#e07a1c" stopOpacity="0" />
        </radialGradient>
        <mask id="magar-tissue" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
          <image href={cleVisual} width="100" height="100" preserveAspectRatio="none" />
        </mask>
      </defs>
      <g opacity=".5">{spots}</g>
      <g mask="url(#magar-tissue)">{spots}{spots}</g>
    </svg>
  )
}

function CleImage({ label, note, overlay }) {
  return (
    <figure className={cx('xai-frame')}>
      <div className={cx('xai-frame__image')}>
        <img src={cleVisual} alt="합성 CLE 영상" />
        {overlay === 'gradcam' && <GradCamOverlay />}
        {overlay === 'magar' && <MagarOverlay />}
      </div>
      <figcaption><span>{label}</span><small>{note}</small></figcaption>
    </figure>
  )
}

function ModelRail() {
  return (
    <div className={cx('xai-model')}>
      <p className={cx('xai-model__input')}>CLE IMAGE<small>흑백 단일 프레임 · 512 × 512</small></p>
      <div className={cx('xai-model__head')}><span>MaxViT</span><small>CLASSIFIER</small></div>
      <div className={cx('xai-model__layer')}><b>MBConv</b><small>국소 조직 패턴</small></div>
      <div className={cx('xai-model__layer', 'xai-model__layer--attn')}><b>Block attention</b><small>window 내부 · local</small></div>
      <div className={cx('xai-model__layer', 'xai-model__layer--attn')}><b>Grid attention</b><small>sparse grid · global</small></div>
      <div className={cx('xai-model__foot')}>5-FOLD SOFT-VOTING ENSEMBLE</div>
    </div>
  )
}

// Stability(Pearson) 축: -0.1 ~ 0.4
const toAxis = (value) => `${((value + 0.1) / 0.5) * 100}%`

function StabilityPlot() {
  return (
    <div className={cx('xai-plot')} aria-label="Stability 비교. Grad-CAM -0.03, MAGAR 0.27-0.31">
      <div className={cx('xai-plot__row')}>
        <small>Grad-CAM</small>
        <div className={cx('xai-plot__track')}>
          <i className={cx('xai-plot__zero')} />
          <b className={cx('xai-plot__dot')} style={{ left: toAxis(-0.032) }} />
        </div>
        <em>−0.03</em>
      </div>
      <div className={cx('xai-plot__row', 'xai-plot__row--magar')}>
        <small>MAGAR</small>
        <div className={cx('xai-plot__track')}>
          <i className={cx('xai-plot__zero')} />
          <b className={cx('xai-plot__range')} style={{ left: toAxis(0.27), width: `${(0.04 / 0.5) * 100}%` }} />
        </div>
        <em>0.27–0.31</em>
      </div>
      <div className={cx('xai-plot__axis')}>
        <span style={{ left: toAxis(0) }}>0</span>
        <span style={{ left: toAxis(0.2) }}>0.2</span>
        <span style={{ left: toAxis(0.4) }}>0.4</span>
        <small>Pearson ↑</small>
      </div>
    </div>
  )
}

function Arrow() {
  return <div className={cx('xai-arrow')} aria-hidden="true"><i /></div>
}

export default function PathologyXaiPage() {
  return (
    <div className={cx('xai-case')}>
      <header className="case-header">
        <h2>MaxViT 기반 CLE 종양 분류와 MAGAR XAI</h2>
        <span className="case-category case-category--corner">AI RESEARCH</span>
      </header>

      <section className={cx('xai-brief')}>
        <span>STUDY</span>
        <strong>공초점 레이저 내시현미경(CLE) 영상의 Normal / Tumor 분류와<br />MaxViT 구조에 맞춘 XAI 시각화</strong>
        <p><b>배경</b>시간이 오래 걸리는 동결절편 검사 · 대장 선암 CLE 영상<br /><b>문제</b>Grad-CAM은 MaxViT의 Block · Grid attention을 반영하지 못함</p>
      </section>

      <section className={cx('xai-stage')} aria-label="CLE 영상 분류와 XAI 시각화 웹 화면">
        <ModelRail />
        <Arrow />
        <div className={cx('xai-app')}>
          <div className={cx('xai-app__bar')}>
            <span><i /><i /><i /></span>
            <strong>CLE Assessment</strong>
            <small>UI 재구성 · SYNTHETIC CLE · SCHEMATIC HEATMAP</small>
          </div>
          <div className={cx('xai-app__body')}>
            <div className={cx('xai-app__result')}>
              <p>Assessment Result</p>
              <div className={cx('xai-app__label')}>
                <p><span>NORMAL</span><b>0.6%</b></p>
                <p className={cx('is-predicted')}><span>TUMOR</span><b>99.4%</b></p>
              </div>
              <div className={cx('xai-app__confidence')}>
                <p><span>Confidence</span><small>calibrated</small><b>99.4%</b></p>
                <div className={cx('xai-app__bar-meter')}><i style={{ width: '99.4%' }} /></div>
              </div>
              <dl>
                <div><dt>Model</dt><dd>MaxViT · 5-fold ensemble</dd></div>
                <div><dt>Inference</dt><dd>약 205 ms · RTX A6000</dd></div>
                <div><dt>Serving</dt><dd>FastAPI · Docker Compose · nginx</dd></div>
              </dl>
            </div>
            <div className={cx('xai-app__visual')}>
              <div className={cx('xai-app__visual-head')}>
                <p>Attention Visualization</p>
                <span><em>Original</em><em>Grad-CAM</em><em>MAGAR</em><em className={cx('is-active')}>Compare</em></span>
              </div>
              <div className={cx('xai-app__images')}>
                <CleImage label="ORIGINAL" note="입력 CLE" />
                <CleImage label="GRAD-CAM" note="격자형으로 흩어진 반응" overlay="gradcam" />
                <CleImage label="MAGAR" note="조직 구조를 따라 모인 반응" overlay="magar" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={cx('xai-method')}>
        <div className={cx('xai-method__head')}>
          <span>PROPOSED XAI</span>
          <strong>MAGAR</strong>
          <small>Multi-Axis Gradient-weighted Attention Rollout</small>
        </div>
        <ol>
          {magarSteps.map((step, index) => (
            <li key={step.label}><b>{String(index + 1).padStart(2, '0')}</b><strong>{step.label}</strong><small>{step.detail}</small></li>
          ))}
        </ol>
      </section>

      <section className={cx('xai-foot')}>
        <div className={cx('xai-result')}>
          <span>CLASSIFICATION</span>
          <div className={cx('xai-result__metrics')}>
            {metrics.map((metric) => <p key={metric.name}><strong>{metric.value}</strong><small>{metric.name}</small></p>)}
          </div>
          <p className={cx('xai-result__baseline')}><b>Baseline 비교</b>동일 조건 7개 모델 중 MaxViT F1 1위<br /><small>단일 모델 기준 · AUROC는 Swin-S가 근소 우위</small></p>
          <p>환자 단위 5-fold 앙상블<br />학습과 분리된 new cohort 4,889장에서 평가</p>
        </div>

        <div className={cx('xai-eval')}>
          <span>XAI EVALUATION</span>
          <p className={cx('xai-eval__question')}><strong>Stability</strong>입력에 노이즈를 더해도 같은 영역을 가리키는가</p>
          <StabilityPlot />
          <p className={cx('xai-eval__note')}><b>Faithfulness</b>는 Grad-CAM 우위 — 한 지점에 모인 반응에 유리한 지표<br />두 방법은 지표별 강점이 다른 보완적 도구</p>
        </div>

        <div className={cx('xai-scope')}>
          <span>MY SCOPE</span>
          <div>
            <b>2024</b>
            <p><strong>공과대학 학술제 · 3인 팀</strong>MaxViT 분류 모델 개발 · MAGAR 제안·구현<br /><em>제33회 순천향대학교 공과대학 학술제 은상</em></p>
          </div>
          <div>
            <b>2026</b>
            <p><strong>학사 졸업논문 · 개인</strong>모델 학습·평가 · XAI 정량 검증 · 논문 작성<br />웹 추론 시스템 새로 구현 <small>React · FastAPI · PostgreSQL</small></p>
          </div>
        </div>
      </section>
    </div>
  )
}

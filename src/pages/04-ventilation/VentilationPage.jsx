import lungVentilationVisual from '../../../assets/images/synthetic-lung-ventilation-v3.png'
import inspiratoryCtVisual from '../../../assets/images/synthetic-coronal-inspiratory-ct-v1.png'
import expiratoryCtVisual from '../../../assets/images/synthetic-coronal-registered-expiratory-ct-v1.png'
import styles from './VentilationPage.module.css'

const cx = (...names) => names.filter(Boolean).map((name) => styles[name]).join(' ')

function CtSlice({ phase, src }) {
  const isInhale = phase === 'INSPIRATORY'

  return (
    <div className={cx('vent-ct')}>
      <img src={src} alt={`${isInhale ? '흡기' : '흡기 공간에 정합된 호기'} 합성 coronal lung-masked CT`} />
      <span>{phase}{!isInhale && <b>REGISTERED</b>}</span>
      <small>{isInhale ? '흡기 CT' : '정합된 호기 CT'}</small>
    </div>
  )
}

function ModelRail() {
  return (
    <div className={cx('vent-models')} aria-label="비교한 생성 모델 4종">
      <div className={cx('vent-models__head')}>
        <span>GENERATIVE MODELS</span>
        <small>4 MODEL COMPARISON</small>
      </div>
      <div className={cx('vent-models__groups')}>
        <div className={cx('vent-model-group')}>
          <span>GAN</span>
          <strong>pix2pixHD</strong>
          <strong>ResViT</strong>
        </div>
        <div className={cx('vent-model-group')}>
          <span>DIFFUSION</span>
          <strong>I2SB</strong>
          <strong>SelfRDB</strong>
        </div>
      </div>
    </div>
  )
}

export default function VentilationPage() {
  return (
    <div className={cx('vent-case')}>
      <header className="case-header">
        <h2>흡기·호기 CT 기반 폐 환기지도 합성</h2>
        <span className="case-category case-category--corner">AI RESEARCH</span>
      </header>

      <section className={cx('vent-brief')}>
        <span>COMPARATIVE STUDY</span>
        <strong>GAN과 Diffusion 모델 4종을 구현해 같은 데이터와 평가 조건에서 비교</strong>
        <p>영상 자체의 유사도와 환기 결손을 재현하는 능력을 함께 평가</p>
      </section>

      <section className={cx('vent-stage')} aria-label="폐 환기지도 생성 모델 비교 흐름">
        <div className={cx('vent-inputs')}>
          <p>PAIRED CT INPUT</p>
          <div><CtSlice phase="INSPIRATORY" src={inspiratoryCtVisual} /><CtSlice phase="EXPIRATORY" src={expiratoryCtVisual} /></div>
          <span>LUNG-MASKED CORONAL CT · EXP → INSP SPACE · SYNTHETIC</span>
        </div>

        <div className={cx('vent-flow-arrow', 'vent-flow-arrow--input')} aria-hidden="true"><i /></div>
        <ModelRail />
        <div className={cx('vent-flow-arrow')} aria-hidden="true"><i /></div>

        <figure className={cx('vent-output')}>
          <figcaption><span>MODEL OUTPUT</span><strong>CT-based ventilation map</strong></figcaption>
          <img className={cx('vent-output__image')} src={lungVentilationVisual} alt="CT 단면과 환기 강도 분포를 결합한 합성 폐 환기지도" />
          <small>밝은 영역: 높은 환기 · 어두운 영역: 낮은 환기</small>
        </figure>
      </section>

      <section className={cx('vent-findings')}>
        <div className={cx('vent-finding')}>
          <div>
            <span>IMAGE FIDELITY</span>
            <small>전체 영상 구조와 유사도</small>
          </div>
          <strong>ResViT</strong>
          <p><b>PSNR&nbsp; 22.22</b><b>SSIM&nbsp; 0.863</b></p>
        </div>
        <div className={cx('vent-finding', 'vent-finding--defect')}>
          <div>
            <span>DEFECT RECONSTRUCTION</span>
            <small>국소 환기 결손 재현</small>
          </div>
          <strong>SelfRDB</strong>
          <p><b>DSC&nbsp; 0.803</b><b>Sensitivity&nbsp; 0.774</b></p>
        </div>
      </section>

      <section className={cx('vent-foot')}>
        <div className={cx('vent-result')}>
          <span>RESULT</span>
          <div className={cx('vent-result__metric')}>
            <strong>ResViT</strong>
            <p>영상 유사도 최고</p>
          </div>
          <div className={cx('vent-result__metric')}>
            <strong>SelfRDB</strong>
            <p>환기 결손 재현 최고</p>
          </div>
        </div>
        <div className={cx('vent-foot__body')}>
          <div className={cx('vent-contribution')}>
            <span>MY CONTRIBUTION</span>
            <ol>
              <li><b>01</b><p>연구 task에 맞춘<br /><strong>4개 모델 구현</strong></p></li>
              <li><b>02</b><p>같은 조건의<br /><strong>학습·평가 실행</strong></p></li>
              <li><b>03</b><p>공통 평가 코드·<br /><strong>통계 분석</strong></p></li>
              <li><b>04</b><p>비교 figure와<br /><strong>논문 원고 작성</strong></p></li>
            </ol>
          </div>
          <div className={cx('vent-context')}>
            <div>
              <span>RESEARCH CONTEXT</span>
              <p>비교 모델·평가 지표 <b>연구진 지정</b><br />CT 전처리 <b>공동 연구자 담당</b></p>
            </div>
            <div className={cx('vent-paper')}>
              <span>PUBLICATION</span>
              <p>MICCAI 2026 SASHIMI Workshop <b>· Second author</b></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

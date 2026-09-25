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
          <strong>I²SB</strong>
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
            <span>GAN</span>
            <strong>pix2pixHD</strong>
          </div>
          <dl>
            <div><dt>PSNR</dt><dd>21.17</dd></div>
            <div><dt>SSIM</dt><dd>0.816</dd></div>
            <div><dt>DSC</dt><dd>0.625</dd></div>
            <div><dt>SEN</dt><dd>0.529</dd></div>
          </dl>
        </div>
        <div className={cx('vent-finding')}>
          <div>
            <span>GAN</span>
            <strong>ResViT</strong>
          </div>
          <dl>
            <div className={cx('is-best')}><dt>PSNR</dt><dd>22.22</dd></div>
            <div className={cx('is-best')}><dt>SSIM</dt><dd>0.863</dd></div>
            <div><dt>DSC</dt><dd>0.544</dd></div>
            <div><dt>SEN</dt><dd>0.467</dd></div>
          </dl>
        </div>
        <div className={cx('vent-finding')}>
          <div>
            <span>DIFFUSION</span>
            <strong>I²SB</strong>
          </div>
          <dl>
            <div><dt>PSNR</dt><dd>20.92</dd></div>
            <div><dt>SSIM</dt><dd>0.818</dd></div>
            <div><dt>DSC</dt><dd>0.748</dd></div>
            <div><dt>SEN</dt><dd>0.706</dd></div>
          </dl>
        </div>
        <div className={cx('vent-finding')}>
          <div>
            <span>DIFFUSION</span>
            <strong>SelfRDB</strong>
          </div>
          <dl>
            <div><dt>PSNR</dt><dd>21.78</dd></div>
            <div><dt>SSIM</dt><dd>0.853</dd></div>
            <div className={cx('is-best')}><dt>DSC</dt><dd>0.803</dd></div>
            <div className={cx('is-best')}><dt>SEN</dt><dd>0.774</dd></div>
          </dl>
        </div>
      </section>

      <section className={cx('vent-foot')}>
        <div className={cx('vent-result')}>
          <span>RESULT</span>
          <div className={cx('vent-result__metric')}>
            <strong>ResViT</strong>
            <p>PSNR·SSIM 최고</p>
          </div>
          <div className={cx('vent-result__metric')}>
            <strong>SelfRDB</strong>
            <p>결손 DSC·Sensitivity 최고</p>
          </div>
        </div>
        <div className={cx('vent-foot__body')}>
          <div className={cx('vent-contribution')}>
            <span>MY CONTRIBUTION</span>
            <ol>
              <li>
                <div><b>01</b><em>IMPLEMENT</em></div>
                <strong>4개 모델 구현</strong>
                <p>연구진 지정 모델 · task 구현</p>
              </li>
              <li>
                <div><b>02</b><em>EXPERIMENT</em></div>
                <strong>학습·평가 실행</strong>
                <p>공동 연구자 전처리 CT · 동일 조건</p>
              </li>
              <li>
                <div><b>03</b><em>ANALYSIS</em></div>
                <strong>통계 분석</strong>
                <p>공통 평가 코드 구성</p>
              </li>
              <li>
                <div><b>04</b><em>PAPER</em></div>
                <strong>Figure·원고 작성</strong>
                <p>방법·결과·해석 정리</p>
              </li>
            </ol>
          </div>
          <div className={cx('vent-paper')}>
            <span>PUBLICATION</span>
            <p>
              <small>Choi, C., <b>Park, P.</b>, Lee, S. M., &amp; Kim, N.</small>
              <cite>Synthesizing CT-based Functional Lung Ventilation Map: A Comparative Study of Generative Models for Image-to-Image Translation.</cite>
              <em>SASHIMI Workshop, MICCAI 2026.</em>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

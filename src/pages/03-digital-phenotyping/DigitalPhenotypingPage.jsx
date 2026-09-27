import phoneImage from '../../../assets/images/phenotyping/device-phone.png'
import wearableImage from '../../../assets/images/phenotyping/device-wearable.png'
import surveyImage from '../../../assets/images/phenotyping/device-survey.png'
import styles from './DigitalPhenotypingPage.module.css'

const cx = (...names) => names.filter(Boolean).map((name) => styles[name]).join(' ')
const WINDOW_X = [178, 266, 354, 442]
const SURVEY_X = [181, 229, 282, 337, 391, 448, 510]
// 감사 규칙 4개를 같은 문법(번호 → 작은 도식 → 교정 · 대상)으로 한 표에 보여준다.
const AUDIT_GROUPS = [
  {
    title: 'DATA INTEGRITY',
    description: '분석 대상 · 관측값',
    rules: [
      { number: '01', visual: 'label', correction: '분석 대상에서 제외', note: '임상군에 포함되던 규칙 교정' },
      { number: '02', visual: 'value', correction: '결측값으로 정제', note: '센티넬 · 무한대 · 불가능한 생체값' },
    ],
  },
  {
    title: 'LEAKAGE CONTROL',
    description: 'feature 범위 · CV 경계',
    rules: [
      { number: '03', visual: 'feature', correction: 'feature에서 제거', note: '정답 척도 · 시점 metadata' },
      { number: '04', visual: 'fold', correction: '학습 fold 내부로 이동', note: '정제 · 대치 · feature 선택' },
    ],
  },
]

const LABEL_TOKENS = [
  { text: '대조군', korean: true },
  { text: '임상군', korean: true },
  { text: '결측·중도탈락·미분류', removed: true, korean: true },
]
const VALUE_TOKENS = [
  { text: '72' },
  { text: '∞', removed: true },
  { text: '2³²−1', removed: true },
  { text: '94' },
]
const FEATURE_TOKENS = [
  { text: 'ACT' },
  { text: 'SLEEP' },
  { text: 'GPS' },
  { text: 'SCALE', removed: true, struck: true },
  { text: 'WEEK', removed: true, struck: true },
]

const PHONE_PATH = 'M158 51 C178 50 184 31 203 38 S232 69 250 48 S279 26 300 46 S330 65 350 41 S383 33 403 51 S435 65 454 38 S493 33 512 49 S533 54 548 35'
const WEARABLE_PATH = 'M158 112 L179 112 187 89 198 130 208 103 218 112 247 112 255 98 264 121 274 111 296 111 307 86 318 134 329 111 359 111 369 96 379 124 389 111 420 111 429 91 440 130 451 111 480 111 490 99 500 120 511 111 548 111'

const PARTICIPANTS = [
  { name: '참여자 A', weeks: [true, false, true, false], group: '학습' },
  { name: '참여자 B', weeks: [true, true, false, true], group: '학습' },
  { name: '참여자 C', weeks: [true, true, true, false], group: '평가', heldOut: true },
]

function LongitudinalInput() {
  return (
    <div className={cx('pheno-signals')}>
      <div className={cx('timeline-heading')}>
        <p className={cx('pheno-eyebrow')}>SCHEMATIC · LONGITUDINAL INPUT</p>
        <span>START</span><i /><span>END</span>
      </div>

      <svg className={cx('pheno-timeline')} viewBox="-8 0 698 210" role="img" aria-label="스마트폰, 웨어러블, 자가보고 데이터가 공통 관측창으로 묶여 feature table이 되는 과정">
        <path className={cx('timeline-phone-depth')} d={PHONE_PATH} />
        <path className={cx('timeline-wearable-depth')} d={WEARABLE_PATH} />
        <g className={cx('timeline-survey-depth')}>{SURVEY_X.map((x) => <circle key={x} cx={x} cy="172" r="4" />)}</g>

        <g className={cx('timeline-windows')}>
          {WINDOW_X.map((x) => (
            <g className={cx('timeline-window')} key={x}>
              <g className={cx('timeline-window-depth')}>
                <path d={`M${x} 8 L${x + 8} 3.3 H${x + 90} L${x + 82} 8 Z`} />
                <path d={`M${x + 82} 8 L${x + 90} 3.3 V179.3 L${x + 82} 184 Z`} />
              </g>
              <rect x={x} y="8" width="82" height="176" rx="2" />
            </g>
          ))}
        </g>

        {/* synthetic 기기 이미지: 라벨과 신호선 사이, 각 입력 행의 기준선에 중심을 맞춤 */}
        <g className={cx('timeline-devices')}>
          <image href={phoneImage} x="98" y="20" width="50" height="60" preserveAspectRatio="xMidYMid meet" />
          <image href={wearableImage} x="98" y="86" width="50" height="50" preserveAspectRatio="xMidYMid meet" />
          <image href={surveyImage} x="98" y="147" width="50" height="50" preserveAspectRatio="xMidYMid meet" />
        </g>
        <g className={cx('timeline-labels')}>
          <text x="-8" y="44">SMARTPHONE</text><text x="-8" y="59">사용 · 사회활동 · GPS</text>
          <text x="-8" y="105">WEARABLE</text><text x="-8" y="120">활동 · 수면 · 심박</text>
          <text x="-8" y="166">SELF-REPORT</text><text x="-8" y="181">자가보고 설문</text>
        </g>
        <g className={cx('timeline-baselines')}><path d="M158 50H548 M158 111H548 M158 172H548" /></g>
        <path className={cx('timeline-phone')} d={PHONE_PATH} />
        <path className={cx('timeline-wearable')} d={WEARABLE_PATH} />
        <g className={cx('timeline-survey')}>{SURVEY_X.map((x) => <circle key={x} cx={x} cy="172" r="4" />)}</g>

        <g className={cx('timeline-brackets')}>
          <path d="M178 194v7h82v-7 M266 194v7h82v-7 M354 194v7h82v-7 M442 194v7h82v-7" />
          {WINDOW_X.map((x, index) => <text key={x} x={x + 41} y="210">{index + 1}주차</text>)}
        </g>
        <g className={cx('timeline-output')}><path d="M548 24H575 M548 172H575 M575 24V172"/><path d="M575 98H612"/><path d="M606 92l7 6-7 6"/></g>
        <g className={cx('timeline-matrix-depth')}><path d="M626 58 L631 53 H689 L684 58 Z"/><path d="M684 58 L689 53 V133 L684 138 Z"/></g>
        <g className={cx('timeline-feature-table')}>
          <rect x="626" y="58" width="58" height="80" rx="2"/>
          <path d="M626 78H684 M626 98H684 M626 118H684 M645 58V138 M665 58V138"/>
          {[68, 88, 108, 128].flatMap((y) => [635, 655, 675].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="2" />))}
          <text x="655" y="153">FEATURE TABLE</text>
        </g>
        <g className={cx('timeline-output-caption')}>
          <text x="655" y="174">관측창별 feature 구성</text>
          <text x="655" y="190">시간 단위로 데이터 소스 조립</text>
        </g>
      </svg>
    </div>
  )
}

function ParticipantSplit() {
  return (
    <div className={cx('pheno-cv')}>
      <p className={cx('pheno-eyebrow')}>SCHEMATIC · PARTICIPANT-LEVEL SPLIT</p>
      <p className={cx('observation-key')}>원 1개 = 해당 주차의 관측 기록</p>
      <div className={cx('participant-groups')}>
        <div className={cx('participant-week-head')}><b /><span>{[1, 2, 3, 4].map((week) => <i key={week}>{week}주차</i>)}</span><small /></div>
        {PARTICIPANTS.map(({ name, weeks, group, heldOut }) => (
          <div className={cx(heldOut && 'is-held-out')} key={name}>
            <b>{name}</b>
            <span>{weeks.map((visible, index) => <i className={cx(!visible && 'is-missing')} key={index} />)}</span>
            <small>{group}</small>
          </div>
        ))}
      </div>
      <p className={cx('cv-note')}>같은 참여자의 관측 시점은 한쪽에만 배정</p>
      <div className={cx('nested-split')}>
        <div className={cx('nested-train')}><span>학습 참여자 A · B</span><div><b>내부 교차검증</b><small>전처리 · feature 선택<br />모델 선택</small></div></div>
        <i />
        <div className={cx('nested-test')}><span>평가 참여자 C</span><b>최종 평가</b><small>학습·전처리에<br />사용하지 않음</small></div>
      </div>
    </div>
  )
}

function AuditTokens({ tokens }) {
  return (
    <span className={cx('audit-tokens')}>
      {tokens.map((token) => <i className={cx(token.removed && 'is-removed', token.struck && 'is-struck', token.korean && 'is-text')} key={token.text}>{token.text}</i>)}
    </span>
  )
}

function FoldVisual() {
  return (
    <span className={cx('audit-fold')}>
      <span className={cx('audit-fold__train')}>
        <small>TRAIN FOLD</small>
        {['정제', '대치', '선택'].map((step) => <i key={step}>{step}</i>)}
      </span>
      <span className={cx('audit-fold__valid')}>VALID</span>
    </span>
  )
}

const AUDIT_VISUALS = {
  label: () => <AuditTokens tokens={LABEL_TOKENS} />,
  value: () => <AuditTokens tokens={VALUE_TOKENS} />,
  feature: () => <AuditTokens tokens={FEATURE_TOKENS} />,
  fold: FoldVisual,
}

function AuditGroup({ title, description, rules }) {
  return (
    <div className={cx('audit-rule-group')}>
      <div className={cx('audit-rule-group__title')}><span>{title}</span><small>{description}</small></div>
      <div className={cx('audit-rules')}>
        {rules.map((rule) => {
          const Visual = AUDIT_VISUALS[rule.visual]
          return (
            <div className={cx('audit-rule')} key={rule.number}>
              <span className={cx('audit-rule__number')}>{rule.number}</span>
              <Visual />
              <i aria-hidden="true" />
              <strong>{rule.correction}</strong>
              <small>{rule.note}</small>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function AuditLedger() {
  return (
    <div className={cx('audit-ledger')}>
      <div className={cx('audit-ledger__head')}><span>PIPELINE AUDIT</span></div>
      <div className={cx('audit-ledger__groups')}>
        {AUDIT_GROUPS.map((group) => <AuditGroup {...group} key={group.title} />)}
      </div>
    </div>
  )
}

function ValidationSummary() {
  return (
    <aside className={cx('validation-summary')}>
      <div className={cx('validation-summary__head')}><span>검증 결과</span><small>반복 실행 기록 기준</small></div>
      <div><span>REPRODUCTION</span><p>기존 보고 조건을 여러 seed에서 유사한 범위로 재현</p></div>
      <div><span>OBSERVATION</span><p>seed와 fold에 따른 성능 변동성을 반복 실험으로 확인</p></div>
      <div className={cx('validation-summary__scope')}><span>MY SCOPE</span><p>코드 이관 · 데이터 규칙 교정<br />평가 파이프라인 재구성 · 모델 반복 평가</p></div>
    </aside>
  )
}

export default function DigitalPhenotypingPage() {
  return (
    <div className={cx('pheno-case')}>
      <header className="case-header">
        <h2>스마트폰·웨어러블 기반 소아·청소년 우울·불안 선별</h2>
        <span className="case-category case-category--corner">AI RESEARCH</span>
      </header>

      <section className={cx('pheno-brief')}>
        <span>STUDY</span>
        <strong>스마트폰·웨어러블 데이터로 일상 행동·생체 패턴을 정량화</strong>
        <p>대조군과 우울·불안 관련 임상군을 구분한 기존 연구를 재현하고 평가 과정 점검</p>
      </section>

      <section className={cx('pheno-visual')} aria-label="디지털 페노타이핑 데이터와 평가 흐름">
        <LongitudinalInput />
        <ParticipantSplit />
      </section>

      <section className={cx('pheno-lower')}>
        <AuditLedger />
        <ValidationSummary />
      </section>
    </div>
  )
}

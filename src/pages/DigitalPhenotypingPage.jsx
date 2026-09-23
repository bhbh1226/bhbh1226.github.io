const WINDOW_X = [178, 266, 354, 442]
const SURVEY_X = [181, 229, 282, 337, 391, 448, 510]
const FEATURE_COLUMNS = ['ACT', 'SLEEP', 'GPS', 'SCALE', 'WEEK']

const PHONE_PATH = 'M158 51 C178 50 184 31 203 38 S232 69 250 48 S279 26 300 46 S330 65 350 41 S383 33 403 51 S435 65 454 38 S493 33 512 49 S533 54 548 35'
const WEARABLE_PATH = 'M158 112 L179 112 187 89 198 130 208 103 218 112 247 112 255 98 264 121 274 111 296 111 307 86 318 134 329 111 359 111 369 96 379 124 389 111 420 111 429 91 440 130 451 111 480 111 490 99 500 120 511 111 548 111'

const PARTICIPANTS = [
  { name: '참여자 A', weeks: [true, false, true, false], group: '학습군' },
  { name: '참여자 B', weeks: [true, true, false, true], group: '학습군' },
  { name: '참여자 C', weeks: [true, true, true, false], group: '평가군', heldOut: true },
]

function LongitudinalInput() {
  return (
    <div className="pheno-signals">
      <div className="timeline-heading">
        <p className="pheno-eyebrow">SCHEMATIC · LONGITUDINAL INPUT</p>
        <span>START</span><i /><span>END</span>
      </div>

      <svg className="pheno-timeline" viewBox="0 0 690 210" role="img" aria-label="스마트폰, 웨어러블, 자가보고 데이터가 공통 관측창으로 묶여 feature table이 되는 과정">
        <path className="timeline-phone-depth" d={PHONE_PATH} />
        <path className="timeline-wearable-depth" d={WEARABLE_PATH} />
        <g className="timeline-survey-depth">{SURVEY_X.map((x) => <circle key={x} cx={x} cy="172" r="4" />)}</g>

        <g className="timeline-windows">
          {WINDOW_X.map((x) => (
            <g className="timeline-window" key={x}>
              <g className="timeline-window-depth">
                <path d={`M${x} 8 L${x + 8} 3.3 H${x + 90} L${x + 82} 8 Z`} />
                <path d={`M${x + 82} 8 L${x + 90} 3.3 V179.3 L${x + 82} 184 Z`} />
              </g>
              <rect x={x} y="8" width="82" height="176" rx="2" />
            </g>
          ))}
        </g>

        <g className="timeline-labels">
          <text x="0" y="44">SMARTPHONE</text><text x="0" y="59">사용 · 사회활동 · GPS</text>
          <text x="0" y="105">WEARABLE</text><text x="0" y="120">활동 · 수면 · 심박</text>
          <text x="0" y="166">SELF-REPORT</text><text x="0" y="181">자가보고 설문</text>
        </g>
        <g className="timeline-baselines"><path d="M158 50H548 M158 111H548 M158 172H548" /></g>
        <path className="timeline-phone" d={PHONE_PATH} />
        <path className="timeline-wearable" d={WEARABLE_PATH} />
        <g className="timeline-survey">{SURVEY_X.map((x) => <circle key={x} cx={x} cy="172" r="4" />)}</g>

        <g className="timeline-brackets">
          <path d="M178 194v7h82v-7 M266 194v7h82v-7 M354 194v7h82v-7 M442 194v7h82v-7" />
          {WINDOW_X.map((x, index) => <text key={x} x={x + 41} y="210">{index + 1}주차</text>)}
        </g>
        <g className="timeline-output"><path d="M548 24H575 M548 172H575 M575 24V172"/><path d="M575 98H612"/><path d="M606 92l7 6-7 6"/></g>
        <g className="timeline-matrix-depth"><path d="M626 58 L631 53 H689 L684 58 Z"/><path d="M684 58 L689 53 V133 L684 138 Z"/></g>
        <g className="timeline-feature-table">
          <rect x="626" y="58" width="58" height="80" rx="2"/>
          <path d="M626 78H684 M626 98H684 M626 118H684 M645 58V138 M665 58V138"/>
          {[68, 88, 108, 128].flatMap((y) => [635, 655, 675].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="2" />))}
          <text x="655" y="153">FEATURE TABLE</text>
        </g>
      </svg>

      <div className="timeline-caption"><b>관측창별 feature 구성</b><span>서로 다른 데이터 소스를 동일한 시간 단위로 조립</span></div>
    </div>
  )
}

function ParticipantSplit() {
  return (
    <div className="pheno-cv">
      <p className="pheno-eyebrow">SCHEMATIC · PARTICIPANT-LEVEL SPLIT</p>
      <p className="observation-key">원 1개 = 해당 주차의 관측 기록</p>
      <div className="participant-groups">
        <div className="participant-week-head"><b /><span>{[1, 2, 3, 4].map((week) => <i key={week}>{week}주차</i>)}</span><small /></div>
        {PARTICIPANTS.map(({ name, weeks, group, heldOut }) => (
          <div className={heldOut ? 'is-held-out' : ''} key={name}>
            <b>{name}</b>
            <span>{weeks.map((visible, index) => <i className={visible ? '' : 'is-missing'} key={index} />)}</span>
            <small>{group}</small>
          </div>
        ))}
      </div>
      <div className="nested-split">
        <div className="nested-train"><span>학습 참여자 A · B</span><div><b>내부 교차검증</b><small>전처리 · feature 선택<br />모델 선택</small></div></div>
        <i />
        <div className="nested-test"><span>평가 참여자 C</span><b>최종 평가</b><small>학습·전처리에 사용하지 않음</small></div>
      </div>
      <p className="cv-note">같은 참여자의 관측 시점을<br />서로 다른 fold에 나누지 않음</p>
    </div>
  )
}

function LabelAudit() {
  return (
    <div className="audit-item audit-item--label">
      <svg viewBox="0 0 210 34" aria-label="유효 라벨과 제외 라벨 구분">
        <text className="audit-row-label" x="0" y="11">USE</text>
        <g className="audit-valid"><circle cx="38" cy="8" r="3"/><text x="47" y="11">CONTROL</text><circle cx="119" cy="8" r="3"/><text x="128" y="11">CLINICAL</text></g>
        <text className="audit-row-label" x="0" y="29">DROP</text>
        <g className="audit-excluded"><text x="38" y="29">MISSING</text><text x="96" y="29">DROPOUT</text><text x="158" y="29">UNCLASS.</text></g>
      </svg>
      <p><b>유효 라벨만 사용</b><small>결측·중도탈락·미분류 제외</small></p>
    </div>
  )
}

function ValueAudit() {
  return (
    <div className="audit-item audit-item--value">
      <svg viewBox="0 0 210 34" aria-label="비정상 값이 결측값으로 정제되는 과정">
        <text className="audit-row-label" x="0" y="11">RAW</text>
        <g className="audit-values"><text x="48" y="11">72</text><text className="audit-infinity" x="88" y="12">∞</text><text className="audit-sentinel" x="142" y="11">2³²−1</text><text x="195" y="11">94</text></g>
        <path className="audit-drop" d="M88 14v9 M142 14v9"/><path className="audit-arrow" d="M84 20l4 4 4-4 M138 20l4 4 4-4"/>
        <text className="audit-row-label" x="0" y="31">CLEAN</text>
        <g className="audit-clean audit-values"><text x="48" y="31">72</text><text x="88" y="31">—</text><text x="142" y="31">—</text><text x="195" y="31">94</text></g>
      </svg>
      <p><b>비정상 값을 결측으로 정제</b><small>센티넬·무한대·비정상 생체값</small></p>
    </div>
  )
}

function LeakageAudit() {
  return (
    <div className="audit-item audit-item--leakage">
      <svg viewBox="0 0 210 34" aria-label="누수 가능성이 있는 feature 열 제외">
        {FEATURE_COLUMNS.map((label, index) => <g key={label} transform={`translate(${index * 42},0)`}><rect x="0" y="1" width="35" height="31" rx="1"/><text x="17.5" y="19">{label}</text>{index > 2 && <path d="M3 5l29 23 M32 5L3 28"/>}</g>)}
      </svg>
      <p><b>누수 feature 제외</b><small>정답 척도·시점 metadata 제거</small></p>
    </div>
  )
}

function CrossValidationAudit() {
  return (
    <div className="audit-item audit-item--cv">
      <svg viewBox="0 0 210 34" aria-label="전처리와 feature 선택을 학습 fold 내부에서 수행">
        <rect className="audit-fold" x="1" y="1" width="149" height="32" rx="1"/><text className="audit-fold-label" x="8" y="10">TRAIN FOLD</text>
        <g className="audit-cv-steps"><rect x="9" y="15" width="34" height="12"/><rect x="52" y="15" width="34" height="12"/><rect x="95" y="15" width="43" height="12"/><text x="26" y="23">정제</text><text x="69" y="23">대치</text><text x="116.5" y="23">선택</text><path d="M43 21h9 M86 21h9"/></g>
        <path className="audit-cv-arrow" d="M151 17h14"/><rect className="audit-validation" x="166" y="8" width="43" height="20" rx="1"/><text x="187.5" y="20">VALID</text>
      </svg>
      <p><b>학습 fold 내부에서 수행</b><small>전처리·대치·feature 선택</small></p>
    </div>
  )
}

function AuditGroup({ title, description, children }) {
  return (
    <div className="audit-rule-group">
      <div className="audit-rule-group__title"><span>{title}</span><small>{description}</small></div>
      {children}
    </div>
  )
}

function AuditLedger() {
  return (
    <div className="audit-ledger">
      <div className="audit-ledger__head"><span>PIPELINE AUDIT</span><strong>재현 과정에서 확인하고 교정한 규칙</strong></div>
      <AuditGroup title="DATA RULES" description="분석에 들어가는 행과 값"><LabelAudit /><ValueAudit /></AuditGroup>
      <AuditGroup title="EVALUATION RULES" description="모델이 볼 수 있는 정보와 범위"><LeakageAudit /><CrossValidationAudit /></AuditGroup>
    </div>
  )
}

function ValidationSummary() {
  return (
    <aside className="validation-summary">
      <div className="validation-summary__head"><span>검증 결과</span><small>반복 실행 기록 기준</small></div>
      <div><span>REPRODUCTION</span><p>기존 보고 조건을 여러 seed에서 유사한 범위로 재현</p></div>
      <div><span>OBSERVATION</span><p>seed와 fold에 따른 성능 변동성을 반복 실험으로 확인</p></div>
      <div className="validation-summary__scope"><span>MY SCOPE</span><p>코드 이관 · 데이터 규칙 교정<br />평가 pipeline 재구성 · 모델 반복 평가</p></div>
    </aside>
  )
}

export default function DigitalPhenotypingPage() {
  return (
    <div className="pheno-case">
      <header className="case-header">
        <h2>스마트폰·웨어러블 기반 소아·청소년 우울·불안 선별</h2>
        <span className="case-category case-category--corner">AI RESEARCH</span>
      </header>

      <section className="pheno-brief">
        <span>STUDY</span>
        <strong>스마트폰·웨어러블 데이터로 일상 행동·생체 패턴을 정량화</strong>
        <p>대조군과 우울·불안 관련 임상군을 구분한 기존 연구를 재현하고 평가 과정 점검</p>
      </section>

      <section className="pheno-visual" aria-label="디지털 페노타이핑 데이터와 평가 흐름">
        <LongitudinalInput />
        <ParticipantSplit />
      </section>

      <section className="pheno-lower">
        <AuditLedger />
        <ValidationSummary />
      </section>
    </div>
  )
}

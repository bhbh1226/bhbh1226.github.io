import styles from './ProfilePage.module.css'

const cx = (...names) => names.filter(Boolean).map((name) => styles[name]).join(' ')

const career = [
  { period: '2026.07 – 08', org: '서울대학교병원 Medical Vision Lab', role: '인턴', page: '02 · 03' },
  { period: '2025.12 – 2026.06', org: '서울아산병원 MI2RL', role: '인턴 → 위촉연구원', page: '04' },
  { period: '2025.10 – 2026.08', org: '순천향대 Efficient Computing Lab', role: '랩장', page: '06' },
  { period: '2024.12 – 2025.09', org: '순천향대 Medical AI Lab', role: '랩장', page: null },
]

const certificates = [
  { date: '2026.09', title: '정보처리기사' },
  { date: '2026.06', title: 'ADsP 데이터분석 준전문가' },
]

const awards = [
  { date: '2025.11', title: 'KICSP 우수발표논문상', page: '07' },
  { date: '2025.11', title: 'Capstone Design 경진대회 동상', page: '07' },
  { date: '2024.11', title: '공과대학 학술제 은상', page: '05' },
]

const contacts = [
  { label: 'GITHUB', text: 'github.com/bhbh1226', href: 'https://github.com/bhbh1226/' },
  { label: 'LINKEDIN', text: 'linkedin.com/in/bhbh1226', href: 'https://www.linkedin.com/in/bhbh1226/' },
  { label: 'EMAIL', text: 'bhbh1226@gmail.com', href: 'mailto:bhbh1226@gmail.com' },
]

// 초기 작업 figure: 기록에 있는 기능만 구조로 그린다. 좌표계 160 × 64.
// 보라색(fg-accent)은 본인이 직접 만든 부분에만 쓴다.
function StacFigure() {
  return (
    <svg viewBox="0 0 160 64" aria-label="직접 만든 실시간 관리 웹에서 모듈을 등록 · 관리하고 위치 알림과 위험 경보를 보냄">
      <g className={cx('fg-depth')}>
        <rect x="7" y="5" width="50" height="34" rx="2" />
        <rect x="75" y="19" width="22" height="20" rx="2" />
      </g>
      <g className={cx('fg-line')}>
        <rect x="72" y="22" width="22" height="20" rx="2" />
        <path d="M78 18a7 7 0 0 1 10 0 M75 14a11 11 0 0 1 16 0" />
        <path className={cx('fg-dash')} d="M58 32H70 M96 32H112 M112 22V36 M112 22H124 M112 36H124" />
        <circle cx="130" cy="22" r="4.5" />
        <path d="M125 41l5-9 5 9z" />
      </g>
      <circle className={cx('fg-mute')} cx="83" cy="32" r="3" />
      <g className={cx('fg-flow-dots')}><circle cx="63" cy="32" r="1.3" /><circle cx="103" cy="32" r="1.3" /><circle cx="116" cy="22" r="1.3" /><circle cx="116" cy="36" r="1.3" /></g>
      <g className={cx('fg-accent')}>
        <rect className={cx('fg-accent-soft')} x="4" y="8" width="50" height="34" rx="2" />
        <path d="M4 16H54 M10 23H48 M10 29.5H48 M10 36H40" />
      </g>
      <g className={cx('fg-window-dots')}>
        <circle cx="8" cy="12" r="1.3" /><circle cx="12.4" cy="12" r="1.3" /><circle cx="16.8" cy="12" r="1.3" />
      </g>
      <g className={cx('fg-text')}>
        <text x="29" y="56">실시간 관리 웹</text>
        <text x="83" y="56">모듈</text>
        <text x="138" y="25" className={cx('fg-text--left')}>위치</text>
        <text x="138" y="41" className={cx('fg-text--left')}>경보</text>
      </g>
    </svg>
  )
}

function BixbyFigure() {
  const bars = [8, 16, 24, 12, 20, 28, 14, 22, 10]
  return (
    <svg viewBox="0 0 160 64" aria-label="음성 발화를 직접 만든 Bixby Capsule이 받아 영화 데이터를 조회">
      <g className={cx('fg-depth')}>
        <rect x="61" y="17" width="38" height="20" rx="10" />
        <rect x="111" y="7" width="46" height="40" rx="2" />
      </g>
      <g className={cx('fg-bars')}>
        {bars.map((h, i) => <rect key={i} x={4 + i * 4} y={30 - h / 2} width="2" height={h} rx="1" />)}
      </g>
      <g className={cx('fg-line')}>
        <path className={cx('fg-dash')} d="M44 30H56 M98 30H106" />
        <rect x="108" y="10" width="46" height="40" rx="2" />
        <path d="M108 20H154 M108 30H154 M108 40H154 M122 10V50" />
      </g>
      <g className={cx('fg-flow-dots')}><circle cx="50" cy="30" r="1.3" /><circle cx="102" cy="30" r="1.3" /></g>
      <g className={cx('fg-accent')}>
        <rect className={cx('fg-accent-soft')} x="58" y="20" width="38" height="20" rx="10" />
      </g>
      <g className={cx('fg-text')}>
        <text x="77" y="32.6" className={cx('fg-text--accent')}>Capsule</text>
        <text x="21" y="56">음성 발화</text>
        <text x="77" y="56">대화 흐름</text>
        <text x="131" y="60">영화 데이터 API</text>
      </g>
    </svg>
  )
}

function ParallelFigure() {
  const nodes = []
  for (let r = 0; r < 3; r += 1) for (let c = 0; c < 5; c += 1) nodes.push({ x: 70 + c * 18, y: 14 + r * 16 })
  return (
    <svg viewBox="0 0 160 64" aria-label="하나의 작업을 여러 노드로 나누어 병렬 처리">
      <g className={cx('fg-depth')}>
        <rect x="7" y="17" width="30" height="20" rx="2" />
        <rect x="67" y="7" width="82" height="42" rx="2" />
      </g>
      <g className={cx('fg-line')}>
        <rect x="4" y="20" width="30" height="20" rx="2" />
        <path className={cx('fg-dash')} d="M36 30H48 M48 14V46 M48 14H60 M48 30H60 M48 46H60" />
        <rect className={cx('fg-cluster-frame')} x="64" y="10" width="82" height="40" rx="2" />
        <path d="M70 14H142 M70 30H142 M70 46H142" />
      </g>
      <g className={cx('fg-flow-dots')}><circle cx="42" cy="30" r="1.3" /><circle cx="54" cy="14" r="1.3" /><circle cx="54" cy="30" r="1.3" /><circle cx="54" cy="46" r="1.3" /></g>
      {nodes.map((n, i) => <rect key={i} className={cx(i % 4 === 1 ? 'fg-node-on' : 'fg-node')} x={n.x - 4} y={n.y - 4} width="8" height="8" rx="1" />)}
      <text x="105" y="7" className={cx('fg-cluster-label')}>COMPUTE CLUSTER</text>
      <g className={cx('fg-text')}>
        <text x="19" y="32.5">작업</text>
        <text x="106" y="62">병렬 처리 노드</text>
      </g>
    </svg>
  )
}

const earlyHighlights = [
  {
    date: '2018.11',
    title: 'STAC 2018 미래산업부문 우수상',
    issuer: 'SK플래닛 · 중소벤처기업부',
    work: '시각장애인용 물건 위치 알림 · 위험 감지 솔루션. 모듈을 실시간으로 등록 · 관리하는 웹 개발',
    role: { label: 'ROLE', text: 'Front-end · 실시간 socket 통신 · 상태 확인 · 제어 UI' },
    Figure: StacFigure,
  },
  {
    date: '2020.01',
    title: '2020 Bixby Hackathon 우수상',
    issuer: '삼성전자',
    work: '영화 · 문화활동 정보를 음성으로 찾는 Bixby Capsule. 영화 데이터 조회 API 개발',
    role: { label: 'ROLE', text: '사용자 의도 기반 대화 흐름 · 영화 특화 DB · 조회 API' },
    Figure: BixbyFigure,
  },
  {
    date: '2018.07',
    title: '국가슈퍼컴퓨팅 청소년 캠프 3위',
    issuer: 'KISTI 원장상 · UNIST',
    work: '국가 슈퍼컴퓨팅 교육 캠프에서 성과 평가 3위, 한국과학기술정보연구원 원장상 수상',
    role: { label: 'TOPIC', text: 'AI · 양자컴퓨팅 · 병렬 처리 · 알고리즘' },
    Figure: ParallelFigure,
  },
]

function PageRef({ page }) {
  return page ? <span className={cx('pf-ref')}>p.{page}</span> : null
}

export default function ProfilePage() {
  return (
    <div className={cx('pf-case')}>
      <header className="case-header">
        <h2>경력 · 수상 · 초기 작업</h2>
        <span className="case-category case-category--corner">PROFILE</span>
      </header>

      <section className={cx('pf-body')}>
        <div className={cx('pf-profile')}>
          <div className={cx('pf-name')}>
            <strong>박평진</strong>
            <span>Park PyeongJin</span>
          </div>
          <p className={cx('pf-edu')}>
            순천향대학교 컴퓨터공학과 · 공학사 · 2026.08
            <b>공과대학 수석졸업</b>
          </p>

          <span className={cx('pf-label', 'pf-label--section')}>CAREER</span>
          <ol className={cx('pf-rows')}>
            {career.map((item) => (
              <li key={item.org}>
                <small>{item.period}</small>
                <div><strong>{item.org}</strong><p>{item.role}<PageRef page={item.page} /></p></div>
              </li>
            ))}
          </ol>

          <span className={cx('pf-label', 'pf-label--section')}>CERTIFICATES</span>
          <ol className={cx('pf-rows', 'pf-rows--compact')}>
            {certificates.map((item) => (
              <li key={item.title}><small>{item.date}</small><div><strong>{item.title}</strong></div></li>
            ))}
          </ol>
        </div>

        <div className={cx('pf-early')}>
          <span className={cx('pf-label')}>EARLY WORK<i>2016 – 2020 · 한국디지털미디어고등학교</i></span>
          <div className={cx('pf-highlights')}>
            {earlyHighlights.map((item) => (
              <article key={item.title}>
                <div className={cx('pf-figure')}><item.Figure /></div>
                <small>{item.date} · {item.issuer}</small>
                <strong>{item.title}</strong>
                <p>{item.work}</p>
                <p className={cx('pf-role')}>
                  <b>{item.role.label}</b>
                  {/* 항목 단위로 줄바꿈해 가운뎃점으로 시작하는 줄이 생기지 않게 한다. */}
                  <span className={cx('pf-role__text')}>{item.role.text.split(' · ').map((part, index, parts) => (
                    <span key={part}><span className={cx('pf-role__part')}>{part}{index < parts.length - 1 ? ' ·' : ''}</span>{' '}</span>
                  ))}</span>
                </p>
              </article>
            ))}
          </div>
          <div className={cx('pf-awards')}>
            <span className={cx('pf-label')}>SELECTED AWARDS</span>
            <ol>
              {awards.map((item) => (
                <li key={item.title}><small>{item.date}</small><strong>{item.title}</strong><PageRef page={item.page} /></li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <footer className={cx('pf-contact')}>
        <span className={cx('pf-label')}>CONTACT</span>
        {contacts.map((item) => (
          <a key={item.label} href={item.href}><small>{item.label}</small>{item.text}</a>
        ))}
      </footer>
    </div>
  )
}

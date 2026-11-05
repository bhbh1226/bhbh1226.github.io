import styles from './LiveTournamentPage.module.css'

const cx = (...names) => names.filter(Boolean).map((name) => styles[name]).join(' ')

const decisions = [
  { number: '01', title: '고정 좌표 스케일링', detail: '1920×1080 좌표계 전체 확대·축소' },
  { number: '02', title: '진행 상태 복구', detail: '라운드·승자·셔플 배열까지 저장' },
  { number: '03', title: '미디어 최적화', detail: '중복 로딩 제거 · 다음 영상 선로딩' },
  { number: '04', title: '체감 동기화', detail: '가청 시작점에 모션 타이밍 정렬' },
]

export default function LiveTournamentPageView({ media, mode = 'delivery' }) {
  const isDemo = mode === 'demo'
  const flow = [
    ['01', '시작', media.intro],
    ['02', '라운드', media.round],
    ['03', '선택', media.selection],
    ['04', '우승', media.winner],
  ]

  return (
    <div className={cx('tournament-case', isDemo && 'tournament-case--demo')}>
      <header className="case-header">
        <h2>Netflix 10주년 라이브 짤드컵</h2>
        <span className={`${cx('tournament-category')} case-category case-category--corner`}>SERVICE</span>
      </header>

      <section className={cx('tournament-brief')}>
        <span>CLIENT DELIVERY</span>
        <strong>32개 영상 장면을 비교해 최종 우승을 선정하는<br />라이브 행사형 인터랙티브 웹 콘텐츠</strong>
        <dl>
          <div><dt>PERIOD</dt><dd>2026.08–2026.10</dd></div>
          <div><dt>ROLE</dt><dd>Frontend 전체 개발</dd></div>
          <div><dt>ENVIRONMENT</dt><dd>Safari · Chrome · Offline</dd></div>
        </dl>
      </section>

      <section className={cx('tournament-stage')} aria-label={`${isDemo ? '공개용 데모' : '실제 납품'} 화면과 행사 운영 흐름`}>
        <figure className={cx('tournament-main')}>
          <img src={media.match} alt="두 개의 영상 장면을 좌우에서 비교하는 토너먼트 대진 화면" />
          <figcaption><span>{isDemo ? 'PUBLIC DEMO UI · 공개용 자산 재구성' : 'PRODUCTION UI'}</span></figcaption>
        </figure>

        <div className={cx('tournament-flow')}>
          <header><span>OPERATOR FLOW</span><small>{isDemo ? '공개용 데모 화면' : '실제 납품 화면'}</small></header>
          <div className={cx('tournament-flow__grid')}>
            {flow.map(([number, label, image]) => (
              <figure key={number}>
                <img src={image} alt={`${label} 화면`} />
                <figcaption><b>{number}</b><span>{label}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className={cx('tournament-decisions')}>
        <header>
          <span>CHALLENGES</span>
          <strong>대규모 라이브 행사<br />영상 토너먼트 웹 시스템</strong>
        </header>
        <div className={cx('tournament-decisions__grid')}>
          {decisions.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <div><strong>{item.title}</strong><p>{item.detail}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className={cx('tournament-foot')}>
        <div className={cx('tournament-role')}>
          <span>MY ROLE</span>
          <strong>프런트엔드 개발 전반</strong>
          <p>UI · 대진 로직 · 미디어 · 상태 복구 · 빌드</p>
        </div>
        <div className={cx('tournament-live')}>
          <span>ONLINE VERSION</span>
          <strong>짤드컵 온라인 버전</strong>
          <a href="https://netflixkr10memequiz.com/" target="_blank" rel="noreferrer">netflixkr10memequiz.com <b>↗</b></a>
        </div>
        <div className={cx('tournament-demo')}>
          <span>EVENT RECORD</span>
          <div className={cx('tournament-demo__title')}>
            <strong>넷플릭스 짤드컵</strong>
            <p>넷플잔치 생중계 다시 보기 | 넷플릭스 코리아 10주년</p>
          </div>
          <a href="https://youtu.be/IXLsHpzjLLs?si=pF3f52QuABwTkKIP&amp;t=12946" target="_blank" rel="noreferrer">https://youtu.be/IXLsHpzjLLs?si=pF3f52QuABwTkKIP&amp;t=12946 <b>↗</b></a>
        </div>
      </section>
    </div>
  )
}

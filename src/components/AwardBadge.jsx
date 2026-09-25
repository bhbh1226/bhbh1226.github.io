// 수상 배지: 페이지 제목 옆에 두어 수상한 작업임을 바로 알 수 있게 한다.
// 메달 아이콘만 해당 페이지의 category color(accent)를 쓰고, 테두리와 글자는 중립색이다.
export function MedalIcon({ accent }) {
  return (
    <svg className="award-badge__icon" viewBox="0 0 12 16" aria-hidden="true">
      <path d="M3.2 1h2.3l1.4 4.1M8.8 1H6.5L5.1 5.1" fill="none" stroke={accent} strokeWidth="1.3" />
      <circle cx="6" cy="10" r="4.3" fill="none" stroke={accent} strokeWidth="1.3" />
      <circle cx="6" cy="10" r="1.7" fill={accent} />
    </svg>
  )
}

// 논문 게재 배지용 아이콘: 접힌 모서리가 있는 문서
export function PaperIcon({ accent }) {
  return (
    <svg className="award-badge__icon" viewBox="0 0 12 16" aria-hidden="true">
      <path d="M1.5 1h6l3 3v11h-9z M7.5 1v3h3" fill="none" stroke={accent} strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M3.8 8h4.4 M3.8 11h4.4" stroke={accent} strokeWidth="1.3" />
    </svg>
  )
}

// kind: 'award'(수상, 메달) | 'paper'(논문 게재, 문서)
export default function AwardBadge({ award, detail, accent = '#ecece6', kind = 'award' }) {
  const Icon = kind === 'paper' ? PaperIcon : MedalIcon
  return (
    <span className="award-badge">
      <Icon accent={accent} />
      <span className="award-badge__text">
        <b>{award}</b>
        {detail && <small>{detail}</small>}
      </span>
    </span>
  )
}

export function AwardBadges({ children }) {
  return <span className="award-badges">{children}</span>
}

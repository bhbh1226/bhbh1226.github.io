export default function PageShell({ pageNumber, section, children, tone = '' }) {
  const isCover = pageNumber === 1

  return (
    <section className={`page${isCover ? ' page--cover' : ''}${tone ? ` page--${tone}` : ''}`} data-page={pageNumber}>
      <header className="page__header">
        <span className="page__section">{section}</span>
        <span className="page__number">{String(pageNumber).padStart(2, '0')}</span>
      </header>

      <div className="page__content">{children}</div>

      <footer className="page__footer">
        <span>Pyeongjin Park</span>
        <span>AI Research · Service · Infrastructure</span>
      </footer>
    </section>
  )
}

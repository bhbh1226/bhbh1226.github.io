
import styles from './ProjectSkeletonPage.module.css'

const cx = (...names) => names.filter(Boolean).map((name) => styles[name]).join(' ')
export default function ProjectSkeletonPage({ title, focus, placeholder }) {
  return (
    <div className={cx('project-layout')}>
      <div className={cx('project-heading')}>
        <p className="kicker">Project</p>
        <h2>{title}</h2>
        <p>{focus}</p>
      </div>

      <div className={cx('project-grid')}>
        <div className={cx('main-placeholder')}>
          <div className={cx('placeholder-cross')} aria-hidden="true" />
          <div>
            <span>Main visual placeholder</span>
            <strong>{placeholder}</strong>
            <small>권장 비율 16:9 · 실제 자료 검토 후 교체</small>
          </div>
        </div>

        <aside className={cx('content-outline')} aria-label="Page content outline">
          <div><span>01</span><strong>Problem</strong><small>해결하려던 문제</small></div>
          <div><span>02</span><strong>Approach</strong><small>기술과 구조</small></div>
          <div><span>03</span><strong>My Role</strong><small>직접 수행한 작업</small></div>
          <div><span>04</span><strong>Result</strong><small>구현 및 연구 결과</small></div>
        </aside>
      </div>

      <div className={cx('decision-note')}>
        <span>PAGE DECISION</span>
        <p>다음 단계에서 이 페이지가 가장 크게 보여줄 한 가지를 먼저 결정합니다.</p>
      </div>
    </div>
  )
}

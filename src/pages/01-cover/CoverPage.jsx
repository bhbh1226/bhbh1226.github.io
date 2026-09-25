import coverBg from '../../../assets/images/cover-wafer-bg-v1.png'
import styles from './CoverPage.module.css'

const cx = (...names) => names.filter(Boolean).map((name) => styles[name]).join(' ')

export default function CoverPage() {
  return (
    <div className={cx('hero-cover')}>
      <img className={cx('hero-cover__bg')} src={coverBg} alt="" aria-hidden="true" />
      <div className={cx('hero-cover__meta')}>
        <span>Portfolio · 2026</span>
      </div>

      <div className={cx('hero-cover__name')}>
        <p>Park PyeongJin</p>
        <h1>박평진</h1>
      </div>

      <div className={cx('hero-cover__description')}>
        <p>의료 AI 연구자<br />소프트웨어 개발자 · GPU 인프라 엔지니어</p>
        <div className={cx('hero-cover__contact')}>
          <a href="https://github.com/bhbh1226/">github.com/bhbh1226</a>
          <a href="https://www.linkedin.com/in/bhbh1226/">linkedin.com/in/bhbh1226</a>
          <a href="mailto:bhbh1226@gmail.com">bhbh1226@gmail.com</a>
        </div>
      </div>

    </div>
  )
}

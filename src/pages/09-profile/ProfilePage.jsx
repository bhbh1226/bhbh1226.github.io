import stacImage from '../../../assets/images/early-work/stac.png'
import bixbyImage from '../../../assets/images/early-work/bixby.png'
import clusterImage from '../../../assets/images/early-work/cluster.png'
import { MedalIcon } from '../../components/AwardBadge.jsx'
import styles from './ProfilePage.module.css'

const cx = (...names) => names.filter(Boolean).map((name) => styles[name]).join(' ')

const awards = [
  { date: '2026.08', title: '졸업 성적우수상', note: '공과대학 수석졸업', page: null },
  { date: '2025.11', title: 'Capstone Design 경진대회 동상', page: '07' },
  { date: '2024.11', title: '공과대학 학술제 은상', page: '05' },
]

const contacts = [
  { label: 'GITHUB', text: 'github.com/bhbh1226', href: 'https://github.com/bhbh1226/' },
  { label: 'LINKEDIN', text: 'linkedin.com/in/bhbh1226', href: 'https://www.linkedin.com/in/bhbh1226/' },
  { label: 'EMAIL', text: 'bhbh1226@gmail.com', href: 'mailto:bhbh1226@gmail.com' },
]

// 초기 작업: 이미지 위 라벨(callout)이 무엇인지 가리키고, 보라색(own)은 본인이 직접 만든 부분에만 쓴다.
// x · y는 이미지 안의 가리키는 지점(%), dir은 라벨이 뻗는 방향. 캠프 라벨은 슈퍼컴퓨터로 계산한 블랙홀 빛 왜곡 시뮬레이션(사용자 확인).
const earlyHighlights = [
  {
    title: '시각장애인용 물건 위치 · 위험 알림',
    award: '2018.11 · STAC 2018 미래산업부문 우수상',
    callouts: [
      { text: '위치 · 위험 감지 모듈', x: 36, y: 76, dir: 'down' },
      { text: '실시간 관리 웹', x: 60, y: 21, dir: 'up', own: true },
    ],
    image: stacImage,
    alt: '센서 모듈과 실시간 관리 웹 화면을 잇는 합성 이미지',
  },
  {
    title: '영화 · 문화 정보 음성 검색',
    award: '2020.01 · Bixby Hackathon 우수상',
    callouts: [
      { text: '음성 질문', x: 15, y: 55, dir: 'down' },
      { text: 'Capsule · 영화 데이터 API', x: 46, y: 35, dir: 'up', own: true },
    ],
    image: bixbyImage,
    alt: '음성 파형이 스마트폰으로 들어가는 합성 이미지',
  },
  {
    title: '국가슈퍼컴퓨팅 청소년 캠프 3위',
    award: '2018.07 · KISTI 원장상',
    callouts: [
      { text: '블랙홀 빛 왜곡 계산', x: 68, y: 52, dir: 'right' },
    ],
    topics: '병렬 처리 · 양자컴퓨팅 · AI',
    image: clusterImage,
    alt: '연산 노드가 함께 블랙홀 주변의 휘는 빛을 계산하는 서버 랙 합성 이미지',
  },
]

function PageRef({ page }) {
  return page ? <span className={cx('pf-ref')}>p.{page}</span> : null
}

export default function ProfilePage() {
  return (
    <div className={cx('pf-case')}>
      <header className="case-header">
        <h2>프로필 · 프로젝트 · 수상</h2>
        <span className="case-category case-category--corner">PROFILE</span>
      </header>

      <section className={cx('pf-brief')}>
        <span>PROFILE</span>
        <strong>박평진<small>Park PyeongJin</small></strong>
        <p><b>학력</b>순천향대학교 컴퓨터공학과 · 공학사 · 2026.08 졸업</p>
      </section>

      <section className={cx('pf-body')}>
        <span className={cx('pf-label')}>EARLY PROJECTS<i>2016 – 2020 · 한국디지털미디어고등학교</i></span>
        <div className={cx('pf-highlights')}>
          {earlyHighlights.map((item) => (
            <article key={item.title}>
              <div className={cx('pf-figure')}>
                <span className={cx('pf-shot')}>
                  <img src={item.image} alt={item.alt} />
                  {item.callouts.map((callout) => (
                    <span key={callout.text} className={cx('pf-callout', `pf-callout--${callout.dir}`, callout.own && 'is-own')} style={{ left: `${callout.x}%`, top: `${callout.y}%` }}>
                      <i aria-hidden="true" /><b>{callout.text}</b>
                    </span>
                  ))}
                </span>
              </div>
              <strong>{item.title}</strong>
              <small className={cx('pf-award')}><MedalIcon accent="#8e78b8" />{item.award}{item.topics && <em>{item.topics}</em>}</small>
            </article>
          ))}
        </div>
        <div className={cx('pf-lower')}>
          <div className={cx('pf-awards')}>
            <span className={cx('pf-label')}>UNIVERSITY AWARDS</span>
            <ol>
              {awards.map((item) => (
                <li key={item.title}><small>{item.date}</small><strong>{item.title}{item.note && <em>{item.note}</em>}</strong><PageRef page={item.page} /></li>
              ))}
            </ol>
          </div>

          <footer className={cx('pf-contact')}>
            <span className={cx('pf-label')}>CONTACT</span>
            {contacts.map((item) => (
              <a key={item.label} href={item.href}><small>{item.label}</small>{item.text}</a>
            ))}
          </footer>
        </div>
      </section>
    </div>
  )
}

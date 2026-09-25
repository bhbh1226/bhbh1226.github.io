import inputDog from '../../../assets/images/time-blending/input-dog.jpg'
import inputCablecar from '../../../assets/images/time-blending/input-cablecar.jpg'
import frame0 from '../../../assets/images/time-blending/frame-0s.jpg'
import frame3 from '../../../assets/images/time-blending/frame-3s.jpg'
import frame6 from '../../../assets/images/time-blending/frame-6s.jpg'
import frame10 from '../../../assets/images/time-blending/frame-10s.jpg'
import styles from './TimeBlendingPage.module.css'

const cx = (...names) => names.filter(Boolean).map((name) => styles[name]).join(' ')

// 입력은 실제 사진(메타데이터 제거 사본). 프레임은 같은 입력으로 다른 생성 모델에서 만든 재현 프레임이다.
// 전시 시스템(Gemini → Kling)으로 다시 생성하면 frames만 교체한다.
const media = {
  photoA: inputDog,
  photoB: inputCablecar,
  frames: [frame0, frame3, frame6, frame10],
}
const frameTimes = ['0s', '3s', '6s', '10s']

// Gemini API가 두 사진과 주제로 실제 생성한 프롬프트를 구간별로 줄였다.
const promptScript = [
  { time: '0–3s', text: 'close-up of the brindle puppy' },
  { time: '3–4s', text: 'dissolve into a glass cable car' },
  { time: '4–7s', text: 'gazing out at the golden seascape' },
  { time: '7–8s', text: 'whip pan back to the puppy' },
  { time: '8–10s', text: 'resting contentedly' },
]

// 직접 만든 범위를 파이프라인과 같은 층으로 나눈다. 모두 코드베이스에서 확인한 항목이다.
const myWork = [
  { layer: 'FRONTEND', stack: 'Vite · HTML/JS · SCSS', items: ['입력 · 로딩 · 결과 화면 UI', '전시 화면 반복 재생 페이지'] },
  { layer: 'SERVER', stack: 'Node.js · Express · sharp', items: ['API 5개 라우트', 'JPEG 정규화 · 완성 영상 저장'] },
  { layer: 'AI 연동', stack: 'Gemini 2.0 Flash · Kling API · JWT', items: ['멀티모달 호출 · 연출 지시문 설계', 'JWT 인증 · 작업 생성 · 4초 폴링', '오류 코드 → 한글 안내'], ai: true },
]

// actor: 해당 단계를 처리하는 곳. ai는 외부 AI API 단계로 강조한다.
const pipeline = [
  { actor: 'BROWSER', label: '입력', detail: '사진 2장 · 장면 주제' },
  { actor: 'SERVER', label: 'JPEG 정규화', detail: 'sharp · base64' },
  { actor: 'GEMINI', label: '프롬프트 생성', detail: '10초 연출 프롬프트', ai: true },
  { actor: 'KLING', label: '영상 작업 생성', detail: 'multi-image2video · task_id', ai: true },
  { actor: 'BROWSER ↔ SERVER', label: '상태 폴링', detail: '4초 간격 · 로딩 화면' },
  { actor: 'SERVER → DISPLAY', label: '저장 · 재생', detail: '전시 화면 반복 재생' },
]

function Slot({ src, label, note, ratio = 'wide' }) {
  return (
    <figure className={cx('tb-slot', `tb-slot--${ratio}`)}>
      {src
        ? <img src={src} alt={label} />
        : <div className={cx('tb-slot__pending')}><span>{label}</span><small>{note}</small></div>}
      {src && ratio === 'photo' && <figcaption>{label}</figcaption>}
    </figure>
  )
}

function Arrow() {
  return <div className={cx('tb-arrow')} aria-hidden="true"><i /></div>
}

export default function TimeBlendingPage() {
  return (
    <div className={cx('tb-case')}>
      <header className="case-header">
        <h2>잔향 — 두 순간의 사진을 잇는 10초 AI 영상</h2>
        <span className={`${cx('tb-category')} case-category case-category--corner`}>AI SERVICE</span>
      </header>

      <section className={cx('tb-brief')}>
        <span>SERVICE</span>
        <strong>서로 다른 시간의 사진 두 장과 보고 싶은 장면을 입력하면<br />두 순간을 하나로 잇는 10초 영상을 만들어 전시 화면에 재생</strong>
        <p><b>문제</b>사진만 영상 모델에 넘기면 원하는 장면 · 전환을 제어하기 어려움<br /><b>해결</b>Gemini가 두 사진과 주제로 10초 연출 프롬프트를 먼저 작성</p>
      </section>

      <section className={cx('tb-stage')} aria-label="입력 사진과 생성 영상">
        <div className={cx('tb-input')}>
          <p>INPUT</p>
          <div className={cx('tb-photos')}>
            <Slot src={media.photoA} label="2017 · 키우던 강아지" note="" ratio="photo" />
            <Slot src={media.photoB} label="2026 · 수상 케이블카" note="" ratio="photo" />
          </div>
          <div className={cx('tb-theme')}><small>보고 싶은 장면</small><strong>“제가 키우던 강아지와 제가 정말 재밌게 다녀온 수상 케이블카를 합치고 싶어요”</strong></div>
        </div>

        <Arrow />

        <div className={cx('tb-prompt')}>
          <p>GEMINI<small>실제 출력</small></p>
          <strong>10초 영상 프롬프트</strong>
          <ol className={cx('tb-script')}>
            {promptScript.map((beat) => <li key={beat.time}><b>{beat.time}</b><span>{beat.text}</span></li>)}
          </ol>
          <p className={cx('tb-script__keep')}>“Preserve the exact appearance of the puppy’s face …”</p>
          <small className={cx('tb-script__note')}>얼굴이 뭉개지면 작품 의미가 사라져 지시문에 넣은 제약</small>
        </div>

        <Arrow />

        <div className={cx('tb-output')}>
          <p>OUTPUT<small>재현 프레임 · 동일 입력, 다른 생성 모델</small></p>
          <div className={cx('tb-frames')}>
            {media.frames.map((src, index) => (
              <div key={frameTimes[index]} className={cx('tb-frame')}>
                <Slot src={src} label={`프레임 ${index + 1}`} note="생성 후 교체" />
                <small>{frameTimes[index]}</small>
              </div>
            ))}
          </div>
          <i className={cx('tb-timeline')} aria-hidden="true" />
        </div>
      </section>

      <section className={cx('tb-pipeline')}>
        <span>PIPELINE</span>
        <ol>
          {pipeline.map((step, index) => (
            <li key={step.label} className={cx(step.ai && 'is-ai')}>
              <em>{step.actor}</em>
              <i aria-hidden="true" />
              <strong><b>{String(index + 1).padStart(2, '0')}</b>{step.label}</strong>
              <small>{step.detail}</small>
            </li>
          ))}
        </ol>
      </section>

      <section className={cx('tb-foot')}>
        <div className={cx('tb-role__head')}>
          <span>MY ROLE</span>
          <strong>웹 · AI 파이프라인<br />전체 개발</strong>
        </div>
        {myWork.map((group) => (
          <div key={group.layer} className={cx('tb-layer', group.ai && 'is-ai')}>
            <p><b>{group.layer}</b><small>{group.stack}</small></p>
            <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        ))}
      </section>
    </div>
  )
}

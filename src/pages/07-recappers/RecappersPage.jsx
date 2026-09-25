import distillationVisual from '../../../assets/images/recappers-knowledge-distillation-v1.png'
import styles from './RecappersPage.module.css'

const cx = (...names) => names.filter(Boolean).map((name) => styles[name]).join(' ')

function LearningWorkspace() {
  return (
    <div className={cx('rec-app')}>
      <div className={cx('rec-app__bar')}>
        <span><i /><i /><i /></span>
        <strong>Recappers · Lecture Workspace</strong>
        <small>INSTRUCTOR REVIEW → STUDENT</small>
      </div>

      <div className={cx('rec-app__body')}>
        <section className={cx('rec-pdf')}>
          <header><div><span>LECTURE MATERIAL</span><strong>제1장 인공지능 소개.pdf</strong></div><small>12 / 48</small></header>
          <div className={cx('rec-slide')}>
            <span>INTRODUCTION TO AI</span>
            <h3>학습하는 시스템의 기본 구조</h3>
            <div className={cx('rec-slide__diagram')}><i>INPUT DATA</i><span>→</span><b>LEARNING</b><span>→</span><i>PREDICTION</i></div>
            <p>입력 데이터에서 패턴을 학습하고 새로운 입력에 대한 결과를 생성합니다.</p>
          </div>
        </section>

        <aside className={cx('rec-assistant')}>
          <nav><b>CHAT</b><span>QUIZ <em>8</em></span></nav>
          <div className={cx('rec-messages')}>
            <p><small>STUDENT</small><span>지도학습과 비지도학습의<br />차이를 설명해줘.</span></p>
            <p className={cx('is-ai')}><small>RECAPPERS</small><span>정답 label의 유무로 두 학습 방식을 구분합니다.</span><em>PDF p.12 · 18:42</em></p>
          </div>
          <div className={cx('rec-chat')}><span>강의 내용에 대해 질문하기</span><b>↗</b></div>
        </aside>

        <section className={cx('rec-transcript')}>
          <header><span>AUDIO &amp; LINKED TRANSCRIPT</span><strong>lecture_01.wav</strong><small>18:42 / 01:07:29</small></header>
          <div className={cx('rec-audio')}><b>▶</b><i><em /></i><time>18:42</time></div>
          <div className={cx('rec-lines')}>
            <p><time>18:36</time><span>학습은 입력 데이터의 특성을 바탕으로 규칙을 찾아가는 과정입니다.</span></p>
            <p className={cx('is-linked')}><time>18:42</time><span>지도학습에서는 정답 label이 함께 제공됩니다.</span><b>PDF p.12</b></p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default function RecappersPage() {
  return (
    <div className={cx('rec-case')}>
      <header className="case-header">
        <h2>강의 특화 Multi-Modal LLM, Recappers</h2>
        <span className="case-category case-category--corner">AI SERVICE</span>
      </header>

      <section className={cx('rec-brief')}>
        <span>PROJECT</span>
        <strong>강의자료와 음성으로 강의별 경량 LLM을 구성해<br />요약·예상 문제·질의응답을 제공하는 학습 보조 시스템</strong>
        <p><b>ITERATION</b>학생의 단순 PDF 질의 도구에서<br />교수자 중심의 강의 특화 시스템으로 재설계</p>
      </section>

      <section className={cx('rec-stage')} aria-label="Knowledge distillation과 Recappers 학습 화면">
        <figure className={cx('rec-visual')}>
          <header><span>KNOWLEDGE DISTILLATION</span></header>
          <div className={cx('rec-visual__image')}>
            <img src={distillationVisual} alt="두 Teacher 모델의 지식을 하나의 경량 Student 모델로 전달하는 합성 이미지" />
          </div>
          <div className={cx('rec-visual__labels')}>
            <p><span>TEACHERS</span><strong>GPT-5<br />Gemini 2.5 Flash</strong></p>
            <i>→</i>
            <p><span>STUDENT</span><strong>Gemma-3n</strong><small>Lecture LoRA</small></p>
          </div>
          <figcaption>Teacher 요약·질의응답 데이터 → 강의별 Gemma-3n LoRA 학습</figcaption>
        </figure>

        <div className={cx('rec-service')}>
          <header><span>LEARNING SERVICE</span></header>
          <LearningWorkspace />
        </div>
      </section>

      <section className={cx('rec-foot')}>
        <div className={cx('rec-result')}>
          <span>RESEARCH RESULT</span>
          <div><p><strong>87%</strong><small>Teacher Q&amp;A 성능 유지</small></p><p><strong>0.91</strong><small>질문 변형 응답 일관성</small></p><p><strong>≈40</strong><small>ROUGE-L</small></p></div>
          <p>12개 강의 데이터셋 · untuned baseline 대비 주요 지표 <b>22–28% 향상</b></p>
        </div>

        <div className={cx('rec-role')}>
          <span>MY ROLE</span>
          <strong>Project Lead</strong>
          <p className={cx('rec-role__focus')}>서비스 구조 · AI 파이프라인 설계</p>
          {/* 본인 작업 3줄 + 팀원 담당 1줄(흐리게) */}
          <div className={cx('rec-role__scope')}>
            <p><b>LEAD</b><span>팀 운영 · 역할 및 개발 과제 분배</span></p>
            <p><b>AI</b><span>강의자료 처리 · Teacher 데이터 생성 · Gemma-3n LoRA</span></p>
            <p><b>PAPER</b><span>실험 · 논문 작성</span></p>
            <p className={cx('is-team')}><b>TEAM</b><span>팀원 담당: Web Frontend / Backend · STT</span></p>
          </div>
        </div>

        <div className={cx('rec-paper')}>
          <span>PUBLICATION</span>
          <p><small><b>Park, P.</b>, Kim, B., Lee, S., Hong, Y., &amp; Cho, Y.</small><cite>Lecture-Tailored Learning Assistance via Multi-Modal LLM Distillation from Lecture Materials.</cite></p>
          <strong>제1저자 · KICSP 2025 추계학술대회<br /><b>우수발표논문상</b></strong>
        </div>
      </section>
    </div>
  )
}

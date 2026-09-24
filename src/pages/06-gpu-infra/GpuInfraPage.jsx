import clusterVisual from '../../../assets/images/gpu-cluster-translucent-v3.png'
import styles from './GpuInfraPage.module.css'

const cx = (...names) => names.filter(Boolean).map((name) => styles[name]).join(' ')

// x: 이미지 속 서버 중심의 가로 위치(%). 이미지와 컨테이너 너비가 같아 그대로 사용한다.
const gpuNodes = [
  { gpu: 'RTX A6000', count: 1, x: 17 },
  { gpu: 'RTX Pro 6000', count: 2, x: 41 },
  { gpu: 'L40', count: 3, x: 83, remote: true },
]

const foundations = [
  { label: 'AUTH', title: 'FreeIPA', detail: '계정 10개 이식' },
  { label: 'NETWORK', title: 'Local + Tailscale', detail: '원격 노드 연결' },
  { label: 'STORAGE', title: 'NFS 중앙 홈', detail: '로컬 노드 통합' },
  { label: 'BACKUP', title: 'Borg 일일 백업', detail: '복원 검증' },
  { label: 'DOCS', title: 'Git 런북', detail: 'CHANGELOG 이력' },
]

const incidents = [
  { title: '제어 노드 주소 충돌', cause: '학교망 ARP 충돌', fix: '주소 재배치', Figure: AddressFigure },
  { title: '컨테이너 CUDA 소실', cause: 'GPU 권한 회수', fix: 'NVIDIA CDI 전환', Figure: CdiFigure },
  { title: '백업이 매번 전체 복사', cause: '실행마다 약 273GB', fix: 'Borg dedup 전환', Figure: BackupFigure },
]

// 문제 해결 micro-diagram: 위 줄은 문제 상태(흐린 점선), 아래 줄은 조치 후 상태(초록).
// 좌표계는 180 × 42, 두 줄의 중심선은 y = 9 / 33.
function AddressFigure() {
  return (
    <svg viewBox="0 0 180 42" aria-label="다른 장비와 같은 주소를 쓰던 제어 노드를 새 주소로 옮김">
      <g className={cx('fig-box')}><rect x="0.5" y="2" width="42" height="14" /><rect x="137.5" y="2" width="42" height="14" /><rect x="0.5" y="26" width="42" height="14" /></g>
      <text className={cx('fig-text')} x="21.5" y="12.2">제어 노드</text>
      <text className={cx('fig-text')} x="158.5" y="12.2">다른 장비</text>
      <text className={cx('fig-text')} x="21.5" y="36.2">제어 노드</text>
      <path className={cx('fig-bad')} d="M43 9H64 M116 9H137" />
      <rect className={cx('fig-pill-bad')} x="64" y="2" width="52" height="14" rx="7" /><text className={cx('fig-text')} x="90" y="12.2">같은 주소</text>
      <path className={cx('fig-good')} d="M43 33H64" />
      <rect className={cx('fig-pill-good')} x="64" y="26" width="52" height="14" rx="7" /><text className={cx('fig-text', 'fig-text--good')} x="90" y="36.2">새 주소</text>
      <text className={cx('fig-note')} x="122" y="36.2">설정 정리</text>
    </svg>
  )
}

function CdiFigure() {
  return (
    <svg viewBox="0 0 180 42" aria-label="reload 때 끊기던 컨테이너와 GPU 연결을 CDI로 고정">
      <g className={cx('fig-box')}><rect x="0.5" y="2" width="46" height="14" /><rect x="137.5" y="2" width="42" height="14" /><rect x="0.5" y="26" width="46" height="14" /><rect x="137.5" y="26" width="42" height="14" /></g>
      <text className={cx('fig-text')} x="23.5" y="12.2">컨테이너</text><text className={cx('fig-text')} x="158.5" y="12.2">GPU</text>
      <text className={cx('fig-text')} x="23.5" y="36.2">컨테이너</text><text className={cx('fig-text')} x="158.5" y="36.2">GPU</text>
      <path className={cx('fig-bad')} d="M47 9H62 M118 9H137" />
      <text className={cx('fig-mark')} x="90" y="12.2">✕ reload</text>
      <path className={cx('fig-good')} d="M47 33H72 M108 33H137" />
      <rect className={cx('fig-pill-good')} x="72" y="26" width="36" height="14" rx="7" /><text className={cx('fig-text', 'fig-text--good')} x="90" y="36.2">CDI</text>
    </svg>
  )
}

function BackupFigure() {
  const runs = [0, 1, 2]
  return (
    <svg viewBox="0 0 180 42" aria-label="rsync는 실행마다 전체를 복사, Borg는 첫 실행 뒤 변경분만 전송">
      <text className={cx('fig-note')} x="0" y="12.2">rsync</text>
      {runs.map((run) => <rect key={`r${run}`} className={cx('fig-bar-bad')} x={38 + run * 20} y="2" width="14" height="14" />)}
      <text className={cx('fig-note')} x="104" y="12.2">매번 전체</text>
      <text className={cx('fig-note', 'fig-note--good')} x="0" y="36.2">Borg</text>
      <rect className={cx('fig-bar-good')} x="38" y="26" width="14" height="14" />
      {runs.slice(1).map((run) => <rect key={`b${run}`} className={cx('fig-bar-good')} x={38 + run * 20} y="37" width="14" height="3" />)}
      <text className={cx('fig-note')} x="104" y="36.2">변경분만</text>
    </svg>
  )
}

function GpuChips({ count }) {
  return (
    <span className={cx('infra-chips')}>
      {Array.from({ length: 3 }, (_, index) => <i key={index} className={cx(index < count && 'is-on')} />)}
    </span>
  )
}

function AccessFlow() {
  return (
    <div className={cx('infra-access')}>
      <div className={cx('infra-step')}>
        <span>USERS</span>
        <strong>연구원 · 관리자</strong>
        <small>FreeIPA 계정 하나로 모든 노드 접속</small>
      </div>
      <i className={cx('infra-down')} aria-hidden="true" />
      <div className={cx('infra-step')}>
        <span>ENTRY</span>
        <strong>JupyterHub · SSH</strong>
        <small>GPU 종류 · 개수 · 시간을 골라 Slurm 잡으로 실행</small>
      </div>
      <i className={cx('infra-down')} aria-hidden="true" />
      <div className={cx('infra-step', 'infra-step--slurm')}>
        <span>SCHEDULER</span>
        <strong>Slurm<em>잡을 GPU 노드에 배정</em></strong>
        <small>GPU 타입별 스케줄링 · cgroup 자원 격리</small>
      </div>
    </div>
  )
}

// Slurm → 서버 위 LOCAL / REMOTE 선으로 이어지는 배정 경로. 좌표는 hero 영역 기준 mm.
function DispatchLine() {
  return (
    <svg className={cx('infra-dispatch')} viewBox="0 0 267 80" preserveAspectRatio="none" aria-hidden="true">
      <path d="M41 64.8H82V2.5H91.6" />
      <circle cx="41" cy="64.8" r="0.9" />
    </svg>
  )
}

function ClusterVisual() {
  return (
    <figure className={cx('infra-visual')}>
      <img src={clusterVisual} alt="로컬 GPU 서버 2대와 원격 GPU 서버 1대가 연결된 클러스터 합성 이미지" />
      <div className={cx('infra-group')} style={{ left: '2%', width: '54%' }}><span>LOCAL</span></div>
      <i className={cx('infra-bridge')} style={{ left: '56%', width: '14%' }} />
      <div className={cx('infra-group', 'infra-group--remote')} style={{ left: '70%', width: '28%' }}><span>REMOTE</span></div>
      {gpuNodes.map((node) => (
        <div key={node.gpu} className={cx('infra-label')} style={{ left: `${node.x}%` }}>
          <strong>{node.gpu}</strong>
          <p><b>× {node.count}</b><GpuChips count={node.count} /></p>
        </div>
      ))}
      <span className={cx('infra-link')}>TAILSCALE</span>
      <figcaption>SYNTHETIC VISUAL · 3 GPU NODES · 6 GPUs</figcaption>
    </figure>
  )
}

export default function GpuInfraPage() {
  return (
    <div className={cx('infra-case')}>
      <header className="case-header">
        <h2>분산 GPU 서버를 공용 Slurm 클러스터로 통합</h2>
        <span className={`${cx('infra-category')} case-category case-category--corner`}>GPU INFRA</span>
      </header>

      <section className={cx('infra-brief')}>
        <span>INFRASTRUCTURE</span>
        <strong>서버별 로컬 계정과 직접 GPU 점유 환경을<br />중앙 인증 · GPU 타입별 스케줄링 · JupyterHub 셀프서비스로 전환</strong>
        <p><b>이전</b>서버마다 다른 계정 · UID, 채팅으로 GPU 사용 조율<br /><b>규모</b>관리 노드 2 · GPU 노드 3 · GPU 6장</p>
      </section>

      <section className={cx('infra-hero')} aria-label="GPU 클러스터 구조">
        <AccessFlow />
        <span aria-hidden="true" />
        <ClusterVisual />
        <DispatchLine />
      </section>

      <section className={cx('infra-base')}>
        {foundations.map((item) => (
          <p key={item.label}><span>{item.label}</span><strong>{item.title}</strong><small>{item.detail}</small></p>
        ))}
      </section>

      <section className={cx('infra-foot')}>
        <div className={cx('infra-incidents')}>
          <span>TROUBLESHOOTING</span>
          <ol>
            {incidents.map((item, index) => (
              <li key={item.title}>
                <b>{String(index + 1).padStart(2, '0')}</b>
                <strong>{item.title}</strong>
                <item.Figure />
                <p>{item.cause} <em>→</em> {item.fix}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className={cx('infra-scope')}>
          <span>MY ROLE</span>
          <p className={cx('infra-scope__role')}><strong>구축 총괄</strong><small>연구실 랩장으로 진행</small></p>
          <ol className={cx('infra-scope__chain')}>
            <li><small>2026.07</small><b>설계 · 구축</b></li>
            <li><small>이후 현재까지</small><b>운영 · 장애 대응</b></li>
            <li><small>후임 담당자</small><b>인수인계</b></li>
          </ol>
        </div>
      </section>
    </div>
  )
}

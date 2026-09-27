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
  { label: 'NETWORK', title: 'Local + Tailscale', detail: '원격 노드 연결' },
  { label: 'BACKUP', title: 'Borg 홈 일일 백업', detail: '암호화 · dedup · 복원 검증' },
  { label: 'DOCS', title: 'Git 런북', detail: 'CHANGELOG로 변경 이력 관리' },
]

const incidents = [
  { title: '제어 노드 주소 충돌', cause: '학교망 ARP 충돌', fix: '주소 재배치', Figure: AddressFigure },
  { title: '컨테이너 CUDA 소실', cause: 'GPU 권한 회수', fix: 'NVIDIA CDI 전환', Figure: CdiFigure },
  { title: '백업이 매번 전체 복사', cause: '실행마다 약 273GB', fix: 'Borg dedup 전환', Figure: BackupFigure },
]

// 문제 해결 micro-diagram: 위 줄은 문제 상태(흐린 점선), 아래 줄은 조치 후 상태(초록).
// 좌표계는 200 × 52, 두 줄의 중심선은 y = 12 / 40. 상자는 높이 18에 글자 좌우 여백을 두고,
// 선은 도형 앞뒤 3~4씩 띄워 도형과 선이 붙지 않게 한다. 글자 11px 기준으로 상자 폭을 잡았다.
function AddressFigure() {
  return (
    <svg viewBox="0 0 200 52" aria-label="다른 장비와 같은 주소를 쓰던 제어 노드를 새 주소로 옮김">
      <g className={cx('fig-box')}><rect x="0.5" y="3" width="54" height="18" rx="1.5" /><rect x="145.5" y="3" width="54" height="18" rx="1.5" /><rect x="0.5" y="31" width="54" height="18" rx="1.5" /></g>
      <text className={cx('fig-text')} x="27.5" y="15.8">제어 노드</text>
      <text className={cx('fig-text')} x="172.5" y="15.8">다른 장비</text>
      <text className={cx('fig-text')} x="27.5" y="43.8">제어 노드</text>
      <path className={cx('fig-bad')} d="M58 12H70 M130 12H142" />
      <rect className={cx('fig-pill-bad')} x="73" y="3" width="54" height="18" rx="9" /><text className={cx('fig-text')} x="100" y="15.8">같은 주소</text>
      <path className={cx('fig-good')} d="M58 40H70" />
      <rect className={cx('fig-pill-good')} x="73" y="31" width="54" height="18" rx="9" /><text className={cx('fig-text', 'fig-text--good')} x="100" y="43.8">새 주소</text>
      <text className={cx('fig-note')} x="136" y="43.8">설정 정리</text>
    </svg>
  )
}

function CdiFigure() {
  return (
    <svg viewBox="0 0 200 52" aria-label="reload 때 끊기던 컨테이너와 GPU 연결을 CDI로 고정">
      <g className={cx('fig-box')}><rect x="0.5" y="3" width="57" height="18" rx="1.5" /><rect x="153.5" y="3" width="46" height="18" rx="1.5" /><rect x="0.5" y="31" width="57" height="18" rx="1.5" /><rect x="153.5" y="31" width="46" height="18" rx="1.5" /></g>
      <text className={cx('fig-text')} x="29" y="15.8">컨테이너</text><text className={cx('fig-text')} x="176.5" y="15.8">GPU</text>
      <text className={cx('fig-text')} x="29" y="43.8">컨테이너</text><text className={cx('fig-text')} x="176.5" y="43.8">GPU</text>
      <path className={cx('fig-bad')} d="M61 12H74 M130 12H149" />
      <text className={cx('fig-mark')} x="102" y="15.3">✕ reload</text>
      <path className={cx('fig-good')} d="M61 40H81 M123 40H149" />
      <rect className={cx('fig-pill-good')} x="84" y="31" width="36" height="18" rx="9" /><text className={cx('fig-text', 'fig-text--good')} x="102" y="43.8">CDI</text>
    </svg>
  )
}

function BackupFigure() {
  const runs = [0, 1, 2]
  return (
    <svg viewBox="0 0 200 52" aria-label="rsync는 실행마다 전체를 복사, Borg는 첫 실행 뒤 변경분만 전송">
      <text className={cx('fig-note')} x="0" y="15.8">rsync</text>
      {runs.map((run) => <rect key={`r${run}`} className={cx('fig-bar-bad')} x={46 + run * 24} y="4" width="16" height="16" rx="1" />)}
      <text className={cx('fig-note')} x="128" y="15.8">매번 전체</text>
      <text className={cx('fig-note', 'fig-note--good')} x="0" y="43.8">Borg</text>
      <rect className={cx('fig-bar-good')} x="46" y="32" width="16" height="16" rx="1" />
      {runs.slice(1).map((run) => <rect key={`b${run}`} className={cx('fig-bar-good')} x={46 + run * 24} y="44" width="16" height="4" rx="1" />)}
      <text className={cx('fig-note')} x="128" y="43.8">변경분만</text>
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

// 접근 흐름의 각 단계를 통합 전(before) → 통합 후로 보여준다. 통합 전 상태는 저장소 기록과 사용자 확인 기준.
const accessSteps = [
  { label: 'AUTH', before: '서버마다 로컬 계정 · 다른 UID', after: 'FreeIPA 계정 하나로 모든 노드', detail: '계정 10개 이식 · 기존 UID 유지' },
  { label: 'STORAGE', before: '서버마다 저장소가 따로 격리', after: 'NFS 중앙 홈 · 데이터', detail: '어느 로컬 노드에서도 같은 코드 · 데이터 사용 (원격 노드 제외)' },
  { label: 'ACCESS', before: 'SSH로 GPU 직접 점유', after: 'JupyterHub · SSH', detail: 'GPU 종류 · 개수 · 시간을 골라 Slurm 잡으로 실행' },
  { label: 'SCHEDULER', before: '채팅으로 GPU 사용 조율', after: 'Slurm', detail: 'GPU 타입별 GRES · cgroup 자원 격리' },
]

function AccessFlow() {
  return (
    <div className={cx('infra-access')}>
      {accessSteps.map((step) => (
        <div key={step.label} className={cx('infra-step')}>
          <span>{step.label}</span>
          {step.before && <p className={cx('infra-before')}><b>이전</b>{step.before}</p>}
          <strong>{step.after}</strong>
          <small>{step.detail}</small>
        </div>
      ))}
    </div>
  )
}

// 네 묶음의 아래 경계선 → 초록 버스 → 서버 위 LOCAL 선. 좌표는 hero 영역(267 × 88mm) 기준 mm이며,
// 각 묶음(.infra-step)의 아래 끝(y)을 측정해 넣었다. 묶음 내용이나 간격을 바꾸면 다시 측정한다.
const BUS_X = 82
const busTaps = [22.2, 42.2, 62.2, 82.2]

function DispatchLine() {
  const bottom = busTaps[busTaps.length - 1]
  return (
    <svg className={cx('infra-dispatch')} viewBox="0 0 267 88" preserveAspectRatio="none" aria-hidden="true">
      <path d={`M${BUS_X} ${bottom}V2.5H91.6`} />
      {busTaps.map((y) => (
        <g key={y}>
          <path className={cx('infra-tap')} d={`M0 ${y}H${BUS_X}`} />
          <circle cx={BUS_X} cy={y} r="0.7" />
        </g>
      ))}
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
        <h2>분산 GPU 서버를 공용 연구 인프라로 통합</h2>
        <span className={`${cx('infra-category')} case-category case-category--corner`}>GPU INFRA</span>
      </header>

      <section className={cx('infra-brief')}>
        <span>INFRASTRUCTURE</span>
        <strong>서버마다 따로 쓰던 계정 · 저장소 · GPU를<br />중앙 인증 · 공유 스토리지 · Slurm 스케줄링 · JupyterHub로 통합</strong>
        <p><b>역할</b><em>구축 총괄</em> · 연구실 랩장<br /><b>기간</b>2026.07 구축 → 운영 · 장애 대응 → 후임 인수인계<br /><b>규모</b>관리 노드 2 · GPU 노드 3 · GPU 6장</p>
      </section>

      <section className={cx('infra-hero')} aria-label="GPU 클러스터 구조">
        <AccessFlow />
        <span aria-hidden="true" />
        <ClusterVisual />
        <DispatchLine />
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
          <span>FOUNDATION</span>
          <ol className={cx('infra-base')}>
            {foundations.map((item) => (
              <li key={item.label}><span>{item.label}</span><p><strong>{item.title}</strong><small>{item.detail}</small></p></li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  )
}

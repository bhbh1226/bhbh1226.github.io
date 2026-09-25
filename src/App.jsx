import PageShell from './components/PageShell.jsx'
import CoverPage from './pages/01-cover/CoverPage.jsx'
import AneurysmPage from './pages/02-aneurysm/AneurysmPage.jsx'
import DigitalPhenotypingPage from './pages/03-digital-phenotyping/DigitalPhenotypingPage.jsx'
import VentilationPage from './pages/04-ventilation/VentilationPage.jsx'
import PathologyXaiPage from './pages/05-pathology-xai/PathologyXaiPage.jsx'
import GpuInfraPage from './pages/06-gpu-infra/GpuInfraPage.jsx'
import TimeBlendingPage from './pages/08-time-blending/TimeBlendingPage.jsx'
import ProjectSkeletonPage from './pages/project-skeleton/ProjectSkeletonPage.jsx'

const pagesBefore = [
  {
    label: 'Recappers',
    title: 'Recappers',
    focus: 'Multi-Modal pipeline과 실제 서비스 화면 중 중심 요소를 결정합니다.',
    placeholder: 'Lecture context pipeline / service UI',
  },
]

const pagesAfter = [
  {
    label: 'Profile & Other Work',
    title: 'Profile, Awards & Other Work',
    focus: '학력·연구 경험·수상과 Bixby·STAC을 간결하게 정리합니다.',
    placeholder: 'Profile / experience / awards / selected projects / contact',
  },
]

export default function App() {
  return (
    <main className="portfolio" aria-label="Park PyeongJin AI Portfolio">
      <PageShell pageNumber={1} section="Profile">
        <CoverPage />
      </PageShell>

      <PageShell pageNumber={2} section="Seoul National University Hospital · Medical Vision Lab" tone="dark">
        <AneurysmPage />
      </PageShell>

      <PageShell pageNumber={3} section="Seoul National University Hospital · Medical Vision Lab" tone="dark">
        <DigitalPhenotypingPage />
      </PageShell>

      <PageShell pageNumber={4} section="Asan Medical Center · MI2RL" tone="dark">
        <VentilationPage />
      </PageShell>

      <PageShell pageNumber={5} section="Soonchunhyang University · Medical AI Lab · Undergraduate Research" tone="dark">
        <PathologyXaiPage />
      </PageShell>

      <PageShell pageNumber={6} section="Soonchunhyang University · Efficient Computing Lab · Undergraduate Research" tone="dark">
        <GpuInfraPage />
      </PageShell>

      {pagesBefore.map((page, index) => (
        <PageShell
          key={page.label}
          pageNumber={index + 7}
          section={page.label}
        >
          <ProjectSkeletonPage {...page} />
        </PageShell>
      ))}

      <PageShell pageNumber={8} section="Soonchunhyang University · Convergence Design Exhibition · Web & AI Development" tone="dark">
        <TimeBlendingPage />
      </PageShell>

      {pagesAfter.map((page, index) => (
        <PageShell
          key={page.label}
          pageNumber={index + 9}
          section={page.label}
        >
          <ProjectSkeletonPage {...page} />
        </PageShell>
      ))}
    </main>
  )
}

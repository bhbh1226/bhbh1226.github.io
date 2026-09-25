import PageShell from './components/PageShell.jsx'
import CoverPage from './pages/01-cover/CoverPage.jsx'
import AneurysmPage from './pages/02-aneurysm/AneurysmPage.jsx'
import DigitalPhenotypingPage from './pages/03-digital-phenotyping/DigitalPhenotypingPage.jsx'
import VentilationPage from './pages/04-ventilation/VentilationPage.jsx'
import PathologyXaiPage from './pages/05-pathology-xai/PathologyXaiPage.jsx'
import GpuInfraPage from './pages/06-gpu-infra/GpuInfraPage.jsx'
import RecappersPage from './pages/07-recappers/RecappersPage.jsx'
import TimeBlendingPage from './pages/08-time-blending/TimeBlendingPage.jsx'
import ProfilePage from './pages/09-profile/ProfilePage.jsx'

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

      <PageShell pageNumber={7} section="Soonchunhyang University · Computer Engineering · Capstone Design" tone="dark">
        <RecappersPage />
      </PageShell>

      <PageShell pageNumber={8} section="Soonchunhyang University · Convergence Design Exhibition · Web & AI Development" tone="dark">
        <TimeBlendingPage />
      </PageShell>

      <PageShell pageNumber={9} section="Profile · Projects · Awards" tone="dark">
        <ProfilePage />
      </PageShell>
    </main>
  )
}

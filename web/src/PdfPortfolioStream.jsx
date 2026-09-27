import { useEffect, useRef, useState } from 'react'
import PageShell from '../../src/components/PageShell.jsx'
import AneurysmPage from '../../src/pages/02-aneurysm/AneurysmPage.jsx'
import DigitalPhenotypingPage from '../../src/pages/03-digital-phenotyping/DigitalPhenotypingPage.jsx'
import VentilationPage from '../../src/pages/04-ventilation/VentilationPage.jsx'
import PathologyXaiPage from '../../src/pages/05-pathology-xai/PathologyXaiPage.jsx'
import GpuInfraPage from '../../src/pages/06-gpu-infra/GpuInfraPage.jsx'
import RecappersPage from '../../src/pages/07-recappers/RecappersPage.jsx'
import TimeBlendingPage from '../../src/pages/08-time-blending/TimeBlendingPage.jsx'
import ProfilePage from '../../src/pages/09-profile/ProfilePage.jsx'
import '../../styles/global.css'

const PAGE_WIDTH = 1122.52
const PAGE_HEIGHT = 793.7

const pages = [
  [2, 'Seoul National University Hospital · Medical Vision Lab', AneurysmPage],
  [3, 'Seoul National University Hospital · Medical Vision Lab', DigitalPhenotypingPage],
  [4, 'Asan Medical Center · MI2RL', VentilationPage],
  [5, 'Soonchunhyang University · Medical AI Lab · Undergraduate Research', PathologyXaiPage],
  [6, 'Soonchunhyang University · Efficient Computing Lab · Undergraduate Research', GpuInfraPage],
  [7, 'Soonchunhyang University · Computer Engineering · Capstone Design', RecappersPage],
  [8, 'Soonchunhyang University · Convergence Design Exhibition · Web & AI Development', TimeBlendingPage],
  [9, 'Profile · Projects · Awards', ProfilePage],
]

export default function PdfPortfolioStream() {
  const containerRef = useRef(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return undefined

    const updateScale = () => setScale(Math.min(1, container.clientWidth / PAGE_WIDTH))
    updateScale()

    const observer = new ResizeObserver(updateScale)
    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="pdf-stream" id="portfolio-pages" ref={containerRef} aria-label="프로젝트 포트폴리오">
      {pages.map(([pageNumber, section, PageComponent]) => (
        <div
          className="pdf-frame"
          key={pageNumber}
          style={{ height: `${PAGE_HEIGHT * scale}px` }}
        >
          <div className="pdf-frame__page" style={{ transform: `scale(${scale})` }}>
            <PageShell pageNumber={pageNumber} section={section} tone="dark">
              <PageComponent />
            </PageShell>
          </div>
        </div>
      ))}
    </section>
  )
}

import '../styles/Home.scss'

const Home = () => {
  return (
    <section id="home-first-section" className="full-screen">
      <header>
        <ul>
          <li>Projects</li>
          <li>Visitors' Book</li>
          <li>Activitys</li>
          <li>Pentakill</li>
          <li>Contact</li>
        </ul>
      </header>
      <div className="content">
        <h1>박평진</h1>
        <h1>Software Engineer</h1>
        <p>Social Problem troubleshooter</p>
      </div>
      <div className="circle circle-1" />
      <div className="circle circle-2" />
    </section>
  )
}

export default Home
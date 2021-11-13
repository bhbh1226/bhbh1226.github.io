import { motion } from "framer-motion"
import { createRef, useContext, useEffect, useState } from "react"
import { getParallax, HomeContext, max_screen_size, screen_size } from "../pages/Home"
import lunaLogo from '../images/logo_line.png'
import '../styles/HomeUI.scss'

const NavigationButton = ({ children, onClick, color }) => {
  return (
    <li>
      <button style={{ color }} onClick={() => { onClick() }}>
        {children}
      </button>
    </li>
  )
}

const HomeUI = () => {
  const { scrollX, setScrollX } = useContext(HomeContext)
  const [indicatorLeft, setIndicatorLeft] = useState(0)
  const [indicatorWidth, setIndicatorWidth] = useState(7.4)
  const [uiColor, setUiColor] = useState('rgb(255, 255, 255)')
  const [namecardOpacity, setNamecardOpacity] = useState(0)

  const HomeUIRef = createRef()

  useEffect(() => {
    if (HomeUIRef.current !== null) {
      HomeUIRef.current.addEventListener('wheel', (event) => {
        setScrollX(l => Math.max(Math.min(l + event.deltaY, max_screen_size), 0))

        event.preventDefault()
      })
    }
  }, [])

  useEffect(() => {
    const percentInput = [0, screen_size * (2 - 1), screen_size * (3 - 1), screen_size * (4 - 1), screen_size * (5 - 1), max_screen_size]
    const percentOutput = [0, 16, 36, 60.5, 80.7, 100]
    const emInput = [0, max_screen_size]
    const emOutput = [0, 7.4]
    const widthOutput = [6.4, 7.4, 9.8, 7.4, 7.4, 7.4]

    setIndicatorLeft(
      `calc(${getParallax(scrollX, percentInput, percentOutput)}% - ${getParallax(scrollX, emInput, emOutput)}em)`
    )
    setIndicatorWidth(
      getParallax(scrollX, percentInput, widthOutput) + 'em'
    )
    setUiColor(`rgb(${getParallax(scrollX, [max_screen_size - screen_size, max_screen_size], [255, 0])}, ${getParallax(scrollX, [max_screen_size - screen_size, max_screen_size], [255, 0])}, ${getParallax(scrollX, [max_screen_size - screen_size, max_screen_size], [255, 0])})`)
    setNamecardOpacity(getParallax(scrollX, [max_screen_size - screen_size, max_screen_size], [0, 1]))

  }, [scrollX])

  return (
    <div id="home-ui" ref={HomeUIRef}>
      <ul>
        <NavigationButton color={uiColor} onClick={() => { setScrollX(0) }}>Home</NavigationButton>
        <NavigationButton color={uiColor} onClick={() => { setScrollX(screen_size * (2 - 1)) }}>Activitys</NavigationButton>
        <NavigationButton color={uiColor} onClick={() => { setScrollX(screen_size * (3 - 1)) }}>Visitor's Book</NavigationButton>
        <NavigationButton color={uiColor} onClick={() => { setScrollX(screen_size * (4 - 1)) }}>PentaKill</NavigationButton>
        <NavigationButton color={uiColor} onClick={() => { setScrollX(screen_size * (5 - 1)) }}>Christmas</NavigationButton>
        <NavigationButton color={uiColor} onClick={() => { setScrollX(max_screen_size) }}>Contact</NavigationButton>
        <motion.div className="indicator" style={{ backgroundColor: uiColor }} animate={{ left: indicatorLeft, width: indicatorWidth }} />
      </ul>
      <div className="namecard-container" style={{ opacity: namecardOpacity }}>
        <div className="namecard-content namecard-lefttop">
          <h1>박평진</h1>
          <h2>Software Engineer</h2>
          <div className="br-line" />
        </div>
        <div className="namecard-content namecard-leftbottom">
          <p>Frontend | Backend | React.js | Node.js | Express.js</p>
          <p>UWP | WPF | WinForm | Unity | Android | Electron | Flutter</p>
          <p>C | C++ | C# | JAVA | JS | Python | GO | GML</p>
        </div>
        <div className="namecard-content namecard-righttop">
          <img src={lunaLogo} />
        </div>
        <div className="namecard-content namecard-rightbottom">
          <p>T +82 10 6274 6790</p>
          <p>M bhbh1226@naver.com</p>
          <p><b>지지 않는 달, LUNA</b></p>
        </div>
      </div>
    </div>
  )
}

export default HomeUI
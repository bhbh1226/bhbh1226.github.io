import { motion } from "framer-motion"
import { useContext, useEffect, useState } from "react"
import { getParallax, HomeContext, max_screen_size, screen_size } from "../pages/Home"
import '../styles/HomeUI.scss'

const NavigationButton = ({ children, onClick }) => {
  return (
    <li>
      <button onClick={() => { console.log('asdf'); onClick() }}>
        {children}
      </button>
    </li>
  )
}

const HomeUI = () => {
  const { scrollX, setScrollX } = useContext(HomeContext)
  const [ indicatorLeft, setIndicatorLeft ] = useState(0)

  useEffect(() => {
    const percentInput = [0, screen_size * (2 - 1), screen_size * (3 - 1), screen_size * (4 - 1), screen_size * (5 - 1), max_screen_size]
    const percentOutput = [0, 18, 40, 61.5, 81.2, 100]
    const emInput = [0, max_screen_size]
    const emOutput = [0, 7.4]

    setIndicatorLeft(
      `calc(${getParallax(scrollX, percentInput, percentOutput)}% - ${getParallax(scrollX, emInput, emOutput)}em)`
    )
  }, [scrollX])

  return (
    <div id="home-ui">
      <ul>
        <NavigationButton onClick={() => { setScrollX(0) }}>Projects</NavigationButton>
        <NavigationButton onClick={() => { setScrollX(screen_size * (2 - 1)) }}>Activitys</NavigationButton>
        <NavigationButton onClick={() => { setScrollX(screen_size * (3 - 1)) }}>Visitor's Book</NavigationButton>
        <NavigationButton onClick={() => { setScrollX(screen_size * (4 - 1)) }}>PentaKill</NavigationButton>
        <NavigationButton onClick={() => { setScrollX(screen_size * (5 - 1)) }}>Christmas</NavigationButton>
        <NavigationButton onClick={() => { setScrollX(max_screen_size) }}>Contact</NavigationButton>
        <motion.div className="indicator" animate={{ left: indicatorLeft }} />
      </ul>
    </div>
  )
}

export default HomeUI
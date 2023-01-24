import { useState, createContext, useEffect, createRef } from 'react'
import Background from './Background'
import HomeUI from './HomeUI'
import Content from './Content'
import { transition, backgroundColors, colorsMaker } from './Background/BackgroundColorManager'
import '../../styles/Home/Home.scss'
import MobileHider from '../component/MobileHider'

const HomeContext = createContext()

const screen_count = 6
const screen_size = window.innerWidth
const max_screen_size = screen_size * (screen_count - 1)
const max_star_light_size = max_screen_size / 14
const max_star_dark_size = max_screen_size / 10
const max_line_light_size = max_screen_size / 12
const max_line_dark_size = max_screen_size / 8

const getParallax = (value, input, output) => {
  let result = 0;
  let end = false

  input.map((item, index) => {
    const a = input[index]
    const b = input[index - 1]
    const c = output[index]
    const d = output[index - 1]

    if (value <= item && !end) {
      if (index === 0) result = output[0]
      else result = ((b * c) - (value * c) + (value * d) - (a * d)) / (b - a)

      end = true
    }

    return end
  })

  return result
}

const Home = () => {
  const [scrollX, setScrollX] = useState(0)
  const [themeColors, setThemeColors] = useState(colorsMaker(backgroundColors[0]))

  const HomeRef = createRef()

  useEffect(() => {
    if (HomeRef.current !== null) {
      HomeRef.current.addEventListener('wheel', (event) => {
        setScrollX(l => Math.max(Math.min(l + event.deltaY, max_screen_size), 0))

        event.preventDefault()
      })
    }
  }, [])

  useEffect(() => {
    setThemeColors(transition(scrollX))
  }, [scrollX])

  return (
    <div id="home" ref={HomeRef}>
      <HomeContext.Provider value={{ scrollX, setScrollX, themeColors }}>
        <Background />
        <HomeUI />
        <Content />
        <MobileHider />
      </HomeContext.Provider>
    </div>
  )
}

export {
  screen_count, screen_size, max_screen_size,
  max_star_light_size, max_star_dark_size, max_line_light_size, max_line_dark_size,
  getParallax, 
  HomeContext 
}
export default Home
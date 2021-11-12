import { useState, createContext, useEffect } from 'react'
import Background from '../components/Background'
import HomeUI from '../components/HomeUI'
import { transition, backgroundColors, colorsMaker } from '../components/BackgroundColorManager'
import '../styles/Home.scss'

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

  useEffect(() => {
    setThemeColors(transition(scrollX))
  }, [scrollX])
  // const themeColors = colorsMaker(backgroundColors[4])

  return (
    <div id="home">
      <HomeContext.Provider value={{ scrollX, setScrollX, themeColors }}>
        <Background />
        <HomeUI />
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
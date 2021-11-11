import { useState, createContext, useEffect } from 'react'
import Background from '../components/Background'
import '../styles/Home.scss'

const HomeContext = createContext()

const Home = () => {
  const [scrollX, setScrollX] = useState(0)

  useEffect(() => {
    console.log(scrollX)
  }, [scrollX])

  return (
    <div id="home">
      <HomeContext.Provider value={{ scrollX, setScrollX }}>
        <Background />
      </HomeContext.Provider>
    </div>
  )
}

export { HomeContext }
export default Home
import { createRef, useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/Background.scss'
import { screen_size, max_screen_size, getParallax, HomeContext, max_star_light_size, max_star_dark_size, max_line_light_size, max_line_dark_size, } from '../pages/Home'

const Star = ({ type }) => {
  const [left, setLeft] = useState(Math.random() * 100 + '%')
  const [top] = useState(Math.random() * 40 + '%')
  const [size, setSize] = useState('0')

  useEffect(() => {
    switch (type) {
      case 'light':
        setLeft(Math.random() * (screen_size + max_star_light_size) + 'px')
        setSize(Math.ceil(Math.random() * 30) + 1 + 'px')
        break
      case 'dark':
        setLeft(Math.random() * (screen_size + max_star_dark_size) + 'px')
        setSize(Math.ceil(Math.random() * 14) + 1 + 'px')
        break
      default:
        setSize(Math.ceil(Math.random() * 30) + 1 + 'px')
    }
  }, [type])

  switch (type) {
    case 'light':
      return (
        <div className="star light" style={{ width: size, height: size, fontSize: size, left, top }} />
      )
    case 'dark': 
      return (
        <div className="star dark" style={{ width: size, height: size, left, top }} />
      )
    default:
      return (
        <div className="star dark" style={{ width: size, height: size, left, top }} />
      )
  }
}

const Line = ({ type }) => {
  const [height, setHeight] = useState('0')
  const [width, setWidth] = useState('0')
  const [left, setLeft] = useState('0')
  const [top, setTop] = useState('0')

  useEffect(() => {
    switch (type) {
      case 'light':
        setHeight(Math.random() * (15 - 10) + 10 + 'px')
        setWidth(Math.random() * (800 - 400) + 400 + 'px')
        setLeft(Math.random() * (screen_size + max_line_light_size) + 'px')
        setTop(Math.random() * 40 + '%')
        break
      case 'dark':
        setHeight(Math.random() * (40 - 28) + 10 + 'px')
        setWidth(Math.random() * (800 - 400) + 400 + 'px')
        setLeft(Math.random() * (screen_size + max_line_dark_size) + 'px')
        setTop(Math.random() * (70 - 40) + 40 + '%')
        break
      default:
    }
  }, [type])

  switch (type) {
    case 'light':
      return (
        <div className="line light" style={{ width, height, left, top }} />
      )
    case 'dark':
      return (
        <div className="line dark" style={{ width, height, left, top }} />
      )
    default:
      return (
        <div className="line light" style={{ width, height, left, top }} />
      )
  }
}

const Sea = ({ left, duration }) => {
  return (
    <motion.div className="sea" animate={{ 
      left: [null, left, 0], 
      transition: { 
        ease: ['easeIn', 'easeInOut'], 
        duration,
        repeat: Infinity } 
      }} />
  )
}

const Background = () => {
  const [backgroundLeft, setBackgroundLeft] = useState(0)
  const [cloudWhiteLeft, setCloudWhiteLeft] = useState(0)
  const [cloudPinkLeft, setCloudPinkLeft] = useState(0)
  const [cloudIvoryLeft, setCloudIvoryLeft] = useState(0)
  const [lineLightLeft, setLineLightLeft] = useState(0)
  const [lineDarkLeft, setLineDarkLeft] = useState(0)
  const [starLightLeft, setStarLightLeft] = useState(0)
  const [starDarkLeft, setStarDarkLeft] = useState(0)

  const { scrollX, setScrollX } = useContext(HomeContext)

  const containerRef = createRef()

  const arrayMaker = (length) => {
    return Array.apply(null, Array(length))
  }

  useEffect(() => {
    setBackgroundLeft(scrollX)
    setStarLightLeft(getParallax(scrollX, [0, max_screen_size], [0, -max_star_light_size]) + 'px')
    setStarDarkLeft(getParallax(scrollX, [0, max_screen_size], [0, -max_star_dark_size]) + 'px')
    setLineLightLeft(getParallax(scrollX, [0, max_screen_size], [0, -max_line_light_size]) + 'px')
    setLineDarkLeft(getParallax(scrollX, [0, max_screen_size], [0, -max_line_dark_size]) + 'px')
    setCloudWhiteLeft(getParallax(scrollX, [0, max_screen_size], [0, -(max_screen_size / 3.5)]) + 'px')
    setCloudPinkLeft(getParallax(scrollX, [0, max_screen_size], [0, -(max_screen_size / 5)]) + 'px')
    setCloudIvoryLeft(getParallax(scrollX, [0, max_screen_size], [0, -(max_screen_size / 6.5)]) + 'px')
  }, [scrollX])

  useEffect(() => {
    if (containerRef.current !== null) {
      containerRef.current.addEventListener('wheel', (event) => {
        setScrollX(l => Math.max(Math.min(l + event.deltaY, max_screen_size), 0))

        console.log('asdf')
     
        event.preventDefault()
      })
    }
  }, [containerRef, setScrollX])

  return (
    <motion.div id="container" ref={containerRef}  >
      <motion.div className="background" animate={{ x: -backgroundLeft }} />
      <div className="sky">
        <div className="sun" />
        <div className="sun-light" />
        <motion.div className="stars light" animate={{ x: starLightLeft }}>
          {
            arrayMaker(10).map((item) => {
              return <Star type="light" />
            })
          }
        </motion.div>
        <motion.div className="stars dark" animate={{ x: starDarkLeft }}>
          {
            arrayMaker(20).map((item) => {
              return <Star type="dark" />
            })
          }
        </motion.div>
        <motion.div className="lines light" animate={{ x: lineLightLeft }}>
          {
            arrayMaker(5).map((item) => {
              return <Line type='light' />
            })
          }
        </motion.div>
        <motion.div className="lines dark" animate={{ x: lineDarkLeft }}>
          {
            arrayMaker(8).map((item) => {
              return <Line type='dark' />
            })
          }
        </motion.div>
        <motion.div className="clouds white" animate={{ x: cloudWhiteLeft }}>
          <div className="cloud white" />
          <div className="cloud white" />
          <div className="cloud white" />
          <div className="cloud white" />
          <div className="cloud white" />
          <div className="cloud white" />
          <div className="cloud white" />
          <div className="cloud white" />
          <div className="cloud white" />
          <div className="cloud white" />
          <div className="cloud white" />
        </motion.div>
        <motion.div className="clouds pink" animate={{ x: cloudPinkLeft }}>
          <div className="cloud pink" />
          <div className="cloud pink" />
          <div className="cloud pink" />
          <div className="cloud pink" />
          <div className="cloud pink" />
          <div className="cloud pink" />
          <div className="cloud pink" />
          <div className="cloud pink" />
          <div className="cloud pink" />
          <div className="cloud pink" />
          <div className="cloud pink" />
        </motion.div>
        <motion.div className="clouds ivory" animate={{ x: cloudIvoryLeft }}>
          <div className="cloud ivory" />
          <div className="cloud ivory" />
          <div className="cloud ivory" />
          <div className="cloud ivory" />
        </motion.div>
      </div>
      <motion.div className="ground" animate={{ x: -backgroundLeft }}>
        <div className="seas">
          <Sea left={150} duration={4} />
          <Sea left={100} duration={5.5} />
          <Sea left={100} duration={5} />
          <Sea left={180} duration={4.5} />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Background
import { createRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/Background.scss'

const Star = ({ type }) => {
  const [left] = useState(Math.random() * 100 + '%')
  const [top] = useState(Math.random() * 40 + '%')
  const [size, setSize] = useState('0')

  useEffect(() => {
    switch (type) {
      case 'light':
        setSize(Math.ceil(Math.random() * 30) + 1 + 'px')
        break
      case 'dark':
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
        setLeft(Math.random() * 100 + '%')
        setTop(Math.random() * 30 + '%')
        break
      case 'dark':
        setHeight(Math.random() * (40 - 28) + 10 + 'px')
        setWidth(Math.random() * (800 - 400) + 400 + 'px')
        setLeft(Math.random() * 100 + '%')
        setTop(Math.random() * (70 - 30) + 30 + '%')
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

const getParallax = (value, input, output) => {
  let result = 0;
  
  input.map((item, index) => {
    if (value <= item) {
      if (index === 0) result = output[0]
      else result = (value / (input[index] - input[index - 1])) * (output[index] - output[index - 1]) + output[index - 1]
    }
  })

  return result
}

const Background = () => {
  const [globalLeft, setGlobalLeft] = useState(0)
  const [cloudWhiteLeft, setCloudWhiteLeft] = useState(0)
  const [cloudPinkLeft, setCloudPinkLeft] = useState(0)
  const [cloudIvoryLeft, setCloudIvoryLeft] = useState(0)
  const [lineLightLeft, setLineLightLeft] = useState(0)
  const [lineDarkLeft, setLineDarkLeft] = useState(0)
  const [starLightLeft, setStarLightLeft] = useState(0)
  const [starDarkLeft, setStarDarkLeft] = useState(0)
  const screen_count = 6
  const max_screen_size = window.innerWidth * (screen_count - 1)
  const containerRef = createRef()

  const arrayMaker = (length) => {
    return Array.apply(null, Array(length))
  }

  useEffect(() => {
    setCloudWhiteLeft(getParallax(globalLeft, [0, max_screen_size], [0, -(max_screen_size / 3.5)]) + 'px')
    setCloudPinkLeft(getParallax(globalLeft, [0, max_screen_size], [0, -(max_screen_size / 4.5)]) + 'px')
    setCloudIvoryLeft(getParallax(globalLeft, [0, max_screen_size], [0, -(max_screen_size / 5.5)]) + 'px')
    setLineLightLeft(getParallax(globalLeft, [0, max_screen_size], [0, -(max_screen_size / 11)]) + 'px')
    setLineDarkLeft(getParallax(globalLeft, [0, max_screen_size], [0, -(max_screen_size / 8)]) + 'px')
    setStarLightLeft(getParallax(globalLeft, [0, max_screen_size], [0, -(max_screen_size / 13)]) + 'px')
    setStarDarkLeft(getParallax(globalLeft, [0, max_screen_size], [0, -(max_screen_size / 10)]) + 'px')
  }, [globalLeft])

  useEffect(() => {
    if (containerRef.current !== null) {
      containerRef.current.addEventListener('wheel', (event) => {
        setGlobalLeft(l => Math.max(Math.min(l + event.deltaY, max_screen_size), 0))
     
        event.preventDefault()
      })
    }
  }, [containerRef, max_screen_size])

  return (
    <motion.div id="container" ref={containerRef}  >
      <motion.div className="background" animate={{ x: -globalLeft }} />
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
            arrayMaker(3).map((item) => {
              return <Line type='light' />
            })
          }
        </motion.div>
        <motion.div className="lines dark" animate={{ x: lineDarkLeft }}>
          {
            arrayMaker(5).map((item) => {
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
        </motion.div>
        <motion.div className="clouds pink" animate={{ x: cloudPinkLeft }}>
          <div className="cloud pink" />
          <div className="cloud pink" />
          <div className="cloud pink" />
          <div className="cloud pink" />
          <div className="cloud pink" />
          <div className="cloud pink" />
        </motion.div>
        <motion.div className="clouds ivory" animate={{ x: cloudIvoryLeft }}>
          <div className="cloud ivory" />
        </motion.div>
      </div>
      <motion.div className="ground" animate={{ x: -globalLeft }}>
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
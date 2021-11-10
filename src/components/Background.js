import { useEffect, useState } from 'react'
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

const Background = () => {
  const [left, setLeft] = useState(0)

  const arrayMaker = (length) => {
    return Array.apply(null, Array(length))
  }

  useEffect(() => {
    window.addEventListener('wheel', (event) => {
      setLeft(l => Math.max(Math.min(l + event.deltaY, window.innerWidth * (2 - 1)), 0))

      event.preventDefault()
    })
  }, [])

  return (
    <motion.div id="background" animate={{ x: -left }} transition={{ type: "Tween", stiffness: 1000 }}>
      <div className="sky">
        <div className="sun" />
        <div className="stars">
          {
            arrayMaker(10).map((item) => {
              return <Star type="light" />
            })
          }
          {
            arrayMaker(20).map((item) => {
              return <Star type="dark" />
            })
          }
        </div>
        <div className="lines">
          {
            arrayMaker(3).map((item) => {
              return <Line type='light' />
            })
          }
          {
            arrayMaker(5).map((item) => {
              return <Line type='dark' />
            })
          }
        </div>
        <div className="clouds">
          <div className="cloud pink" />
          <div className="cloud pink" />
          <div className="cloud pink" />
          <div className="cloud white" />
          <div className="cloud white" />
          <div className="cloud ivory" />
          <div className="cloud pink" />
          <div className="cloud pink" />
          <div className="cloud white" />
          <div className="cloud white" />
          <div className="cloud pink" />
          <div className="cloud white" />
        </div>
      </div>
      <div className="ground">
        <div className="seas">
          <Sea left={150} duration={4} />
          <Sea left={100} duration={5.5} />
          <Sea left={100} duration={5} />
          <Sea left={180} duration={4.5} />
        </div>
      </div>
    </motion.div>
  )
}

export default Background
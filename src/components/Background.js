import { createRef, useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/Background.scss'
import '../styles/Clouds.scss'
import { max_screen_size, getParallax, HomeContext, max_star_light_size, max_star_dark_size, max_line_light_size, max_line_dark_size, screen_size, } from '../pages/Home'
import Star from './Star'
import Line from './Line'
import Sea from './Sea'

const Cloud = ({ type }) => {
  const { themeColors } = useContext(HomeContext)

  switch (type) {
    case 'white':
      return (
        <div className={`cloud white`} style={{ background: themeColors.cloudWhite}} />
      )

    case 'pink':
      return (
        <div className={`cloud pink`} style={{ background: themeColors.cloudPink}} />
      )

    case 'ivory':
      return (
        <div className={`cloud ivory`} style={{ background: themeColors.cloudIvory}} />
      )
  }
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
  const [namecardWidth, setNamecardWidth] = useState('100%')
  const [namecardHeight, setNamecardHeight] = useState('100%')

  const { scrollX, themeColors } = useContext(HomeContext)

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

    setNamecardWidth(`calc(${getParallax(scrollX, [max_screen_size - screen_size, max_screen_size], [100, 0])}% + ${getParallax(scrollX, [max_screen_size - screen_size, max_screen_size], [0, 70])}em)`)
    setNamecardHeight(`calc(${getParallax(scrollX, [max_screen_size - screen_size, max_screen_size], [100, 0])}% + ${getParallax(scrollX, [max_screen_size - screen_size, max_screen_size], [0, 40])}em)`)
  }, [scrollX])

  return (
    <div id="container" >
      <motion.div className="contact-frame" animate={{ width: namecardWidth, height: namecardHeight }}>
        <motion.div className="background" animate={{ x: -backgroundLeft }} />
        <div className="sky" style={{ background: themeColors.sky }}>
          <div className="sun" />
          <div className="sun-light" />
          <motion.div className="stars light" animate={{ x: starLightLeft }}>
            {
              arrayMaker(10).map(() => {
                return <Star type="light" />
              })
            }
          </motion.div>
          <motion.div className="stars dark" animate={{ x: starDarkLeft }}>
            {
              arrayMaker(20).map(() => {
                return <Star type="dark" />
              })
            }
          </motion.div>
          <motion.div className="lines light" animate={{ x: lineLightLeft }}>
            {
              arrayMaker(5).map(() => {
                return <Line type='light' />
              })
            }
          </motion.div>
          <motion.div className="lines dark" animate={{ x: lineDarkLeft }}>
            {
              arrayMaker(8).map(() => {
                return <Line type='dark' />
              })
            }
          </motion.div>
          <motion.div className="clouds white" animate={{ x: cloudWhiteLeft }}>
            <Cloud type="white" />
            <Cloud type="white" />
            <Cloud type="white" />
            <Cloud type="white" />
            <Cloud type="white" />
            <Cloud type="white" />
            <Cloud type="white" />
            <Cloud type="white" />
            <Cloud type="white" />
            <Cloud type="white" />
            <Cloud type="white" />
          </motion.div>
          <motion.div className="clouds pink" animate={{ x: cloudPinkLeft }}>
            <Cloud type="pink" />
            <Cloud type="pink" />
            <Cloud type="pink" />
            <Cloud type="pink" />
            <Cloud type="pink" />
            <Cloud type="pink" />
            <Cloud type="pink" />
            <Cloud type="pink" />
            <Cloud type="pink" />
            <Cloud type="pink" />
            <Cloud type="pink" />
          </motion.div>
          <motion.div className="clouds ivory" animate={{ x: cloudIvoryLeft }}>
            <Cloud type="ivory" />
            <Cloud type="ivory" />
            <Cloud type="ivory" />
            <Cloud type="ivory" />
          </motion.div>
        </div>
        <motion.div className="ground" style={{ background: themeColors.ground }} animate={{ x: -backgroundLeft }}>
          <div className="seas">
            <Sea left={150} duration={4} />
            <Sea left={100} duration={5.5} />
            <Sea left={100} duration={5} />
            <Sea left={180} duration={4.5} />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Background
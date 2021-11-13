import { useContext, useEffect, useState } from 'react'
import { screen_size, max_star_light_size, max_star_dark_size, HomeContext } from '..'
import '../../../styles/Home/Background/Star.scss'

const Star = ({ type }) => {
  const { themeColors } = useContext(HomeContext)
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
        <div className="star light" style={{ width: size, height: size, fontSize: size, left, top, color: themeColors.starLight }} />
      )
    case 'dark':
      return (
        <div className="star dark" style={{ width: size, height: size, left, top, background: themeColors.starDark }} />
      )
    default:
      return (
        <div className="star dark" style={{ width: size, height: size, left, top, background: themeColors.starDark }} />
      )
  }
}

export default Star
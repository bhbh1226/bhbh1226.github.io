import { useEffect, useState } from 'react'
import { screen_size, max_line_light_size, max_line_dark_size, } from '../pages/Home'
import '../styles/Line.scss'

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

export default Line
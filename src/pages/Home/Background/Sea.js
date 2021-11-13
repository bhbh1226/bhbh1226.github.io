import { motion } from 'framer-motion'
import '../../../styles/Home/Background/Sea.scss'

const Sea = ({ left, duration }) => {
  return (
    <motion.div className="sea" animate={{
      left: [null, left, 0],
      transition: {
        ease: ['easeIn', 'easeInOut'],
        duration,
        repeat: Infinity
      }
    }} />
  )
}

export default Sea
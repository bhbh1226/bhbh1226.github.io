import { motion } from "framer-motion"
import { useContext, useEffect, useState } from "react"
import { HomeContext } from ".."
import '../../../styles/Home/Content/Content.scss'
import Christmas from "./Christmas"

const Content = () => {
  const [contentLeft, setContentLeft] = useState(0)

  const { scrollX } = useContext(HomeContext)

  useEffect(() => {
    setContentLeft(scrollX)
  }, [scrollX])

  return (
    <motion.div id="content" animate={{ x: -contentLeft }}>
      <section className="page"></section>
      <section className="page"><div><button>hello</button></div></section>
      <section className="page"></section>
      <section className="page"></section>  
      <section className="page christmas"><Christmas /></section>
      <section className="page"></section>
    </motion.div>
  )
}

export default Content
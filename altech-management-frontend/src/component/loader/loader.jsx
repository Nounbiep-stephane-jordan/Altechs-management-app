import React from 'react'
import {motion} from "framer-motion"
import logo from "../../assets/Logo - single.png"
import "./load.scss"

 
 

const Loader = () => {
  return (
    <>
 <motion.div className="loader-box">
     <motion.div className="img-box">
        <img src={logo} alt="logo"/>
        <sub>Loading...</sub>
     </motion.div>
 <motion.div className="loader" 
    initial={{x:-20}}
    animate={{ x:[-20,50,-20]
    }}
    transition={{repeat:Infinity,duration:2,ease:"easeInOut",delay:1}}
    >
     </motion.div>
 </motion.div>
    </>
  )
}

export default Loader
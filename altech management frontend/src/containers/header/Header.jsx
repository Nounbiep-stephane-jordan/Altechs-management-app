import React from 'react'
import {BsFillBellFill} from "react-icons/bs"
import {BsFillPersonFill} from "react-icons/bs"
import {BsThreeDotsVertical} from "react-icons/bs"
import {BsDot} from "react-icons/bs"
import {motion} from "framer-motion"
import logo from "../../assets/Logo - single.png"
 
// import "./Header.scss"
import "./head.scss"
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1,delay:2.5}}
    className="header">
      <div className="bar">
         <div className="img">
          <img src={logo} alt="logo"/>  
          <NavLink to="/home" >  <h1 className="p-head">Altech</h1></NavLink>
         </div>
 
     <div className="all-icons">
     <div className="head-icon-box">
      <div className="head-icon-inner-box">
        <BsDot/>
      </div>
      <BsFillBellFill className="head-icon"/>
    </div>
    <div className="head-icon-box">
       <NavLink to="/"><BsFillPersonFill className="head-icon"/></NavLink>
    </div>
    <div className="head-icon-box">
      <BsThreeDotsVertical className="head-icon"/>
    </div>
     </div>
      </div>
    </motion.div>
  )
}

export default Header
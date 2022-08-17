import React from 'react'
import { BsPersonCircle,BsCalendar2Check,BsHandThumbsUpFill} from "react-icons/bs"
import "./home.scss"
import {motion} from "framer-motion"
import { NavLink} from 'react-router-dom'

const Home = () => {
  return (
    <>
     <motion.div
    initial={{opacity:0,x:100}}
    animate={{opacity:1,x:0}}
    transition={{duration:1,ease:"easeInOut"}}
    className='home table'>
      
            <motion.div
            initial={{scale:1}} 
            whileHover={{scale:[1.1,1]}}
           transition={{duration:1,ease:"easeInOut"}}
            className='box'>
            <div className="hover-box red">
                <BsPersonCircle/>
            </div>
            <p className="para"><NavLink to="/client" exact="true" className="link">Clients</NavLink></p>
        </motion.div>

        <motion.div
          initial={{scale:1}} 
          whileHover={{scale:[1.1,1]}}
         transition={{duration:1,ease:"easeInOut"}}
        className='box'>
            <div className="hover-box green">
                <BsCalendar2Check/>
            </div>
            <p className="para"><NavLink to="/vendors" exact="true" className="link">Vendors</NavLink></p>
        </motion.div>
         
        <motion.div
          initial={{scale:1}} 
          whileHover={{scale:[1.1,1]}}
         transition={{duration:1,ease:"easeInOut"}}
        className='box'>
            <div className="hover-box blue">
                <BsHandThumbsUpFill/>
            </div>
            <p className="para"><NavLink to="/client" exact="true" className="link">Clients</NavLink></p>
        </motion.div>
   
        
    <motion.div
      initial={{scale:1}} 
      whileHover={{scale:[1.1,1]}}
     transition={{duration:1,ease:"easeInOut"}}
    className='box'>
            <div className="hover-box blue">
                <BsPersonCircle/>
            </div>
            <p className="para"><NavLink to="/interns" exact="true" className="link">Interns</NavLink></p>
        </motion.div>

        <motion.div
          initial={{scale:1}} 
          whileHover={{scale:[1.1,1]}}
         transition={{duration:1,ease:"easeInOut"}}
        className='box'>
            <div className="hover-box green">
                <BsPersonCircle/>
            </div>
            <p className="para"><NavLink to="/roles" exact="true" className="link">Roles</NavLink></p>
        </motion.div>

        <motion.div 
          initial={{scale:1}} 
          whileHover={{scale:[1.1,1]}}
         transition={{duration:1,ease:"easeInOut"}}
        className='box'>
            <div className="hover-box red">
                <BsPersonCircle/>
            </div>
            <p className="para"> <NavLink to="/receipts" exact="true" className="link">Receipts</NavLink></p>
        </motion.div>
    </motion.div>
    </>

    
  )
}

export default  Home
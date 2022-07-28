import React, { useState }  from 'react'
import {BiMenuAltLeft} from "react-icons/bi"
import {BsArrowReturnRight} from "react-icons/bs"
import {motion} from "framer-motion"
import {NavLink } from "react-router-dom";
import './sidebar.scss'
 

const Sidebar = () => {

   const [show,setshow] = useState(false)
   const [show2,setshow2] = useState(false)
   
   
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1,x:[200,10,0]}}
    transition={{duration:1,delayChildren:1}}
    className='sidebar'>
         <motion.div
            initial={{opacity:0}}
            animate={{opacity:1,x:[-100,100,0]}}
            transition={{duration:1}} 
         className="link_box-icon">
            <BiMenuAltLeft className='link-item link-icon'/>
         </motion.div>
        
         <motion.div 
         initial={{opacity:0}}
         animate={{opacity:1,x:[-100,100,0]}}
         transition={{duration:1,delay:0.8}}
         className="link_box">
            <NavLink to="/client" className='link-item' exact="true" activeclassname="active" onClick={() =>setshow((prev) => !prev)} >clients</NavLink>
           {show?
           <motion.div
           initial={{opacity:0}}
           animate={{opacity:1,x:[-30,20,0]}}
           transition={{duration:0.9}}>
            <NavLink
          to="/client_category" className='link-item-dropdown' exact="true" activeclassname="active-dropdown" ><BsArrowReturnRight/>category</NavLink>
           </motion.div>
          :""  
         }       
            </motion.div>
        
         <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1,x:[-100,100,0]}}
            transition={{duration:1,delay:1}}
         className="link_box">
            <NavLink to="/vendors" className='link-item' exact="true" activeclassname="active" onClick={() =>setshow2((prev) => !prev)}>Vendor</NavLink>
            {show2?
         <motion.div
         initial={{opacity:0}}
         animate={{opacity:1,x:[-30,20,0]}}
         transition={{duration:0.9}}
         >
             <NavLink
          to="/vendor_category" className='link-item-dropdown' exact="true" activeclassname="active-dropdown" ><BsArrowReturnRight/>category</NavLink>
         </motion.div>:""  
         }   
            </motion.div>
         
         <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1,x:[-100,100,0]}}
            transition={{duration:1,delay:1.2}}
         className="link_box"><NavLink to="/employees" className='link-item' exact="true" activeclassname="active">Employee</NavLink></motion.div>
         
         <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1,x:[-100,100,0]}}
            transition={{duration:1,delay:1.4}}
         className="link_box"><NavLink to="/interns" className='link-item' exact="true" activeclassname="active">Interns</NavLink></motion.div>
             <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1,x:[-100,100,0]}}
            transition={{duration:1,delay:1.6}}
         className="link_box"><NavLink to="/roles" className='link-item' exact="true" activeclassname="active">Roles</NavLink></motion.div>

<motion.div 
            initial={{opacity:0}}
            animate={{opacity:1,x:[-100,100,0]}}
            transition={{duration:1,delay:1.8}}
         className="link_box"><NavLink to="/receipt" className='link-item' exact="true" activeclassname="active">Receipt</NavLink></motion.div>
    </motion.div>
  )
}
 

export default Sidebar
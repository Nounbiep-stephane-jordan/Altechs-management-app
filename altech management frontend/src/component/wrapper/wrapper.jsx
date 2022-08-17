import React from 'react'
import {FaFacebook,FaLinkedin,FaGithub} from "react-icons/fa"
import "./wrap.scss"
const Wrapper = ( ) =>  {
  return (
    <div className="wrapp">
         <div className="icons">
            <div className="icon face"><FaFacebook/></div>
            <div className="icon link"><FaLinkedin/></div>
            <div className="icon git"><FaGithub/></div>
            
        </div>
        <p>All wrights Reserved @2022 NJS</p>
        
    </div>
  )
}

export default Wrapper
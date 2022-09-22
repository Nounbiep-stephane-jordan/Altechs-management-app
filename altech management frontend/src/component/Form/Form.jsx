import React,{  useState} from 'react'
import axios from "axios"
import {motion} from "framer-motion"
import { useNavigate} from 'react-router-dom'
import Loader from '../loader/loader'
import {BsPerson,BsTelephone,BsGlobe} from "react-icons/bs"
import {FiMail} from "react-icons/fi"
import {GoLocation} from "react-icons/go"
import "./Form.scss"
 
 
const Form = ({title,setMessage,type,route}) => {
    
   const navigate = useNavigate()
   const [loading,setloading] = useState(false)
  const [data,setData] = useState({
     name:"",
     tel:"",
     website:"",
     address:"",
     email:"",
     category_name:"",
     category_id:"",
  })
 
 
  const [error,setError] = useState("")
 

 

 
 const handleChange = (e) =>{
    setData({...data,[e.target.name]:e.target.value})
 } 



 
 const handleSubmit = (e) =>{
    e.preventDefault()
    setloading(true)
  
    axios.post(`http://localhost:8000/api/${type}`,data)
    .then(response => (
        setMessage(response.data.message),
        navigate(`/${route}`)
    ))
    .catch(err => {

        console.log(err)
        setloading(false)
        console.log(err)
        setError("please the selected feilds cannot be blank")
 })
 }

 if(error) {
  setTimeout(()=>{
    console.log("here")
    setError("")
  },2000)
 }

 
  return (
     <>
     
     {loading?
      <>
       <div className="table">
       <Loader/>
       </div>
      </>
       :
       <>
       <motion.div 
       initial={{opacity:0,scale:0}}
       animate={{opacity:1,scale:[0,1]}}
       transition={{duration:1}}
       className="form">
        <div className={error?"pop-up error":"pop-up"}>{error}</div>
        <form onSubmit={handleSubmit}  >
            <h1>{title}</h1>
             <div className="input-box">
              <BsPerson className="form-icon"/>
             <input type="text" placeholder="Name" name="name" onChange={handleChange}/>
             </div>

              <div className="input-box">
              <BsTelephone className="form-icon"/>
             <input type="text" placeholder="tel" name="tel" onChange={handleChange}/>
             </div>

             <div className="input-box">
             <BsGlobe className="form-icon"/>
             <input type="text" placeholder="website" name="website" onChange={handleChange}/>
             </div>

        <div className="input-row">
        <div className="input-box">
          <GoLocation className="form-icon"/>
             <input type="text" placeholder="Address" name="address" onChange={handleChange}/>
             </div>

             <div className="input-box">
          <FiMail className="form-icon"/>
             <input type="text" placeholder="Email" name="email" onChange={handleChange}/>
             </div>
        </div>

        <div className="input-row-last">
        <div className="input-box input-last">
             <input type="text" placeholder="category name" name="category_name" onChange={handleChange}/>
             </div>

             <div className="input-box">
             <input type="text" placeholder="category id" name="category_id" onChange={handleChange}/>
             </div>
        </div>

        <button  type="submit" className="btn submit"  >add</button>
        </form>
        </motion.div>
        </>
       }
     
     </>
  )
}

export default Form
import React,{useEffect, useState} from 'react'
import axios from "axios"
import {motion} from "framer-motion"
import { useNavigate, useParams} from 'react-router-dom'
import Loader from '../../loader/loader'
import {BsPerson,BsTelephone,BsGlobe} from "react-icons/bs"
import {FiMail} from "react-icons/fi"
import {GoLocation} from "react-icons/go"
 
const Edit = ({title,setMessage}) => {
  const {id} = useParams()

 

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

 
 useEffect(() =>{
  setloading(true)
  axios.get(`http://localhost:8000/api/clients_edit/${id}`)
  .then(function (response) {
    console.log('the response is ',response)
    setData(response.data.client)
    setloading(false)
  })
  .catch(function (error) {
    console.log(error);
  }) 
},[id])



const handleChange = (e) =>{
   setData({...data,[e.target.name]:e.target.value})
} 




const handleSubmit = (e) =>{
   e.preventDefault()
   setloading(true)

   axios.put(`http://localhost:8000/api/clients_update/${id}`,data)
   .then(response => (
       setMessage(response.data.message),
       navigate("/client")
   ))
   .catch(err => {

       console.log(err)
       setloading(false)
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
    <motion.div 
    initial={{opacity:0,scale:0}}
    animate={{opacity:1,scale:[0,1]}}
    transition={{duration:1}}
    className="form">
      {loading?
      <>
      <Loader/>
      </>
       :
       <>
        
        <div className={error?"pop-up error":"pop-up"}>{error}</div>
        <form onSubmit={handleSubmit}  >
            <h1>{title}</h1>
             <div className="input-box">
              <BsPerson className="form-icon"/>
             <input type="text" placeholder="Name" name="name" onChange={handleChange}   defaultValue={data.name}/>
             </div>

              <div className="input-box">
              <BsTelephone className="form-icon"/>
             <input type="text" placeholder="tel" name="tel" onChange={handleChange}   defaultValue={data.tel}/>
             </div>

             <div className="input-box">
             <BsGlobe className="form-icon"/>
             <input type="text" placeholder="website" name="website" onChange={handleChange}   defaultValue={data.website}/>
             </div>

        <div className="input-row">
        <div className="input-box">
          <GoLocation className="form-icon"/>
             <input type="text" placeholder="Address" name="address" onChange={handleChange}  defaultValue={data.address}/>
             </div>

             <div className="input-box">
          <FiMail className="form-icon"/>
             <input type="text" placeholder="Email" name="email" onChange={handleChange}   defaultValue={data.email}/>
             </div>
        </div>

        <div className="input-row-last">
        <div className="input-box">
             <input type="text" placeholder="category name" name="category_name"  onChange={handleChange}  defaultValue={data.category_name}/>
             </div>

             <div className="input-box">
             <input type="text" placeholder="category id" name="category_id" onChange={handleChange}   defaultValue={data.category_id}/>
             </div>
        </div>

        <button  type="submit" className="btn submit"  >update</button>
        </form>
       </>
       }

        
    </motion.div>
  )
}

export default Edit
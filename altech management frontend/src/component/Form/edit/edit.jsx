import React,{useEffect, useState} from 'react'
import axios from "axios"
import {motion} from "framer-motion"
import { useNavigate, useParams} from 'react-router-dom'
import Loader from '../../loader/loader'
import {BsPerson,BsTelephone,BsGlobe} from "react-icons/bs"
import {FiMail} from "react-icons/fi"
import {GoLocation} from "react-icons/go"
 
const Edit = ({title,setMessage,type,route,edit}) => {
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
  axios.get(`http://localhost:8000/api/${edit}/${id}`)
  .then(function (response) {
    setloading(false)
    if(route==="client"){
     return setData(response.data.client)
    } else if(route==="vendors"){
     return setData(response.data.vendor)
    }
     
  })
  .catch(function (error) {
    console.log(error);
  }) 
},[edit, id, route])



const handleChange = (e) =>{
   setData({...data,[e.target.name]:e.target.value})
} 




const handleSubmit = (e) =>{
   e.preventDefault()
   setloading(true)
   console.log(data,"testing")

   axios.put(`http://localhost:8000/api/${type}/${id}`,data)
   .then(response =>  {
    
      setMessage(response.data.message)
      navigate(`/${route}`)
  
   })
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
       transition={{duration:1,ease:"easeInOut"}}
       className="form">
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
         </motion.div>
       </>
       }
     </>

    
  )
}

export default Edit
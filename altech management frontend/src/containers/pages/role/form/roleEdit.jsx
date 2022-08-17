import React,{useEffect, useState} from 'react'
import axios from "axios"
import {motion} from "framer-motion"
import { useNavigate, useParams} from 'react-router-dom'
 import Loader from '../../../../component/loader/loader'
 
const RoleEdit = ({title,setMessage,type,route,edit}) => {
  const {id} = useParams()

 

  const navigate = useNavigate()
  const [loading,setloading] = useState(false)
 const [data,setData] = useState({
    name:"",
    function:""
 })

 
 const [error,setError] = useState("")

 
 useEffect(() =>{
  setloading(true)
  axios.get(`http://localhost:8000/api/role_edit/${id}`)
  .then(function (response) {
    setloading(false)
     setData(response.data.role)
  })
  .catch(function (error) {
    console.log(error);
  }) 
},[ id])



const handleChange = (e) =>{
   setData({...data,[e.target.name]:e.target.value})
} 




const handleSubmit = (e) =>{
   e.preventDefault()
   setloading(true)
   console.log(data,"testing")

   axios.put(`http://localhost:8000/api/role_update/${id}`,data)
   .then(response =>  {
    
      setMessage(response.data.message)
      navigate(`/roles`)
  
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
            <h1>update Role</h1>
            <div className="input-box">
              
              <input type="text" placeholder="Name" name="name" defaultValue={data.name} onChange={handleChange}/>
              </div>
 
               <div className="input-box">
               
              <input type="text" placeholder="function" name="function" defaultValue={data.function} onChange={handleChange}/>
              </div>

        <button  type="submit" className="btn submit"  >update</button>
        </form>
       </>
       }

        
    </motion.div>
  )
}

export default RoleEdit
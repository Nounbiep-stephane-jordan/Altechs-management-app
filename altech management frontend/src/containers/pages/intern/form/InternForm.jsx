import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Loader from '../../../../component/loader/loader'
import axios from 'axios'
const InternForm = ({setMessage}) => {
    const navigate = useNavigate()
    const [loading,setloading] = useState(false)
   const [data,setData] = useState({
      name:"",
      tel:"",
      age:"",
      address:"",
      theme:"",
      school:"",
      sex:"",
      supervisor_name:"",
      start_date:"",
      end_date:"",
      town:"",
      supervisor_id:"1"
   })
  
  
   const [error,setError] = useState("")
  
 
  
 
  
  const handleChange = (e) =>{
     setData({...data,[e.target.name]:e.target.value})
  } 
 
 
 
  
  const handleSubmit = (e) =>{
     e.preventDefault()
     setloading(true)
 
     axios.post(`http://localhost:8000/api/intern_store`,data)
     .then(response => (
         setMessage(response.data.message),
         navigate(`/interns`)
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
            <h1>Add Intern</h1>
             <div className="input-box">
              
             <input type="text" placeholder="Name" name="name" onChange={handleChange}/>
             </div>

              <div className="input-box">
              
             <input type="text" placeholder="tel" name="tel" onChange={handleChange}/>
             </div>

             <div className="input-box">
             
             <input type="number" placeholder="age" name="age" onChange={handleChange}/>
             </div>

        <div className="input-row">
        <div className="input-box">
          
             <input type="text" placeholder="Address" name="address" onChange={handleChange}/>
             </div>

             <div className="input-box">
          
             <input type="text" placeholder="Theme" name="theme" onChange={handleChange}/>
             </div>
        </div>

           <div className="input-box">
          
             <input type="text" placeholder="School" name="school" onChange={handleChange}/>
             </div>

             <div className="input-box">
          <input type="text" placeholder="Town" name="town" onChange={handleChange}/>
          </div>
     

        

        <div className="input-box">
             <input type="text" placeholder="sex" name="sex" onChange={handleChange}/>
             </div>

             <div className="input-box">
             <input type="text" placeholder="supervisor name" name="supervisor_name" onChange={handleChange}/>
             </div>

        <div className="input-row-last">
           <div className="input-box">
             <input type="text" placeholder="start date" name="start_date" onChange={handleChange}/>
             </div>

             <div className="input-box">
             <input type="text" placeholder="end date" name="end_date" onChange={handleChange}/>
             </div>
        </div>

        <button  type="submit" className="btn submit"  >add</button>
        </form>
       </>
       }
           </motion.div>
    </>
  )
}

export default InternForm
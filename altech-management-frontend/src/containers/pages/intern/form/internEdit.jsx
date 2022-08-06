import React,{useEffect, useState} from 'react'
import axios from "axios"
import {motion} from "framer-motion"
import { useNavigate, useParams} from 'react-router-dom'
 import Loader from '../../../../component/loader/loader'
 
const InternEdit = ({title,setMessage,type,route,edit}) => {
  const {id} = useParams()

 

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

 
 useEffect(() =>{
  setloading(true)
  axios.get(`http://localhost:8000/api/intern_edit/${id}`)
  .then(function (response) {
    setloading(false)
     setData(response.data.intern)
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

   axios.put(`http://localhost:8000/api/intern_update/${id}`,data)
   .then(response =>  {
    
      setMessage(response.data.message)
      navigate(`/interns`)
  
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
            <h1>update Intern</h1>
             <div className="input-box">
              
             <input type="text" placeholder="Name" name="name" defaultValue={data.name} onChange={handleChange}/>
             </div>

              <div className="input-box">
              
             <input type="text" placeholder="tel" name="tel" defaultValue={data.tel} onChange={handleChange}/>
             </div>

             <div className="input-box">
             
             <input type="number" placeholder="age" name="age" defaultValue={data.age} onChange={handleChange}/>
             </div>

        <div className="input-row">
        <div className="input-box">
          
             <input type="text" placeholder="Address" name="address" defaultValue={data.address} onChange={handleChange}/>
             </div>

             <div className="input-box">
          
             <input type="text" placeholder="Theme" name="theme" defaultValue={data.theme} onChange={handleChange}/>
             </div>
        </div>

           <div className="input-box">
          
             <input type="text" placeholder="School" name="school" defaultValue={data.school} onChange={handleChange}/>
             </div>

             <div className="input-box">
          <input type="text" placeholder="Town" name="town" defaultValue={data.town} onChange={handleChange}/>
          </div>
     

        

        <div className="input-box">
             <input type="text" placeholder="sex" name="sex" defaultValue={data.sex} onChange={handleChange}/>
             </div>

             <div className="input-box">
             <input type="text" placeholder="supervisor name" name="supervisor_name" defaultValue={data.supervisor_name} onChange={handleChange}/>
             </div>

        <div className="input-row-last">
           <div className="input-box">
             <input type="text" placeholder="start date" name="start_date" defaultValue={data.start_date} onChange={handleChange}/>
             </div>

             <div className="input-box">
             <input type="text" placeholder="end date" name="end_date" defaultValue={data.end_date} onChange={handleChange}/>
             </div>
        </div>

        <button  type="submit" className="btn submit"  >update</button>
        </form>
       </>
       }

        
    </motion.div>
  )
}

export default InternEdit
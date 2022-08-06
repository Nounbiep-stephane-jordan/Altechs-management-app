import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Loader from '../../../../component/loader/loader'
import axios from 'axios'
const  ReceiptForm = ({setMessage}) => {
    const navigate = useNavigate()
    const [loading,setloading] = useState(false)
   const [data,setData] = useState({
      receipt_number:"",
      quantity:"",
      final_price:"",
      enterprise_name:"",
      date_on_receipt:"",
      item_bought:"",
      category_id:""
   })
  
  
   const [error,setError] = useState("")
  
 
  
 
  
  const handleChange = (e) =>{
     setData({...data,[e.target.name]:e.target.value})
  } 
 
 
 
  
  const handleSubmit = (e) =>{
     e.preventDefault()
     setloading(true)
 
     axios.post(`http://localhost:8000/api/receipt_store`,data)
     .then(response => (
         setMessage(response.data.message),
         navigate(`/receipts`)
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
            <h1>Add Receipt</h1>
             <div className="input-box">
              
             <input type="text" placeholder="Receipt number" name="receipt_number" onChange={handleChange}/>
             </div>

              <div className="input-box">
             <input type="text" placeholder="Quantity" name="quantity" onChange={handleChange}/>
             </div>

             <div className="input-box">
             <input type="text" placeholder="Final price" name="final_price" onChange={handleChange}/>
             </div>

             <div className="input-box">
             <input type="text" placeholder="enterprise_name" name="enterprise_name" onChange={handleChange}/>
             </div>

             <div className="input-box">
             <input type="text" placeholder="date_on_receipt" name="date_on_receipt" onChange={handleChange}/>
             </div>

             <div className="input-box">
             <input type="text" placeholder="item_bought" name="item_bought" onChange={handleChange}/>
             </div>

             <div className="input-box">
             <input type="text" placeholder="category_id" name="category_id" onChange={handleChange}/>
             </div>
 

        <button  type="submit" className="btn submit"  >add</button>
        </form>
       </>
       }
           </motion.div>
    </>
  )
}

export default  ReceiptForm
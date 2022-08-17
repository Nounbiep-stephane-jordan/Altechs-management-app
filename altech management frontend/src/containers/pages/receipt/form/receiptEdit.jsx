import React,{useEffect, useState} from 'react'
import axios from "axios"
import {motion} from "framer-motion"
import { useNavigate, useParams} from 'react-router-dom'
 import Loader from '../../../../component/loader/loader'
 
const ReceiptEdit = ({setMessage}) => {
  const {id} = useParams()

 

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

 
 useEffect(() =>{
  setloading(true)
  axios.get(`http://localhost:8000/api/receipt_edit/${id}`)
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

   axios.put(`http://localhost:8000/api/receipt_update/${id}`,data)
   .then(response =>  {
    
      setMessage(response.data.message)
      navigate(`/receipts`)
  
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
            <h1>update Receipt</h1>
            
            <div className="input-box">
              
              <input type="text" placeholder="Receipt number" name="receipt_number" defaultValue={data.receipt_number} onChange={handleChange}/>
              </div>
 
               <div className="input-box">
              <input type="text" placeholder="Quantity" name="quantity" defaultValue={data.quantity} onChange={handleChange}/>
              </div>
 
              <div className="input-box">
              <input type="text" placeholder="Final price" name="final_price" defaultValue={data.final_price} onChange={handleChange}/>
              </div>
 
              <div className="input-box">
              <input type="text" placeholder="enterprise_name" name="enterprise_name" defaultValue={data.enterprise_name} onChange={handleChange}/>
              </div>
 
              <div className="input-box">
              <input type="text" placeholder="date_on_receipt" name="date_on_receipt" defaultValue={data.date_on_receipt} onChange={handleChange}/>
              </div>
 
              <div className="input-box">
              <input type="text" placeholder="item_bought" name="item_bought" defaultValue={data.item_bought} onChange={handleChange}/>
              </div>
 
              <div className="input-box">
              <input type="text" placeholder="category_id" name="category_id" defaultValue={data.category_id} onChange={handleChange}/>
              </div>
  

        <button  type="submit" className="btn submit"  >update</button>
        </form>
       </>
       }

        
    </motion.div>
  )
}

export default ReceiptEdit
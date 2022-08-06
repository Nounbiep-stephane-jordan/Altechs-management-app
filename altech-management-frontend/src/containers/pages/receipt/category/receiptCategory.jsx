import React, { useEffect, useState } from 'react'
import axios from "axios"
import Loader from '../../../../component/loader/loader'
import {motion} from "framer-motion"

const ReceiptCategory = () => {
    const [data,setData] = useState([])
   
    
    const [message,setMessage] = useState("")
    const [loading,setloading] = useState(true)
  
    const headings = ["services","materials"]
    const heading = ["receipt_number","quantity","final price","enterprise name","date on receipt", "item_bought"]
 
 
    const handleClick = (type,id) =>{
        setloading(true)
        if(type ==='del') {
          axios.delete(`http://localhost:8000/api/receipt_category_delete/${id}`)
          .then(function (response) {
            // console.log(response.data)
            setloading(false)
            return setMessage(response.data.message)
          })
          .catch(function (error) {
            console.log(error)
          }) 
        }
      }


    useEffect(() =>{
        axios.get('http://localhost:8000/api/receipt_category')
        .then(function (response) {
            console.log(response.data,"hey")
          setData(response.data.receipt_cat)
          setloading(false)
        })
        .catch(function (error) {
          console.log(error);
        }) 
      },[])

    
      

  return (
 <>
 
 {loading? <div className='table'><Loader/></div>:
  <motion.div
  whileInView={{y:[100,0],opacity:[0,1]}}
  initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{duration:1,ease:"easeInOut"}}
  className="table category"> 
  <table>
<tbody>
<tr className="headings">
{ headings.map((item,index) => ( 
<th key={item+index} className="t-heading">{item}</th>
))}
</tr>


{data.map((item,index) => ( 
<>
 
   <tr key={item.id}>
    <td className="t-data-cat" >{item.services}</td>
   <td className="t-data-cat" >{item.materials}</td></tr>
    
  
 
     <div className="hover bg-white
    ">
      <tr><td className="cat-heading">Receipts</td></tr>
    <table>
    <tbody>
    <tr className="headings">
         { heading.map((item,index) => ( 
           <th key={item+index} className="t-heading">{item}</th>
         ))}

         </tr>
       
         {item.receipts.map((item,index) => ( 
           <>
            <tr className="data" key={item.id+index} >
                 
            <td  className="t-data"  >{item.receipt_number}</td>
                 <td  className="t-data"  >{item.quantity}</td>
                 <td  className="t-data"  >{item.final_price}</td>
                 <td  className="t-data"  >{item.enterprise_name}</td>
                 <td  className="t-data"  >{item.date_on_receipt}</td>
                 <td  className="t-data"  >{item.item_bought}</td>
            </tr>
           </>
         ))}
    
    </tbody>
       </table>
    </div>
  
</>
))}




</tbody>
</table>
</motion.div>
 }
 
 </>
  )
}

export default ReceiptCategory
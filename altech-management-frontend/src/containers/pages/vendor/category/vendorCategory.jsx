import React, { useEffect, useState } from 'react'
import Table from '../../../../component/table/table'
import axios from "axios"
import {motion} from "framer-motion" 
import Loader from '../../../../component/loader/loader'

const VendorCategory = () => {
    const [data,setData] = useState([])
   
    
    const [message,setMessage] = useState("")
    const [loading,setloading] = useState(true)
  
    const headings = ["activity_sector","category_name"]
    const heading = ["name","address","tel","email","website","category_id","category_name","creation date"]

 
    const handleClick = (type,id) =>{
        setloading(true)
        if(type ==='del') {
          axios.delete(`http://localhost:8000/api/vendor_delete/${id}`)
          .then(function (response) {
            setloading(false)
            return setMessage(response.data.message)
          })
          .catch(function (error) {
            console.log(error)
          }) 
        }
      }


    useEffect(() =>{
        axios.get('http://localhost:8000/api/vendor_category')
        .then(function (response) {
          setData(response.data.vendors_category)
          setloading(false)
          console.log(response.data.vendors_category,"here nigger")
        })
        .catch(function (error) {
          console.log(error);
        }) 
      },[])

    
      
console.log(data,"hi")
  return (
 <>
  
 {loading? <div className="table">
  <Loader/>
 </div>: 
 <motion.div 
 whileInView={{y:[100,0],opacity:[0,1]}}
 initial={{opacity:0}}
 animate={{opacity:1}}
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
 
   <tr key={item.id+item.category_name}>
    <td className="t-data-cat" >{item.category_name}</td>
   <td className="t-data-cat" >{item.activity_sector}</td></tr>
    
  
 
    <div className="hover bg-white
    ">
      <tr><td className="cat-heading">Vendors</td></tr>
    <Table data={item.vendor} handleClick={handleClick} headings={heading} />
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

export default VendorCategory
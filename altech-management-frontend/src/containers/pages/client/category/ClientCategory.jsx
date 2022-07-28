import React, { useEffect, useState } from 'react'
import Table from '../../../../component/table/table'
import axios from "axios"
import "./category.scss"
import Loader from '../../../../component/loader/loader'

const Category = () => {
    const [data,setData] = useState([])
   
    
    const [message,setMessage] = useState("")
    const [loading,setloading] = useState(true)
  
    const headings = ["activity_sector","category_name"]
    const heading = ["name","address","tel","email","website","category_id","category_name","creation date"]

 
    const handleClick = (type,id) =>{
        setloading(true)
        if(type ==='del') {
          axios.delete(`http://localhost:8000/api/clients_delete/${id}`)
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
        axios.get('http://localhost:8000/api/clients_category')
        .then(function (response) {
          setData(response.data.clients_cat)
          setloading(false)
          console.log(response.data.clients_cat)
        })
        .catch(function (error) {
          console.log(error);
        }) 
      },[])

    
      

  return (
 <>
 <div className="table category">
 {loading?<Loader/>: 
  <table>
<tbody>
{/* <tr className="headings">
{ headings.map((item,index) => ( 
<th key={item+index} className="t-heading">{item}</th>
))}
</tr> */}

 
 
 

{data.map((item,index) => ( 
<>
 
   <tr key={item.id+item.category_name}><td className="t-data-cat" >{item.category_name}</td></tr>
   <tr key={item.id+item.activity_sector}> <td className="t-data-cat" >{item.activity_sector}</td></tr>
  
 
    <Table data={item.client} handleClick={handleClick} headings={heading} />
 
</>
))}




</tbody>
</table>
 }
 </div>
 </>
  )
}

export default Category
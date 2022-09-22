import React from 'react'
import {FaPen,FaTrash} from "react-icons/fa"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { notificationContext } from '../../App'
const Table = ({data,handleClick,headings,update}) => {
  let {token} = useContext(notificationContext)
  return (
    <table>
    <tbody>
    <tr className="headings">
         { headings.map((item,index) => ( 
           <th key={item+index} className="t-heading">{item}</th>
         ))}
         </tr>
       
         {data.map((item,index) => ( 
           <>
            <tr className="data" key={item.id+index} >
                 <td  className="t-data" key={item.id+index+item.name} >{item.name}</td>
                 <td  className="t-data" key={item.id+index+item.address}>{item.address}</td>
                 <td  className="t-data" key={item.id+index+item.tel}>{item.tel}</td>
                 <td  className="t-data" key={item.id+index+item.email}>{item.email}</td>
                 <td  className="t-data" key={item.id+index+item.website}>{item.website}</td>
                 <td  className="t-data" key={item.id+index+item.category_id}>{item.category_id}</td>
                 <td  className="t-data" key={item.id+index+item.category_name}>{item.category_name}</td>
                 <td  className="t-data" key={item.id+index+"hey"}>{item.created_at}</td>
                 {token?
                  <>
                   <td className="t-data t-icon" key={item.id+index+"edit"}><Link to={`/${update}/${item.id}`} ><FaPen className="blue"/></Link></td>
                 <td className="t-data t-icon" onClick={() => handleClick('del',item.id)} key={item.id+index+"now"}><FaTrash className="red"/></td>
                  </> :""}
                  </tr>
           </>
         ))}
    
   
         
         
    </tbody>
       </table>
  )
}

export default Table
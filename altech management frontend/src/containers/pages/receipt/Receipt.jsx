import React,{useContext, useEffect,useState} from 'react'
import { notificationContext } from '../../../App'
import {BsPlus} from "react-icons/bs"
import {AiFillCaretDown} from "react-icons/ai"
import {motion} from "framer-motion"
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Loader from '../../../component/loader/loader'
import SearchBox from '../../../component/search/searchBox'
import {FaPen,FaTrash} from "react-icons/fa"
import { Link } from 'react-router-dom'
const  Receipt= ({setnewMessage}) => {
    
   let newmessage = useContext(notificationContext)

  const [data,setData] = useState([])

  const  [filter,setFilter] = useState("")
  const  [filterby,setFilterby] = useState("item")
  const [time, setTime] = useState(4000)
  
  const [message,setMessage] = useState("")
  const [loading,setloading] = useState(true)

  const headings = ["receipt_number","quantity","final price","enterprise name","date on receipt", "item_bought"]

  
 
  const handleClick = (type,id) =>{
    console.log(message)
    setloading(true)
    if(type ==='del') {
      axios.delete(`http://localhost:8000/api/receipt_delete/${id}`)
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
    axios.get('http://localhost:8000/api/receipt')
    .then(function (response) {
      setData(response.data.receipt)
      console.log(response,"here in receipt")
      setloading(false)
    })
    .catch(function (error) {
      console.log(error);
    }) 
  },[message])

 
    if(message) {
      setTimeout(()=>{
        setMessage("")
        setnewMessage("")
      },time)
     }

     useEffect(() =>{

      if(newmessage !== ""){
        setMessage(newmessage)
       }
    
     },[newmessage])
 
   const onSearchChange = (event) =>{
     setFilter(event.target.value)
   }

 
 
let filterdata =  data.filter((item) =>  {
   console.log(filterby,"hi",filter,"hello",data)
  if(filterby==="item") { 
 return item.item_bought.toLowerCase().includes(filter.toLowerCase()) 
  }

  if(filterby==="enterprise") { 
    return item.enterprise_name.toLowerCase().includes(filter.toLowerCase()) 
     }

 
});

  

const changeFilter = (type) =>{
  setFilterby(type)
  setMessage(`filtering by ${type}`)
  setTime(2000)
 }

  return (
      <>
            {loading?
      <>
       <div className="table"><Loader/></div>
      </>
       :
       <>
       <motion.div 
        whileInView={{y:[100,0],opacity:[0,1]}}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1,ease:"easeInOut"}}
       className="table"> 
        {message?<div className="alert">
         <div className="alert-content">
          <p>{message}</p>
         </div>
       </div>  : ""}
    

    <div className="table-heading-add">
      <h1>List of Receipts</h1>
       <NavLink exact="true" to="/add_receipt" className="add"><button className="btn"><BsPlus/> </button></NavLink>
    </div>

    <div className="table-search">

      <SearchBox onSearchChange={onSearchChange}/>

      <div className="filter">

        <div className="filter-by dropdown">
          <button className="btn">Filter by<AiFillCaretDown/></button>
          <div className="dropdown-content">
            <p onClick={() => changeFilter('item')}>Item</p>
            <p onClick={() => changeFilter('enterprise')}>Enterprise</p>
          </div>
        </div>

        <div className="Sort-by dropdown">
          <button className="btn">Sort by<AiFillCaretDown/></button>
          <div className="dropdown-content">
          <p>A-Z</p>
            <p>Z-A</p>
          </div>
        </div>

      </div>

    </div>
    
    <table>
    <tbody>
    <tr className="headings">
         { headings.map((item,index) => ( 
           <th key={item} className="t-heading">{item}</th>
         ))}
         </tr>
       
         {filterdata.map((item,index) => ( 
           <>
            <tr className="data" key={item.id+index} >
                 <td  className="t-data"  >{item.receipt_number}</td>
                 <td  className="t-data"  >{item.quantity}</td>
                 <td  className="t-data"  >{item.final_price}</td>
                 <td  className="t-data"  >{item.enterprise_name}</td>
                 <td  className="t-data"  >{item.date_on_receipt}</td>
                 <td  className="t-data"  >{item.item_bought}</td>
                  <td className="t-data t-icon" ><Link to={`/update_receipt/${item.id}`} ><FaPen className="blue"/></Link></td>
                 <td className="t-data t-icon" onClick={() => handleClick('del',item.id)} ><FaTrash className="red"/></td>
            </tr>
           </>
         ))}
    
   
         
         
    </tbody>
       </table>
      </motion.div>
       </>
       }
      </>
  )
}

export default Receipt
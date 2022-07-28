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
const Intern = (setnewMessage) => {
    
   let newmessage = useContext(notificationContext)

  const [data,setData] = useState([])

  const  [filter,setFilter] = useState("")
  const  [filterby,setFilterby] = useState("name")
  
  const [message,setMessage] = useState("")
  const [loading,setloading] = useState(true)

  const headings = ["name","function" ]

  
 
  const handleClick = (type,id) =>{
    console.log(message)
    setloading(true)
    if(type ==='del') {
      axios.delete(`http://localhost:8000/api/role_delete/${id}`)
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
    axios.get('http://localhost:8000/api/role')
    .then(function (response) {
      setData(response.data.role)
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
      },3000)
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
   
  if(filterby==="name") {
 return item.name.toLowerCase().includes(filter.toLowerCase()) 
  }

  if(filterby==="function") {
    return item.function.toLowerCase().includes(filter.toLowerCase()) 
     }
 
});

  

const changeFilter = (type) =>{
  setFilterby(type)
  setMessage(`filtering by ${type}`)
 }

  return (
    <motion.div 
    initial={{opacity:0,scale:0}}
    animate={{opacity:1,scale:[0,1]}}
    transition={{duration:1}}
    className="table"> 
       {loading?
      <>
      <Loader/>
      </>
       :
       <>
        {message?<div className="alert">
         <div className="alert-content">
          <p>{message}</p>
         </div>
       </div>  : ""}
    

    <div className="table-heading-add">
      <h1>List of Intern</h1>
       <NavLink exact="true" to="/add_role" className="add"><button className="btn"><BsPlus/>Add a Role</button></NavLink>
    </div>

    <div className="table-search">

      <SearchBox onSearchChange={onSearchChange}/>

      <div className="filter">

        <div className="filter-by dropdown">
          <button className="btn">Filter by<AiFillCaretDown/></button>
          <div className="dropdown-content">
            <p onClick={() => changeFilter('name')}>name</p>
            <p  onClick={() => changeFilter('function')}>function</p>
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
                 <td  className="t-data"  >{item.name}</td>
                 <td  className="t-data"  >{item.function}</td>
                  <td className="t-data t-icon" ><Link to={`/update_role/${item.id}`} ><FaPen className="blue"/></Link></td>
                 <td className="t-data t-icon" onClick={() => handleClick('del',item.id)} ><FaTrash className="red"/></td>
            </tr>
           </>
         ))}
    
   
         
         
    </tbody>
       </table>
    
       </>
       }
      
 
  
    </motion.div>
  )
}

export default Intern
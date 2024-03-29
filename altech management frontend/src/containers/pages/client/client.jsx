import React,{useContext, useEffect,useState} from 'react'
import {BsPlus} from "react-icons/bs"
import {AiFillCaretDown} from "react-icons/ai"
import {motion} from "framer-motion"
import { NavLink } from 'react-router-dom'
import axios from 'axios'
// import './style.scss'
import './mainStyle.scss'
import Loader from '../../../component/loader/loader'
import SearchBox from '../../../component/search/searchBox'
import Table from '../../../component/table/table'
import { notificationContext } from '../../../App'


const Client  = ({setnewMessage} ) => {

   let {message:newmessage,token} = useContext(notificationContext)
    

  const [data,setData] = useState([])

  const  [filter,setFilter] = useState("")
  const  [filterby,setFilterby] = useState("name")
  
  const [message,setMessage] = useState("")
  const [loading,setloading] = useState(true)
  const [time, setTime] = useState(4000)

  const headings = ["name","address","tel","email","website","category_id","category_name","creation date"]

  
 
  const handleClick = (type,id) =>{
    console.log(message)
    
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
    axios.get('http://localhost:8000/api/clients')
    .then(function (response) {
      setData(response.data.clients)
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
   
  if(filterby==="name") {
 return item.name.toLowerCase().includes(filter.toLowerCase()) 
  }

  if(filterby==="category_name") {
    return item.category_name.toLowerCase().includes(filter.toLowerCase()) 
     }


     if(filterby==="address") {
      return item.address.toLowerCase().includes(filter.toLowerCase()) 
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
      <h1>List of clients</h1>
        {token?<NavLink exact="true" to="/add" className="add"><button className="btn"><BsPlus/></button></NavLink>:""}
    </div>

    <div className="table-search">

      <SearchBox onSearchChange={onSearchChange}/>

      <div className="filter">

        <div className="filter-by dropdown">
          <button className="btn">Filter by<AiFillCaretDown/></button>
          <div className="dropdown-content">
            <p onClick={() => changeFilter('name')}>name</p>
            <p  onClick={() => changeFilter('category_name')}>category</p>
            <p  onClick={() => changeFilter('address')}>address</p>
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
    
    <Table data={filterdata} handleClick={handleClick} headings={headings} update="update_client"/>
    </motion.div>
       </>
       }
    
  </>
 
  
    
  )
}

export default  Client
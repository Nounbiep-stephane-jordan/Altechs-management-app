import React, { useContext,useState,useEffect } from 'react'
import { notificationContext } from '../../../App'
import {BsPlus} from "react-icons/bs"
import {AiFillCaretDown} from "react-icons/ai"
import {motion} from "framer-motion"
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Loader from '../../../component/loader/loader'
import SearchBox from '../../../component/search/searchBox'
import Table from '../../../component/table/table'

const Vendor = ({setnewMessage}) => {

  let {message:newmessage,token}  = useContext(notificationContext)

    const [data,setData] = useState([])
  
    const  [filter,setFilter] = useState("")
    const  [filterby,setFilterby] = useState("name")
  const [time, setTime] = useState(4000)
    
    const [message,setMessage] = useState("")
    const [loading,setloading] = useState(true)
  
    const headings = ["name","address","tel","email","website","category_id","category_name","creation date"]
  
    
   
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
  
  
    useEffect( () =>{
     
      console.log("here",newmessage,message)
      axios.get('http://localhost:8000/api/vendor')
      .then(function (response) {
        setData(response.data.vendors)
        setloading(false)
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      }) 
    },[message, newmessage])
  
   
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
      whileInView={{y:[100,0],opacity:[0,1]}}
      initial={{opacity:0}}
      animate={{opacity:1}}
    className="table"> 
        {message?<div className="alert">
         <div className="alert-content">
          <p>{message}</p>
         </div>
       </div>  : ""}
    

    <div className="table-heading-add">
      <h1>List of Vendors</h1>
       {token? <NavLink exact="true" to="/add_vendor" className="add"><button className="btn"><BsPlus/></button></NavLink>:""}
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
    
    <Table data={filterdata} handleClick={handleClick} headings={headings} update="update_vendor"/>
    </motion.div>
       </>
       }
      
 
  
    
    </>
  )
}

export default Vendor
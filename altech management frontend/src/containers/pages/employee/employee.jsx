import React,{useContext, useEffect,useState} from 'react'
import { notificationContext } from '../../../App'
import {BsPlus} from "react-icons/bs"
import {BiRightArrow} from "react-icons/bi"
import "./employee.css"
import {AiFillCaretDown} from "react-icons/ai"
import {motion} from "framer-motion"
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Loader from '../../../component/loader/loader'
import SearchBox from '../../../component/search/searchBox'
import {FaPen,FaTrash} from "react-icons/fa"
import { Link } from 'react-router-dom'
 
const Employee = ({setnewMessage}) => {
    
  let {message:newmessage,token} = useContext(notificationContext)

  const [data,setData] = useState([])

  const  [filter,setFilter] = useState("")
  const  [filterby,setFilterby] = useState("name")
  const [time, setTime] = useState(4000)
  
  const [message,setMessage] = useState("")
  const [loading,setloading] = useState(true)

  const headings = ["name","address","tel","email","age","sex","join date"]

  
 
  const handleClick = (type,id) =>{
    console.log(message)
    setloading(true)
    if(type ==='del') {
      axios.delete(`http://localhost:8000/api/employee_delete/${id}`)
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
    axios.get('http://localhost:8000/api/employee')
    .then(function (response) {
      setData(response.data.employee)
      console.log("here",response)
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

  if(filterby==="sex") {
    return item.sex.toLowerCase().includes(filter.toLowerCase()) 
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
       <div className="table">
       <Loader/>
       </div>
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
      <h1>List of Employees</h1>
      {token?<NavLink exact="true" to="/add_employee" className="add"><button className="btn"><BsPlus/></button></NavLink>:""}
     </div>

    <div className="table-search">

      <SearchBox onSearchChange={onSearchChange}/>

      <div className="filter">

        <div className="filter-by dropdown">
          <button className="btn">Filter by<AiFillCaretDown/></button>
          <div className="dropdown-content">
            <p onClick={() => changeFilter('name')}>name</p>
            <p  onClick={() => changeFilter('sex')}>sex</p>
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
    
    <table>
    <tbody>
    <tr className="headings">
         { headings.map((item,index) => ( 
           <th key={item} className="t-heading">{item}</th>
         ))}
         </tr>
       
         {filterdata.map((item,index) => ( 
           <>
            
            <tr className="data" id="main" key={item.id+index} >
                 <td  className="t-data"  >{item.name}</td>
                 <td  className="t-data"  >{item.address}</td>
                 <td  className="t-data"  >{item.tel}</td>
                 <td  className="t-data"  >{item.email}</td>
                 <td  className="t-data" >{item.age}</td>
                 <td  className="t-data" >{item.sex}</td>
                 <td  className="t-data" >{item.join_date}</td>
            </tr>

         <tr className="hover">

              
         {item.intern.map((item,index) => ( 
           <>
            <tr key={item.id+index} >
            <td  className="t-data-icon t-data"  >Interns<BiRightArrow className="hover-icon" /></td>
                 <td  className="t-data"  >{item.name}</td>
                 <td  className="t-data"  >{item.address}</td>
                 <td  className="t-data"  >{item.tel}</td>
                 <td  className="t-data"  >{item.theme}</td>
                 <td  className="t-data" >{item.age}</td>
                 <td  className="t-data" >{item.sex}</td>
                 <td  className="t-data" >{item.school}</td>
                 <td  className="t-data" >{item.start_date}</td>
                 <td  className="t-data" >{item.end_date}</td>
                 <td  className="t-data" >{item.supervisor_name}</td>
               </tr>
           </>
         ))}

             {item.roles.map((item,index) => ( 
           <>
            <tr  key={item.id+index} >
            <td  className="t-data-icon t-data"  >Roles<BiRightArrow className="hover-icon" /></td>
                 <td  className="t-data"  >{item.name}</td>
                 <td  className="t-data"  >{item.function}</td>
                  <td className="t-data t-icon" ><Link to={`/update_role/${item.id}`} ><FaPen className="blue"/></Link></td>
    
            </tr>
           </>
         ))}
         
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

export default Employee
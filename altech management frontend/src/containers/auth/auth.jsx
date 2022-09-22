import React,{useEffect,useState} from "react"
import axios from "axios"
import { useNavigate} from 'react-router-dom'
import "./auth.scss"
import { notificationContext } from "../../App"
import { useContext } from "react"
import {motion} from "framer-motion"

const Auth = ({setnewMessage,setToken}) => {
    const {message} = useContext(notificationContext)
    console.log(message , "up",useContext(notificationContext))
    const navigate = useNavigate()
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (e) =>{
        setData({...data,[e.target.name]:e.target.value})
     } 

     if(message) {
        setTimeout(()=>{
          setnewMessage("")
        },4000)
       }

    
     const handleSubmit = async(e) =>{
        setLoading(true)
        e.preventDefault()
       await axios.post(`http://localhost:8000/api/auth/login`,data)
        .then(response => {
            console.log(response)
            setToken(response.data.token)
            setnewMessage(response.data.mesage)
            navigate(`/home`)
            setLoading(false)
     })
        .catch(e => {
            console.log(e)
            setnewMessage("Ooops something happened")
            setLoading(false)
        })
     
     }
    
     const  handleGuest = () => {
        setToken()
        navigate("/home")
     }
    
    return (
        <>
      
      <motion.div className="home-form">
      {message?<div className="alert">
         <div className="alert-content">
          <p>{message}</p>
         </div>
       </div>  : ""}
        <h1>Login</h1>
      <form onSubmit={handleSubmit}  >
            <input type="text" name="name" placeholder="enter name" onChange={handleChange}/>
            <input type="email" name="email" placeholder="enter email" onChange={handleChange}/>
            <input type="password" name="password" placeholder="enter password" onChange={handleChange}/>
            <button type="submit" className="btn submit-btn"> {loading?"Loading":"submit"}</button>
        </form>
        <p>continue as guest </p>
            <button onClick={handleGuest} className="guest-btn btn">guest</button>
      </motion.div>
        </>
    )
}

export default Auth
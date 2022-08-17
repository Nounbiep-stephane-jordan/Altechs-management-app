import React,{useEffect,useState} from "react"
import axios from "axios"

const Auth = () => {
    
    return (
        <>
        <form>
            <input type="text" name="name" placeholder="enter name"/>
            <input type="email" name="email" placeholder="enter email"/>
            <input type="text" name="password" placeholder="enter password"/>
            <button type="submit">submit</button>
        </form>
        </>
    )
}
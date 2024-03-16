/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect,useState } from "react";
export default function VerifyEmailPage(){
const [token,setToken]=useState("");
const [verified,setVerified]=useState(false)


const verifyEmail=async()=>{

try {
  await axios.post('/api/users/verifyemail',{token})
  setVerified(true)
} catch (error) {
console.log(error)    
}



}
useEffect(()=>{
    const urlToken=window.location.search.split("=")[1]
 setToken(urlToken ||"")
},[])


useEffect(()=>{
    if(token.length>0){
        verifyEmail();
    }
},[token])

return(
    <div className="flex flex-col items-center justify-center min-h-screen py-2">


        <h1 className="text-4xl"> Verify Email</h1>
        <h2>{token?`${token}`:"no token"}</h2>
        {verified &&(<div>
            <Link className="bg-red-400" href="/login">Login</Link>
            
            </div>
            )}
    </div>
)



}


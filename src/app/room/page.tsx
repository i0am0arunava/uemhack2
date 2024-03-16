"use client"
import { useRouter } from "next/navigation"

import { useState, } from "react";

const Sports = () => {
    const router = useRouter()

  const[roomId,setroomId]=useState('')
  function handleJoin(){
    router.push(`/conference/${roomId}`)
  }
  return (
<main><h1>Video application</h1>


<input type="text" placeholder="Enter Room Id"
value={roomId}
onChange={(e)=>setroomId(e.target.value)}/>
<button onClick={handleJoin} className="bg-blend-color-dodge"> Click</button>

</main>
  )
}
export default Sports;
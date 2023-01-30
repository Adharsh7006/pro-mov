import React, { useContext, useEffect } from 'react'
import { samplecontext } from './App'

function Card() {
    const {name,number,setname,setnumber,sample,setsample}=useContext(samplecontext)
    console.log(name,number,setname,setnumber)
    
    useEffect(() => {
        setsample("this is sample")
        
      
      
    }, [])
    
  return (
    <div>
        <h1>hai {name}</h1>
        <button onClick={()=>setname("vishakh")}>click</button>
        <h1>hai {number}</h1>
        <button onClick={()=>setnumber(120)}>click</button>
        <h1>{sample}</h1>
    </div>
  )
}

export default Card
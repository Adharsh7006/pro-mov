import React, { useState } from 'react'
import axios from 'axios'

function Api() {
    axios.get("https://dummyjson.com/products").then((res)=>{
        console.log(res.data.products)
        setfirst(res.data.products)
    })
    const [first, setfirst] = useState([])
  return (
    first.map((arg)=>
    <div>{arg.title}</div>
    )
  )
}

export default Api
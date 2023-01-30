import React, { useContext } from 'react'
import { samplecontext } from './App'

function Context() {
    const {sample,setsample}=useContext(samplecontext)
    console.log(sample,setsample)
  return (
    <div>
        <h1>Hello {sample}</h1>
    </div>
  )
}

export default Context
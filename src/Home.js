import React, { useContext } from 'react'
import { samplecontext } from './App'

function Home() {
    const acc=useContext(samplecontext)
    console.log(acc)
  return (
    <div>
        <h1>Hey {acc.name}</h1>

    </div>
  )
}

export default Home
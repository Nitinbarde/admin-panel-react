import React from 'react'
import { useState } from 'react'

function Hooks() {


  const [count,setCount] = useState(10)

const increase =()=>{
  setCount(count+1)
  console.log("incsae")
}

  return (
    <div>
      

      <h2>number</h2>
      <h3>{count}</h3>
      <button onClick={increase}>Increase</button>
    </div>
  )
}

export default Hooks

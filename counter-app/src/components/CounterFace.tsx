import React, { useState } from 'react'

export default function Counter() {
    const [count , setCount] = useState(0)
  return (
    <div>
    <p id='title'>{count}</p>
    <button className='button' id='increase' onClick={()=>{
      setCount(count+1)
    }}>Increase</button>
    <button className='button' id='reset' onClick={()=>{
      setCount(0)
    }}>Reset</button>
    <button className='button' id='decrease' onClick={()=>{
      setCount(count-1)
    }}>Decrease</button>
    </div>
  )
}

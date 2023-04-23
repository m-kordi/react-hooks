import React from 'react'
import { useState, useEffect, useRef } from 'react'

function Xuseref() {
    const[name, setName]=useState('')
    const prevName= useRef('')

    useEffect(()=>{
        prevName.current = name
    },[name])
  return (
    <>
    <h1>[3]-useRef</h1>
    <input value={name} placeholder='Enter your name here' type="text" onChange={e=>{setName(e.target.value)}} />
    <div>my name is {name} and it used to be {prevName.current}</div>
    
    <h1>not:</h1>
    <h2>useRef save your previos value which useState can not do</h2>
    </>
  )
}

export default Xuseref
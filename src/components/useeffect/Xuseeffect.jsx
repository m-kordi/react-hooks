import React from 'react'
import {useState, useEffect } from 'react'

function Xuseeffect() {
    let y = 1;
    const [comp, setComp]=useState(()=>{return y});
    
    function compset(){
    setComp(()=>{return (comp+1)});
}

    useEffect(()=>{console.log("said effect")}, [comp])

    return (
    <>
    <h1>[2]-useEffect</h1>

    <div>{`useState value is ${y} and the new value is ${comp} `}</div>
    <button onClick={compset}>make said effect</button>

    <h1>nots:</h1>
    <h2>check out the console</h2>
    <h2>every time you chang the state of comp said effect will happen</h2>
    </>
    )
}

export default Xuseeffect
import React from 'react'
import { useState } from 'react';

function Xusestate() {
  /* level 0 */
    let x ='Mohsen'
    const[name,setName]=useState(()=>{return x});

    /* level 1 */
    let y ='Mohsen'
    let z ="zakria"
    const[objname,setObjname]=useState({firstName:y, lastName:z});

    /* level 2 */
    let a ="Mohsen"
    let b ="zakria"
    const[arrname,setArrname]=useState([a,b]);
    /* console.log(arrname[0],arrname[1]) */
  return (
    <>
        <h1>[1]-useState</h1>
        {/* level 0 */}
        <h2>level 0</h2>
        <div>{`the orginale name is ${x}`}</div>
        <button onClick={()=>{return setName(()=>{return "Ahmed"})}}>chang name</button>
        <div>{`the new name is ${name ==="Ahmed"? name:" "}`}</div>
        

        {/* level 1 */}
        <h2>level 1: useState + object</h2>
        <div>{`the orginale first name is ${y} and last name is ${z}`}</div>
        <button onClick={()=>{setObjname(()=>{return {...objname,firstName:"Ahmed",lastName:"noor"}})}}>chang name</button>
        <div>{`the new  first name is ${objname.firstName ==="Ahmed"? objname.firstName:"{}"} and new last name is ${objname.lastName ==="noor"? objname.lastName:"{}"}`}</div>

        {/* level 2 */}
        <h2>level 2: useState + array</h2>
        <div>{`the orginale first name is ${a} and last name is ${b}`}</div>
        <button onClick={()=>{setArrname([arrname[0]="Ahmed",arrname[1]="noor"])}}>chang name</button>
        <div>{`the new  first name is ${arrname[0]==="Ahmed"?arrname[0]:"{}"} and new last name is ${arrname[1]==="noor"?arrname[1]:"{}"}`}</div>
        
        




    </>
  )
}

export default Xusestate
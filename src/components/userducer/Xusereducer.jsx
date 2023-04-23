import React from 'react'
import { useReducer } from 'react'

function Xusereducer() {
  const initialvalue=0;

  const reducer=(state, action)=>{
    // you can use switch or if dose not matter
    switch(action){
      case "add":
        return state + 1
      case "sub":
        return state - 1
      case "reset":
        return 0
      default:
        return state
    }
  }
  const[state, dispatch]=useReducer(reducer,initialvalue)
  return (
    <>
    <h1>[4]-useReducer</h1>
    <button onClick={()=>{dispatch("add")}}>+</button>
    <button onClick={()=>{dispatch("sub")}}>-</button>
    <button onClick={()=>{dispatch("reset")}}>reset</button>
    <h1>{state}</h1>

    <h1>not:</h1>
    <h2>usereducer have 4 main element </h2>
    <h3>1-state: you can handle it exactly like state in useState</h3>
    <h3>2-dispatch: you can handle it exactly like setState in useState </h3>
    <h3>3-reducer: it is function that control useReducer actions </h3>
    <h3>4-initialvalue: the first and initial value in your useReducer</h3>

    </>
  )
}

export default Xusereducer
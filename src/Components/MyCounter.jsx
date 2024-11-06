import React, { useState } from 'react'
import useCount from './useCount'
const MyCounter = () => {

  // const [count,setCount]=useState(0)

  // function Increment(){
  //   setCount(count+1)
  // }
  //  function Decrement() {
  //    setCount(count - 1);
  //  }
  const [count, Increment, Decrement]=useCount(0)
  return (
    <>
    <h2>My Counter</h2>
    <h3>Count: {count}</h3>
    <button onClick={Increment}>Increment</button>
    <button onClick={Decrement}>Decrement</button>
    </>
  )
}

export default MyCounter
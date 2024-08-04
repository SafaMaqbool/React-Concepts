import React from 'react'
import { useEffect, useState } from 'react'

const Hooks = (props) => {

    const [count, setcount]=useState(0)

    useEffect(()=>{
        console.log("use effect hook")
         console.log("Prop Value", props);
    })
  return (
    <>
      <h1>Hooks in React | Use Effect Hook</h1>
      <h3>Count: {count}</h3>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Click
      </button>
      <h3>Name: {props.data}</h3>
      
    </>
  );
}

export default Hooks
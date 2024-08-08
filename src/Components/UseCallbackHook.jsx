import React, { useCallback, useState } from 'react'
import ExampleUseCallback from './ExampleUseCallback'

const UseCallbackHook = () => {
    const [item,setItem]=useState(2)
    const [count, setCount]=useState(0)
    
    const newData = useCallback(() => {
      console.log("i am new data function", item);
    },[item]); //so it only recreates when item gets updated 
  return (
    <>
    <h1>Use Call Back Hook </h1>
    <h2>Count : {count}</h2>
    <button onClick={()=>{setCount(count+1)}}>Click</button>
    <ExampleUseCallback item={item} data={newData}/>
    <button onClick={()=>{setItem(item*2)}}>update Item</button>
    </>
  )
}

export default UseCallbackHook
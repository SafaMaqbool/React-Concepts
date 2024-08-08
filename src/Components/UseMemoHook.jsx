import React, { useState, useMemo } from 'react'

const UseMemoHook = () => {
    const[count, setCount]=useState(0)
    const [data,setData]=useState(2)
    // function multi(){
    //   console.log("multi function for count state") // even if we update data this gets called even though value isnt updating but this is being called 
    //   return count * 2;
    // }

    // thats why we use use memo
    const multiply = useMemo(function multi(){
      return count * 2
    },[count]) // in this dependency array we tell on which status update we want to call this here, we want only when count gets update this should be called 
  return (
    <>
    <h1>Use memo hook</h1>
    <h2>Count: {count}</h2>
    <h3>{multiply}</h3>
    <button onClick={()=>{setCount(count+1)}}>Update Count</button>
    <h2>Data: {data}</h2>
    <button onClick={()=>{setData(data*10)}}>Upate Data</button>

    </>
  )
}

export default UseMemoHook
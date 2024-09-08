// import React, { useState } from 'react'

import Hoc from "./Hoc"

const OnClick = ({value,increment}) => {
    // const[count,setCount]=useState(0);
    // const updateCount=()=>{
    //     setCount(count+1)
    // }
  return (
    <>
    <h1>Count: {value}</h1>
    <button onClick={increment}>Update Count</button>
    </>
  )
}

export default Hoc(OnClick);
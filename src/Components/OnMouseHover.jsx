// import React, { useState } from 'react'

import Hoc from "./Hoc"

const OnMouseHover = ({value, increment}) => {
    // const [data,setData]=useState(0);
    // const increment=()=>{
    //     setData(data+1)
    // }
  return (
    <>
    <h1>data: {value}</h1>
    <button onMouseOver={increment}>Update Data</button>
    </>
  )
}

export default Hoc(OnMouseHover); 
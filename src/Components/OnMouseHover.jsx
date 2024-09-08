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
//repeating logic should be in HOC Component and then passed down
export default Hoc(OnMouseHover); 
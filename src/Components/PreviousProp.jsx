import React, { useEffect, useRef } from 'react'

const PreviousProp = (prop) => {
    let prevValue=useRef();

    useEffect(()=>{
      prevValue.current=prop.item
    },[])
    const prevProp=prevValue.current
  return (
   <>
   <h1>Previous Props in React JS</h1>
   <h2>Current Value :{prop.item}</h2>
   <h3>Previous Value: {prevProp}</h3>

   </>
  )
}

export default PreviousProp
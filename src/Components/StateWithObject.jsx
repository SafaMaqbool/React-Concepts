import React, { useState } from 'react'

const StateWithObject = () => {

    const [info,setInfo]=useState({name:"safa",age:22})
  return (
  <>
  <h1>State with Object in react js</h1>
  <input type="text" value={info.name} onChange={(e)=>setInfo({/*age:info.age,*/...info,name:e.target.value})} />
  <input type="text" value={info.age} onChange={(e)=>setInfo({name:info.name,age:e.target.value})} />
  <h3>Name: {info.name}</h3>
  <h3>Age: {info.age}</h3>
  </>
  )
}

export default StateWithObject
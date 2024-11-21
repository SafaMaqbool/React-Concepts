import React from 'react'
import { useLocation, useParams } from 'react-router-dom';

const Employee = () => {
      const { name,age } = useParams();
      const location =useLocation()
      console.log(location)
  return (
    <>
    <h1>{name} is a employee and his age is {age}</h1>
    </>
  )
}

export default Employee
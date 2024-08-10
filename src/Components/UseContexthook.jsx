import React, { useState, createContext } from 'react'
import Firstchild from './Firstchild'


//context should be global
export const MyData= createContext()
const UseContexthook = () => {
  const[data,setData]=useState(1)
  const [salary,setSalary]=useState(0)

  const getSalary=(val)=>{
    console.log("salary is: ",val)
    setSalary(val)
    

  }
  return (
    <MyData.Provider value={{valueData:data, getSalary:getSalary}}>
      <>
        <h1>Use Context Hook | context api in react</h1>
        <h2>salary from super child component: {salary}</h2>
        <button
          onClick={() => {
            setData(data + 1);
          }}
        >
          Update Data
        </button>
        <Firstchild />
      </>
    </MyData.Provider>
  );
}

export default UseContexthook
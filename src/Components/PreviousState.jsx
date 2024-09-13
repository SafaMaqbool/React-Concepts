import React, { useState } from 'react'

const PreviousState = () => {
    const [count,setCount]=useState(0);
    const updateCount=()=>{
        // setCount(count+1)
        // let random = Math.floor(Math.random()*10)
        // setCount((prev)=>{
        // //   console.log(prev)
        // //   return count + 1
        // if(prev+random >6){
        //     console.log(`Hello ${prev} and ${random}`)
        // }
        // return random
        // })

        //example 2
        for(let i=0; i<5; i++){
        //   setCount(count+1) //works unexpected instead of adding 5 times its works one time bec previous state is not maintained
          setCount((prev)=>{
            return prev +1
          })
        }
    }

  return (
    <>
    <h1>Previous State in React JS</h1>
    <h3>Count: {count}</h3>
    <button onClick={updateCount}>Click Me</button>
    </>
  )
}

export default PreviousState
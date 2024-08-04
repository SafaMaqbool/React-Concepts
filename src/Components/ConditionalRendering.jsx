import React from 'react'
import { useState } from 'react'

const ConditionalRendering = () => {

    const [vote,setVote]=useState(false)
    const [age,setAge]=useState();
  return (
    <div>
        {/* if - else is not recommended as more lines of code and re renders again and again */}
        {/* logical and or shortcut circuit */}
        {vote && <h2>You can vote</h2>}
        {
        age === 10? <h2>you r a kid</h2>: age === 27? <h2>you are 27</h2> :age ===67? <h1>you are old</h1>: <h2>u r teen </h2>
        }
    </div>
  )
}

export default ConditionalRendering
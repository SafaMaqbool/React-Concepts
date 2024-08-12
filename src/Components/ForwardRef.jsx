import React from 'react'
import ChildForwardRef from './ChildForwardRef'
import { useRef } from 'react'

const ForwardRef = () => {
    let myRef=useRef()

    function updateInput() {
        myRef.current.value="safa maqbool"
    }
  return (
   <>
   <h1>Forward Ref in React js</h1>
   <ChildForwardRef ref={myRef}/>
   <button onClick={()=>updateInput()}>Click</button>
   </>
  )
}

export default ForwardRef
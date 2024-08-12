import React from 'react'
import { useRef } from 'react'

const UseRefHook = () => {
    let myRef=useRef()

    function modifyInput(){
        // console.log(myRef.current.value)
        myRef.current.value="safa"
        myRef.current.style.backgroundColor="yellow"
        myRef.current.focus()
    }
  return (
   <>
   <h1>Use Ref hook</h1>
   <input type="text" ref={myRef} />
   <button onClick={()=>modifyInput()}>click me</button>
   </>
  )
}

export default UseRefHook
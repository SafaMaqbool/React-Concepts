import React,{forwardRef} from 'react'

const ChildForwardRef = (props,ref) => {
  return (
    <>
    <h1>Child Forward Ref</h1>
    <input type="text" ref={ref} />
    </>
  )
}

export default forwardRef(ChildForwardRef);
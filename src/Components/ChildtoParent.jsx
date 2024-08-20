import React from 'react'

const ChildtoParent = (prop) => {
    let user="safa"
  return (
    <>
    <h2>Child Component of Lifting State Up</h2>
    {/* <h3>Name: {prop.item}</h3> */}
    <button onClick={()=>{prop.item(user)}}>Click</button>
    </>
  )
}

export default ChildtoParent
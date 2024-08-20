import React from 'react'
import ChildtoParent from './ChildtoParent'

const LiftingStateUp = () => {

    // let user="safa";
    function sayHello(n){
        alert("say hello"+n)
    }
  return (
    <>
      <h1>Lifting State Up in React Js</h1>
      {/* <ChildtoParent item={user}/> */}
      <ChildtoParent item={sayHello} />
    </>
  );
}

export default LiftingStateUp
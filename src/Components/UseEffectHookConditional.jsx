import React, { useEffect, useState } from 'react'

const UseEffectHookConditional = () => {
      const [age, setAge] = useState(22);
      const [count, setCount] = useState(0);

    useEffect(()=>{
      console.log("use effect hook with count state", count)
    },[count])
    useEffect(() => {
      console.log("use effect hook with age state", age);
    }, [age]);
  return (
    <>
      <h1>use effect with conditions</h1>
      <h3>Age: {age}</h3>
      <h3>Count: {count}</h3>
      <button
        onClick={() => {
          setAge(age + 1);
        }}
      >
        Update Age
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Update Count
      </button>
    </>
  );
}

export default UseEffectHookConditional
import React, { useReducer } from 'react'

const initialState=0;
const reducer=(state, action)=>{
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;

      default:
       return state
    }
}

const UseReducerHook = () => {
    const [count,dispatch]=useReducer(reducer, initialState);
  return (
    <>
      <h1>Use Reducer Hook in React Js</h1>
      <h3>Count: {count}</h3>
      <button onClick={()=>{dispatch("increment")}}>Increment</button>
      <button onClick={()=>{dispatch("decrement")}}>Decrement</button>
    </>
  );
}

export default UseReducerHook
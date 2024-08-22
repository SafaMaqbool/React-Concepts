import React, { useState } from "react";

const ControlledComponent = () => {
  const [item, setItem] = useState("Hello");
  return (
    <>
      <h1>Controlled Component in React Js</h1>
      <input
        type="text"
        placeholder="enter value"
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      {/* <input type="text" placeholder='enter value' defaultValue={"hello"} onChange={(e)=>{setItem(e.target.value)}}/> */}
      <h3>Value: {item}</h3>
    </>
  );
};

export default ControlledComponent;

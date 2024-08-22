import React, { useRef } from "react";

const UncontrolledComponent = () => {
  let myRef = useRef(null);
  let value= document.getElementById("my-id").value

  function myForm(e) {
    e.preventDefault();
    // alert("First input: " + myRef.current.value);
      let value = document.getElementById("my-id").value;
    alert("Second input: "+ value)
  }

  return (
    <>
      <h1>Uncontrolled Component in React</h1>
      <form onSubmit={myForm}>
        {/* <input type="text" ref={myRef} /> <br /> */}
        <input type="text" id="my-id" /> <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UncontrolledComponent;

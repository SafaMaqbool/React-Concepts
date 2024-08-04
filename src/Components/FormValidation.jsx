import React, { useState } from "react";

const FormValidation = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const [pwerr, setpwERR] = useState(false);

  function emailHandler(e) {
    console.log(e.target.value);
    let element = e.target.value;
    if (element.length < 3) {
      setErr(true);
    } else {
      setErr(false);
    }
    setEmail(element); // Corrected this line
  }

  function passHandler(e) {
    console.log(e.target.value);
    let element = e.target.value;
    if (element.length < 5) {
      setpwERR(true);
    } else {
      setpwERR(false);
    }
    setPassword(element);
  }

  function loginForm(e) {
    e.preventDefault();
    if (email.length < 3 || password.length < 5) {
      alert("please fill form properly");
    } else {
      console.log(email);
      console.log(password);
      alert("thanksss");
    }
  }

  return (
    <div>
      <h2>Form validation in React.js</h2>
      <form onSubmit={loginForm}>
        <input type="text" onChange={emailHandler} placeholder="Enter email:" />
        {err ? <span>Min 3 letters required</span> : <span></span>}
        <br />
        <br />
        <input
          type="password"
          onChange={passHandler}
          placeholder="Enter your password:"
        />  
        {pwerr ? <span>Min 5 letters required</span> : <span></span>}
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;

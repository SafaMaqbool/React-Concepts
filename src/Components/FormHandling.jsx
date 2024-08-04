import React from "react";
import { useState } from "react";

const FormHandling = () => {
  const [name, setName] = useState("");
  const [option, setOption] = useState("");
  const [agree, setAgree] = useState(false);

  function getFormData(e) {
    e.preventDefault();
    console.log(name, option, agree);
  }

  return (
    <div>
      <h2>Form Handling in React JS</h2>
      <form onSubmit={getFormData}>
        <input
          type="text"
          placeholder="Enter your Name:"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <select onChange={(e) => setOption(e.target.value)}>
          <option value="">Select any option</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
        <br />
        <input type="checkbox" onChange={(e) => setAgree(e.target.checked)} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormHandling;

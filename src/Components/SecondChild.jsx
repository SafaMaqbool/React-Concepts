import React from 'react'
import { useContext } from "react";
import { MyData } from "./UseContexthook";

const SecondChild = () => {
  const { valueData,getSalary } = useContext(MyData);
  const salary = 50000;
  return (
    <>
      <h2>secon child of context hook</h2>
      <h2>value data in second child: {valueData}</h2>
      <button onClick={()=>getSalary(salary)}>Salary: </button>
    </>
  );
}

export default SecondChild
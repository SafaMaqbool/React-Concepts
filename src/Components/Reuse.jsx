import React from "react";
import Employee from "./Employee";

const Reuse = () => {
  const employeeInfo = [
    { name: "Safa", email: "Safa@gmail.com", contact: "123345" },
    { name: "Wani", email: "Wani@gmail.com", contact: "123333" },
    { name: "Laiba", email: "laiba@gmail.com", contact: "123445" },
    { name: "Maryam", email: "marium@gmail.com", contact: "1233345" },
  ];

  return (
    <>
      <h1>ReUse in React Js</h1>
      {employeeInfo.map((item, i) => (
       <Employee data={item}/>
      ))}
    </>
  );
};

export default Reuse;

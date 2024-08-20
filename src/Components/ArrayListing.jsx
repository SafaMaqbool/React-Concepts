import React from "react";

const ArrayListing = () => {
  const employeeInfo = [
    { name: "Safa", email: "Safa@gmail.com", contact: "123345" },
    { name: "Wani", email: "Wani@gmail.com", contact: "123333" },
    { name: "Laiba", email: "laiba@gmail.com", contact: "123445" },
    { name: "Maryam", email: "marium@gmail.com", contact: "1233345" },
  ];

  return (
    <>
      <h1>Array Listing With Map Function</h1>
      <table border={1}>
        <tbody>
          {employeeInfo.map((emp, index) => (
            <tr key={index}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ArrayListing;

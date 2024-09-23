import React, { useEffect, useState } from "react";

const ApiCalling = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((response) => {
        console.log("Response: ", response);
        setData(response);
      });
    });
  }, []);

  return (
    <>
      <h1>API Calling</h1>
      <table border={1}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>UserName</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {data.map((val) => (
            <tr key={val.id}>
              {" "}
              {/* Added a key prop */}
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.username}</td>
              <td>{val.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ApiCalling;

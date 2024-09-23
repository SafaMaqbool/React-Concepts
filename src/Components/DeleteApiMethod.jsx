import React, { useEffect, useState } from "react";

const DeleteAPIMethod = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    showList();
  }, []);

  const showList = () => {
    fetch("http://localhost:3000/users")
      .then((result) => result.json())
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };

  const deleteRecord = (userId) => {
    fetch(`http://localhost:3000/users/${userId}`, {
      // Corrected URL
      method: "DELETE",
    })
      .then((result) => {
        if (!result.ok) {
          throw new Error("Network response was not ok");
        }
        return result.json();
      })
      .then((response) => {
        console.log("Result: ", response);
        showList(); // Refresh the list after deletion
      })
      .catch((error) => {
        console.error("Error deleting record:", error);
      });
  };

  return (
    <>
      <h2>Delete API Method</h2>
      <table border="1">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Age</td>
            <td>Salary</td>
            <td>Delete Record</td>
          </tr>
        </thead>
        <tbody>
          {data.map((val, i) => (
            <tr key={i}>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.salary}</td>
              <td>
                <button onClick={() => deleteRecord(val.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DeleteAPIMethod;

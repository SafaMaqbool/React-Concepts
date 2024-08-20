import React from "react";

const NestedListWithNestedArray = () => {
  const employeeInfo = [
    {
      name: "Safa",
      email: "Safa@gmail.com",
      address: [
        { houseNo: "123", city: "karachi", country: "Pakistan" },
        { houseNo: "456", city: "dhaka", country: "Bangladesh" },
        { houseNo: "678", city: "Mumbai", country: "India" },
      ],
    },
    {
      name: "Wani",
      email: "Wani@gmail.com",
      address: [
        { houseNo: "123", city: "karachi", country: "Pakistan" },
        { houseNo: "456", city: "dhaka", country: "Bangladesh" },
        { houseNo: "678", city: "Mumbai", country: "India" },
      ],
    },
    {
      name: "Laiba",
      email: "laiba@gmail.com",
      address: [
        { houseNo: "123", city: "karachi", country: "Pakistan" },
        { houseNo: "456", city: "dhaka", country: "Bangladesh" },
        { houseNo: "678", city: "Mumbai", country: "India" },
      ],
    },
    {
      name: "Maryam",
      email: "marium@gmail.com",
      address: [
        { houseNo: "123", city: "karachi", country: "Pakistan" },
        { houseNo: "456", city: "dhaka", country: "Bangladesh" },
        { houseNo: "678", city: "Mumbai", country: "India" },
      ],
    },
  ];

  return (
    <>
      <h1>Nested List With Nested Array</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {employeeInfo.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <table border="1">
                  <thead>
                    <tr>
                      <th>House No</th>
                      <th>City</th>
                      <th>Country</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.address.map((data, addrIndex) => (
                      <tr key={addrIndex}>
                        <td>{data.houseNo}</td>
                        <td>{data.city}</td>
                        <td>{data.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default NestedListWithNestedArray;

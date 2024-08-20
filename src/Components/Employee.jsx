import React from 'react'

const Employee = (prop) => {
  return (
    <>
      <h1>{prop.data.name}</h1>
      <h1>{prop.data.email}</h1>
      <h1>{prop.data.contact}</h1>
    </>
  );
}

export default Employee
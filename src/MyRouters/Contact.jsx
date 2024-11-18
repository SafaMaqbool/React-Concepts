import React from 'react'
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate=useNavigate()
    const handleClick=()=>{
        let bool=true
        if(bool){
            navigate('/')
        }
        else{
            navigate('/about')
        }
    }
  return (
    <>
      <h1>Contact</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home Page
      </button>
      <br />
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        Go to About Page
      </button>
      {/* <button
        onClick={() => {
          handleClick;
        }}
      >
        Go to About Page
      </button> */}
    </>
  );
}

export default Contact
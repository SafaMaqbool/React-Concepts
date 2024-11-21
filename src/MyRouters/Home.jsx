import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("login");
    navigate("/login");
  };
  // const location = useLocation()
  // console.log(location)
  return (
    <>
      <div>Home</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Home;

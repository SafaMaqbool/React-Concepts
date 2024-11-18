import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul className="nav">
        <li>
          <NavLink
            to="/home"
            style={({ isActive }) =>
              isActive
                ? { color: "blue", fontWeight: "bold" }
                : { color: "black", fontWeight: "normal" }
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) =>
              isActive
                ? { color: "blue", fontWeight: "bold" }
                : { color: "black", fontWeight: "normal" }
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) =>
              isActive
                ? { color: "blue", fontWeight: "bold" }
                : { color: "black", fontWeight: "normal" }
            }
          >
            Contact
          </NavLink>
          <NavLink to='/search'>
            Search
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;

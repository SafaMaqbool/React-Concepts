import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <li>
        <Link to="/employee/farzeen/22">Farzeen</Link>
        <Link to="/employee/huzaifa/25">Huzaifa</Link>
      </li>
    </div>
  );
}

export default About
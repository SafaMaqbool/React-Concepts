import React from 'react'
import './Style.css'
import home from './home.module.css'
const StylinginReact = () => {
  return (
    <>
      <h2 className='heading'>3 ways For Style in ReactJS (External)</h2>
      <h2 style={{ backgroundColor:'palegreen'}}>3 ways For Style in ReactJS (Inline Style)</h2>
      <h2 className='home.heading'>3 ways For Style in ReactJS (css module)</h2>
    </>
  );
}

export default StylinginReact
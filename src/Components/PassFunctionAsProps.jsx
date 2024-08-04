import React from 'react'

const PassFunctionAsProps = (props) => {
  return (
    <div>
        
        <button onClick={props.data}>Click Me</button>
    </div>
  )
}

export default PassFunctionAsProps
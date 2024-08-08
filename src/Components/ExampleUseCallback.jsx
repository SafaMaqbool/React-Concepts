import React, { memo } from 'react'

const ExampleUseCallback = (props) => {
    console.log("i am a child component",props)
  return (
   <>
   <h3>item: {props.item}</h3>
   </>
  )
}

export default memo( ExampleUseCallback)
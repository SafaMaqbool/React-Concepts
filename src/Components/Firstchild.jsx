import React from 'react'
import SecondChild from './SecondChild'
import { useContext } from 'react'
import {MyData} from './UseContexthook'

const Firstchild = () => {
  const {valueData}=useContext(MyData)
  return (
   <>
   <h2>first child of context api</h2>
   <h2>value data: {valueData}</h2>
   <SecondChild/>
   </>
   
  )
}

export default Firstchild
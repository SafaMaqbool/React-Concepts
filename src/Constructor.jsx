import React, { Component } from 'react'

export class Constructor extends Component {
  constructor(){
    super()
    console.log("i am constructor")
    this.state={
      name:"safa maqbool"
    }
  }
  render() {
    console.log("i am render")
    return (

      <>
      <h2>constructor life cylce method</h2>
      <h3>hello, {this.state.name}</h3>

      </>
    )
  }
}

export default Constructor
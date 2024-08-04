import React, { Component } from 'react'

class ComponentDidMount extends Component {
    constructor(){
        super()
        console.log("constructor")
    }
    componentDidMount(){
        console.log("component did mount")
    }
  render() {
    console.log("render")
    return (
      <div>Component Did Mount | Life Cycle Method (Mounting)   </div>
    )
  }
}

export default ComponentDidMount
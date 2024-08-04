import React, { Component } from 'react'

export class ForToggle extends Component {
    componentWillUnmount(){
        alert("component will unmount")
    }
  render() {
    return (
      <>
      <h1>Toggle component</h1>
      </>
    )
  }
}

export default ForToggle
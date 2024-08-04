import React, { Component } from 'react'
import ForToggle from './ForToggle'

 class ComponentWillUnmount extends Component {
    constructor()
    {
        super();
        this.state={
            show: true

        }
    }
  render() {
    return (
      <>
      <h1>Component will unmount</h1>
      {this.state.show?  <ForToggle/>: <h2>Toggle component is removed</h2> }
      <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle Button</button>
      
      </>
    )
  }
}

export default ComponentWillUnmount
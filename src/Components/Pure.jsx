import React, { Component, PureComponent } from 'react'

export class Pure extends PureComponent {
    constructor(){
        super();
        this.state={
            count:0
        }
    }
  render() {
    console.log("re-rendering")
    return (
    <>
    <h1>pure components in react js </h1>
    <h2>count: {this.state.count}</h2>
    <button onClick={()=>{this.setState({count:1})}}>click me </button>
    </>
    )
  }
}



export default Pure
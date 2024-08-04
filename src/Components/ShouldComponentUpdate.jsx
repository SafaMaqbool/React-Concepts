import React, { Component } from 'react'

class ShouldComponentUpdate extends Component {
    constructor(){
        super()
            this.state={
                count:0
            }
        
    }
    shouldComponentUpdate(){
        console.log("should component update",this.state.count) //since render hasnt been called yet the count here is the prev count
        return true;
    }
  render() {
    return (
      <>
      <h1>Should Component Update| life cycle method</h1>
      <h3>count:{this.state.count}</h3>
      <button onClick={()=>this.setState({count:this.state.count+1})}>Click</button>
      </>
    )
  }
}

export default ShouldComponentUpdate
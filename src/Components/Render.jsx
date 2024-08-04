import React, { Component } from 'react'

 class Render extends Component {
    constructor(){
        super();
        this.state={
            dep:"CS"
        }
    }
  render() {
    console.log("render", this.state)
    console.log("props rendered", this.props)
    return (
      <div>
         <h1>Render Life Cycle Method</h1>
         <h3>{this.state.dep} Department</h3>
         <button onClick={()=>{this.setState({dep:"IT"})}}>Update Department</button>
         <h3>Hello {this.props.data}</h3>

      </div>
    )
  }
}

export default Render
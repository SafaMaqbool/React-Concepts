import React, { Component } from 'react'

class ComponentDidUpdate extends Component {
    constructor(){
        super()
        console.log("constructor")
        this.state={
            count: 0
        }
    }

    componentDidUpdate(prevProp, prevState,snapshots){
        console.log("component did update",prevState.count,this.state.count)
        if(prevState.count===this.state.count){
            alert("Counts are same")
        }
        // this.setState({count:this.state.count+1}) //call state updates again get called so infinite loops
        if(this.state.count<5){
            this.setState({count:this.state.count+5})
        }   
    }
  render() {
    console.log("render")
    return (
      <div>Component Did Update | Life Cycle Method
        <h4>Hello {this.state.count}</h4>
        <button onClick={()=>{this.setState({count:1})}}>Click</button>
      </div>
    )
  }
}
export default ComponentDidUpdate
import React, { Component } from 'react'

export class GetSnapshotbeforeUpdate extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("component did update", snapshot, this.props.data)
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Get snapshot before update")
        // return "Hello"+prevProps.data
        return prevState.count*10
    }
  render() {
    return (
      <>
      <h2>Get Snapshot Before Update</h2>
      <h3>Hello,{this.props.data}</h3>
      <h3>count: {this.state.count}</h3>
      <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update Count</button>
      </>
    )
  }
}

export default GetSnapshotbeforeUpdate
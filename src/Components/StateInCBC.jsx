import { Component } from "react";
class StateINCBC extends Component{
    constructor(){
        super();
        this.state={
            name:"safa"
        }
    }
    updateName(){
        // alert("hi")
        this.setState({name : "farzeen"})
    }

    render(){
     
        return(
            <div>
                <h2>States in class based component</h2>
                <h3>{this.state.name} is learning states in class based component</h3>
                <button onClick={()=>this.updateName()}>Click Me</button>
            </div>
        )
    }
        
}
export default StateINCBC;
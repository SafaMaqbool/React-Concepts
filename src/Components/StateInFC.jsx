import React,{useState} from "react";
function StateINFC(){
    
    const [val, setname]= useState(0)
    function updateVal(){
        setname(val+1)
    }
    
    console.log("rendering")
    return(
        <div>
            <h2>Countdown: {val}</h2>
            <button onClick={updateVal}>Click Me</button>
        </div>
    )

}
export default StateINFC;
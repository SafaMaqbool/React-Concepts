import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import FuncComponent from "./Components/FuncComponents";
import ClassComponent from "./Components/ClassComponent";
import ClickEvent from "./Components/ClickEvent";
import StateINFC from "./Components/StateInFC";
import StateINCBC from "./Components/StateInCBC";
import PropsInFc from "./Components/PropsInFc";
import PropsinCBC from "./Components/PropsinCBC";
import GetInputFieldValue from "./Components/GetInputFieldValue";
import HideShowToggle from "./Components/HideShowToggle";
import FormHandling from "./Components/FormHandling";
import ConditionalRendering from "./Components/ConditionalRendering";
import PassFunctionAsProps from "./Components/PassFunctionAsProps";
import ReactFragments from "./Components/ReactFragments";
import FormValidation from "./Components/FormValidation";
import Render from "./Components/Render";
import ComponentDidMount from "./Components/ComponentDidMount";
import ComponentDidUpdate from "./Components/ComponentDidUpdate";
import ShouldComponentUpdate from "./Components/ShouldComponentUpdate";
import GetSnapshotbeforeUpdate from "./Components/GetSnapshotbeforeUpdate";
import ComponentWillUnmount from "./Components/ComponentWillUnmount";
import Hooks from "./Components/Hooks";
import UseEffectHookConditional from "./Components/UseEffectHookConditional";

import UseMemoHook from "./Components/UseMemoHook";
import UseCallbackHook from "./Components/UseCallbackHook";
import UseContexthook from "./Components/UseContexthook";
import UseRefHook from "./Components/UseRefHook";
import ForwardRef from "./Components/ForwardRef";
import ArrayListing from "./Components/ArrayListing";
import NestedListWithNestedArray from "./Components/NestedListWithNestedArray";
import Reuse from "./Components/Reuse";
import LiftingStateUp from "./Components/LiftingStateUp";
import ControlledComponent from "./Components/ControlledComponent";
import UncontrolledComponent from "./Components/UncontrolledComponent";
import UseReducerHook from "./Components/UseReducerHook";
import OnClick from "./Components/OnClick";
import OnMouseHover from "./Components/OnMouseHover";
import PreviousState from "./Components/PreviousState";
import PreviousProp from "./Components/PreviousProp";
import StateWithObject from "./Components/StateWithObject";
import CodeSplitting from "./Components/CodeSplitting";
import ApiCalling from "./Components/ApiCalling";
import PostApiMethod from "./Components/PostApiMethod";
import DeleteApiMethod from "./Components/DeleteApiMethod";
import PrefilledFormData from "./Components/PrefilledFormData";
import PutApiMethod from "./Components/PutApiMethod";




function App() {
  const [data,setData]=useState(0);
  function updateData(){
    // setData(data + 1)
    let randomValue=Math.floor(Math.random()*10)
    setData(randomValue)
  }


  function getData(){
    alert("hello from app.js")
  }
  return (
    <div className="App">
      {/* <FuncComponent/>
         <ClassComponent/>
         <ClickEvent/> */}
      {/* <StateINFC/> */}
      {/* <StateINCBC/> */}
      {/* <PropsInFc name={firstName} />
         <button onClick={()=>{setName("masood")}}>Click Me</button> */}
      {/* <PropsinCBC name={firstName}/>
       <PropsinCBC name={"farzeen"}/>
       <button onClick={()=>{setName("safa maqbool")}}>Click Me</button> */}
      {/* <GetInputFieldValue/> */}
      {/* <HideShowToggle/> */}
      {/* <FormHandling/> */}
      {/* <ConditionalRendering /> */}
      {/* <PassFunctionAsProps data={getData}/> */}
     {/* <FormValidation/> */}
      {/* <Render data={firstName}/>
      <button onClick={()=>{setName("Safa Maqbool")}}>Update Name</button> */}
      {/* <ComponentDidMount/> */}
      {/* <ComponentDidUpdate/> */}
      {/* <ShouldComponentUpdate/> */}
     {/* <GetSnapshotbeforeUpdate data={firstName}/>
     <button onClick={()=>setName("Farzeen")}>Update</button> */}
     {/* <ComponentWillUnmount/> */}
     {/* <Hooks data={firstName}/>
     <button onClick={()=>setName("safamaqbool")}>Update Name</button> */}
     {/* <UseEffectHookConditional/> */}
     {/* <UseMemoHook/> */}
     {/* <UseCallbackHook/> */}
     {/* <UseContexthook/> */}
     {/* <UseRefHook/> */}
     {/* <ForwardRef/> */}
     {/* <ArrayListing/> */}
     {/* <NestedListWithNestedArray/> */}
     {/* <Reuse/> */}
     {/* <LiftingStateUp/> */}
     {/* <ControlledComponent/> */}
     {/* <UncontrolledComponent/> */}
     {/* <UseReducerHook/> */}
     {/* <OnClick/>
     <OnMouseHover/>  */}
     {/* <PreviousState/> */}
     {/* <PreviousProp item={data}/>
     <button onClick={updateData}>Update</button> */}

     {/* <StateWithObject/> */}
     {/* <CodeSplitting/> */}
     {/* <ApiCalling/> */}
     {/* <PostApiMethod/> */}
     {/* <DeleteApiMethod/> */}
     {/* <PrefilledFormData/> */}
     <PutApiMethod/>

    </div>
  );
}

export default App;

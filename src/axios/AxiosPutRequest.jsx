import axios from 'axios';
import React, { useEffect,useState } from 'react'

const AxiosPutRequest = () => {
     const [post, setPost] = useState({
       title: "",
       body: "",
     });
    useEffect(()=>{
     axios.get("https://jsonplaceholder.typicode.com/posts/1").then((response)=>{
        console.log(response.data) ///1 is id of post while updating deleting we need to pass the id param
     });
    },[]) //empty dependency error means will be called once wont be called at state update or component mount
     const handleInput = (e) => {
       setPost({...post,[e.target.name]:e.target.value})
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       axios
         .put("https://jsonplaceholder.typicode.com/posts/1", post) //post state which has the object
         .then((response) => {
           console.log(response.data);
         });
     };
  return (
    <>
      <h2>Axios Put Request</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleInput}
          name="title"
          placeholder="Enter Title"
        />{" "}
        <br /> <br />
        <input
          type="text"
          name="body"
          onChange={handleInput}
          placeholder="Enter description"
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
}

export default AxiosPutRequest
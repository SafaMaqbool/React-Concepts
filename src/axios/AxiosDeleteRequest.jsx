import axios from 'axios'
import React, { useEffect } from 'react'

const AxiosDeleteRequest = () => {
    useEffect(()=>{
     axios.get("https://jsonplaceholder.typicode.com/posts/1").then((response)=>{
        console.log(response.data)
     });
    },[])

    const deleteRecord=()=>{
         axios.delete("https://jsonplaceholder.typicode.com/posts/1").then((response)=>{
            alert('post has been deleted')
         });
    }
  return (
    <>
    <h2>Axios Delete Request</h2>
    <button onClick={deleteRecord}>Delete</button>

    </> 
  )
}

export default AxiosDeleteRequest
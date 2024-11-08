import React, { useEffect,useState } from "react";
import axios from 'axios'

const AxiosGetRequest = () => {
    const [mydata,setData]=useState([])

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users";
    axios.get(url).then((response)=>{
    //  console.log(response)
    setData(response.data)
    })
  }, []);

  return (
    <>
      <h2>Axios Get Request</h2>
      {
        mydata.map((item,i)=>{
            return(
                <h4 key={i}>{item.name}</h4>
            )
        })
      }
    </>
  );
};

export default AxiosGetRequest;

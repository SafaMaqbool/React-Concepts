import React from 'react'
import {useSearchParams} from 'react-router-dom'



const Search = () => {
    const [searchParams,setSearchParams]=useSearchParams()
    const myName=searchParams.get('name')
    const myAge=searchParams.get('age')
  return (
   <>
   <h2>Search Params</h2>
   <h4>My Name is {myName} and my age is {myAge}</h4>
    <input type="text" placeholder='Enter Your Details' onChange={(e)=>{setSearchParams({name:e.target.value})}}/>
   <button onClick={()=>{setSearchParams({name:"safa",age:"23"})}}>Set Details</button>
   </>
  )
}

export default Search
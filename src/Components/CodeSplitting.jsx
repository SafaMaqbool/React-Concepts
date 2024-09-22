import React, { Suspense } from 'react'
import LazyLoading from './LazyLoading'

// bad practice
// import add from './add'
// console.log(add(2,3))


//good practice --concept of promises (async, doesnt't block code)
// import('./add').then((result)=>{
//     console.log("Result: " + result.add(4,8))
// })
const CodeSplitting = () => {
    const LazyLoading=React.lazy(()=>import('./LazyLoading'))
  return (
   <Suspense fallback={<h1>Wait......</h1>}>
   
   {/* <h2>Code Splitting</h2> */}
   <LazyLoading/>
   </Suspense>
  )
}

export default CodeSplitting
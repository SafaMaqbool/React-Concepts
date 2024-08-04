function ClickEvent(){
    let firstName="Farzeen"
    firstName="safa"
    function sayhello(){
        alert(firstName)
    }
 
   return(
    <div>
        {/* <h2>Safa Maqbool</h2> */}
        <h2>{firstName}</h2>
        <button onClick={(sayhello)}>Click Me!</button>
    </div>
   )
}
export default ClickEvent;
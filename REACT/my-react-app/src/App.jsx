import { useState } from 'react'
function App() {
  //data
   let title="Transflower";
   let person={ firstname:'Manasi', lastname:'Nighot', email:'manasi.@gmail.com',
                contact:'9881265489'};
   //State
   const [count, setCount]=useState(0);    //react hook: useState
   
   //event handler
   const onButtonClick=()=>{
     setCount(count+1);
      console.log("Click me button is pressed....."+ count);
   }
 
   //JSX syntax for defining presentation
  return (
    <>
      <div>
        <h1>{title}</h1>
         <hr/>
         <p> Hello <b>{person.firstname} {person.lastname}</b> </p>
         <p> Email: {person.email}</p>
         <p> Contact Number:{person.contact}</p>
 
        <label>Likes: {count}</label> <br/>
         <button onClick={onButtonClick}>Like</button>
      </div>
    </>
  )
}
 
export default App
import { useState } from "react";

const Counter=({likes,onCounterClick})=>{
   
    const [count,setCount]=useState(likes);

    const increment=()=>{
        setCount(count+1); 
        onCounterClick(count);
    }

    return(
        <div>  
            <label>{count}</label>
            <button onClick={increment}>Like</button>
        </div>
    )
}

export default Counter;
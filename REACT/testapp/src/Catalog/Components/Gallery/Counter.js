import { useState } from "react";

const Counter=({likes,onCounterClick,onCounterUClick})=>{
   
    const [count,setCount]=useState(likes);

    const increment=()=>{
        setCount(count+1); 
        onCounterClick(count);
    }

    const decrement=()=>{
        setCount(count-1); 
        onCounterUClick(count);
    }

    return(
        <div>  
             <button onClick={decrement}>UnLike</button>
            <label>{count}</label>
            <button onClick={increment}>Like</button>
        </div>

    )
}

export default Counter;
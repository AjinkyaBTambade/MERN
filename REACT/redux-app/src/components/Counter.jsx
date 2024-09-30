import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement,reset } from '../redux/actions';
const Counter = () => {

  const count=useSelector((state)=>state.count);
  const dispatch=useDispatch();

  return (
      <div>
        <h1>Counter:{count}</h1>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        </div>
  );
};

export default Counter;

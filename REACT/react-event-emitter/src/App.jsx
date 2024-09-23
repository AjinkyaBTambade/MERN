import React, { useEffect, useState } from 'react';
import EventEmitter from 'eventemitter3';
 
const emitter= new EventEmitter();
 
function Publisher(){
  const [text,setText]=useState('');
  const handleChange=(event)=>{
    setText(event.target.value);
  }
  const handleClick=(event)=>{
    emitter.emit('update', text);
  };
 
  return(
    <>
      <h3>Publisher</h3>
      <input type="text" value={text} onChange={handleChange}/>
      <button onClick={handleClick}>Publish Data</button>
    </>
  );
};
 
function Subscriber(){
 
  const [data, setData] = useState('');
 
  useEffect(()=>{
      const handleUpdate = (newData) => {
        setData(newData);
      };
 
      emitter.on('update',handleUpdate) //attach event handler
                                        //subscribe event handler
 
      return ()=>{
        emitter.off('update',handleUpdate); //detach event handler
                                            //unsubscribe event handler
        }
      }, []);
 
  return(
    <>
      <h3>Consumer</h3>
      <p>Data received  : {data} </p>
    </>
  );
};
 
 
function App() {
  return (
    <>
      <div>
        <h2>Component Communication</h2>
        <table>
          <tr>
            <td> <Publisher/></td>
            <td></td>
          </tr>
          <tr>
            <td> <Subscriber/></td>
          </tr>
        </table>
 
       </div>
    </>
  )
}
export default App;
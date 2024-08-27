import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(prevCounter => {
      if (prevCounter < 20) {
        return prevCounter + 1;
      }
      return prevCounter;
    });
  };

  const removeValue = () => {
    setCounter(prevCounter => {
      if (prevCounter > 0) {
        return prevCounter - 1;
      }
      return prevCounter;
    });
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>
        Add value {counter}
      </button>
      <br />
      <button onClick={removeValue}>
        Remove value {counter}
      </button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;

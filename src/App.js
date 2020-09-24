import React, { useState } from 'react';
import Toggle from './components/Toggle';
// import { Button } from 'react-bootstrap';
import './assets/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [result, setResult] = useState(0)

  const increment = () => {
    let number = result + 1
    setResult(number)
  }
  const decrement = () => {
    let number = result - 1
    setResult(number)
  }

  return (
    <div className="App">
      <Toggle result={result} setResult={setResult}/>
      <div className="buttons">
        <button type="button" class="btn btn-primary" onClick={increment}>Increment</button>
        <button type="button" class="btn btn-danger" onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default App;
import React, { useState } from 'react';
// import { Button } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [result, setResult] = useState(0)
  const [showToggle, setShowToggle] = useState(false)

  const increment = () => {
    let number = result + 1
    setResult(number)
  }
  const decrement = () => {
    let number = result - 1
    setResult(number)
  }
  const reset = () => {
    setResult(0)
  }
  const toggle = () => {
    setShowToggle(!showToggle)
  }
  return (
    <div className="App">
      { showToggle ? <span id="show">{result}</span> : <span id="hide">{result}</span>}
      <button type="button" class="btn btn-dark" onClick={toggle}>
        {showToggle ? 'Hide number' : 'Show number'}
      </button>

      {/* USING REACT-BOOTSTRAP */}
      {/* <Button onClick={increment}>Increment</Button> */}

      {/* USING BOOTSTRAP CSS */}
      <div className="buttons">
        <button type="button" class="btn btn-primary" onClick={increment}>Increment</button>
        <button type="button" class="btn btn-danger" onClick={decrement}>Decrement</button>
      </div>
      <button type="button" class="btn btn-warning" onClick={reset}>Reset</button>
    </div>
  );
};

export default App;
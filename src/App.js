import React, { useState } from 'react';
import Toggle from './components/Toggle';
import Increment from './components/Increment';
import Decrement from './components/Decrement';

import './assets/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [result, setResult] = useState(0)

  return (
    <div className="App">
      <Toggle result={result} setResult={setResult} />
      <div className="buttons">
        <Increment result={result} setResult={setResult} />
        <Decrement result={result} setResult={setResult}/>
      </div>
    </div>
  );
};

export default App;
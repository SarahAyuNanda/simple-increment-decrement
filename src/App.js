import React, { useState } from 'react';
import Toggle from './components/Toggle';

import './assets/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [result, setResult] = useState(0)

  return (
    <div className="App">
      <Toggle result={result} setResult={setResult} />
    </div>
  );
};

export default App;
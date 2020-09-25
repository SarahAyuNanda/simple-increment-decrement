import React, { useState } from 'react';
// import Reset from './Reset';
import Increment from './Increment';
import Decrement from './Decrement';

import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/Toggle.css'

const Toggle = (props) => {
    const result = props.result
    const setResult = props.setResult
    const [showToggle, setShowToggle] = useState(false)

    const toggleButton = () => {
        setShowToggle(!showToggle)
    }

    return (
        <div className="Toggle">
            <input type="checkbox" id="switch" />
            <label for="switch" onClick={toggleButton}></label>
            {showToggle ?
                <div className="wrapper">
                    <Decrement result={result} setResult={setResult} />
                    <span id="show">{result}</span>
                    <Increment result={result} setResult={setResult} />
                </div>
                :
                <span id="hide">{result}</span>}

            {/* <button id="toggle" type="button" class="btn btn-dark" onClick={toggleButton}>
                    {showToggle ? "Hide" : "Show"}
                </button> */}
        </div>
    );
};

export default Toggle;
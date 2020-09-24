import React, { useState } from 'react';
import Reset from './Reset';

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
            {showToggle ?
                <span id="show">{result}</span>
                :
                <span id="hide">{result}</span>}
            <div className="buttons">
                <button id="toggle" type="button" class="btn btn-dark" onClick={toggleButton}>
                    {showToggle ? "Hide" : "Show"}
                </button>
                <Reset setResult={setResult} />
            </div>
        </div>
    );
};

export default Toggle;
import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/Toggle.css'

const Toggle = (props) => {
    const result = props.result
    const [showToggle, setShowToggle] = useState(false)

    const toggleButton = () => {
        setShowToggle(!showToggle)
    }

    return (
        <div className="toggle">
            {showToggle ?
                <span id="show">{result}</span>
                :
                <span id="hide">{result}</span>}
            <button type="button" class="btn btn-dark" onClick={toggleButton}>
                {showToggle ? "Hide" : "Show"}
            </button>
        </div>
    );
};

export default Toggle;
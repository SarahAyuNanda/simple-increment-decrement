import React from 'react';

import '../assets/Reset.css'

const Reset = (props) => {
    const setResult = props.setResult

    const reset = () => {
        setResult(0)
    }
    return (
        <div>
            <button id="reset" type="button" class="btn btn-warning" onClick={reset}>Reset</button>
        </div>
    );
};

export default Reset;
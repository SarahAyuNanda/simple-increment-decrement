import React from 'react';

import '../assets/Increment.css'

const Increment = (props) => {
    const result = props.result
    const setResult = props.setResult

    const increment = () => {
        let number = result + 1
        setResult(number)
    }
    return (
        <div>
            <button id="increment" type="button" class="btn btn-primary" onClick={increment}>+</button>
        </div>
    );
};

export default Increment;
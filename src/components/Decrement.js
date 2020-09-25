import React from 'react';

import '../assets/Decrement.css'

const Decrement = (props) => {
    const result = props.result
    const setResult = props.setResult

    const decrement = () => {
        let number = result - 1
        setResult(number)
    }
    return (
        <div>
            <button id="decrement" type="button" class="btn btn-danger" onClick={decrement}>-</button>
        </div>
    );
};

export default Decrement;
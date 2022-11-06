import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ({ value }) => {
    const [counter, setCounter] = useState(value);

    const handleAdd = () => setCounter(counter + 1);

    const handleSustract = () => setCounter(counter - 1);

    const handleReset = () => setCounter(value);

    return (
        <>
            <h1>CounterApp</h1>
            <p>{counter}</p>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSustract}>-1</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
};

CounterApp.defaultProps = {
    value: 0
};
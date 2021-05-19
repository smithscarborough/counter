import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    let handleDecrement = () => {
        setCount(count - 1);
    }

    let handleIncrement = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <p>Current count: {count}</p>
            <button onClick={handleDecrement}>Decrement</button> <button onClick={handleIncrement}>Increment</button> 
        </div>
    );
};

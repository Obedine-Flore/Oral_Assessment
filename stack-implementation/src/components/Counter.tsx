// src/components/Counter.tsx
import React, { useState } from 'react';

const Counter: React.FC = () => {
    const [count, setCount] = useState(0); // Initialize counter state

    const increment = () => setCount(count + 1); // Increment function
    const decrement = () => setCount(count - 1); // Decrement function
    const reset = () => setCount(0); // Reset function

    return (
        <div style={{ marginTop: '20px' }}>
            <h2>Counter: {count}</h2> {/* Display current count */}
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Counter;

// src/components/StackComponent.tsx
import React, { useState } from 'react';
import { Stack } from '../stack'; // Adjust the import based on your file structure

const StackComponent: React.FC = () => {
    const [stack] = useState(new Stack());
    const [topValue, setTopValue] = useState<number | null>(null);
    const [message, setMessage] = useState<string>('');

    const handlePush = (value: number) => {
        stack.push(value);
        setTopValue(stack.peek());
        setMessage(`Pushed ${value} to stack.`);
    };

    const handlePop = () => {
        const poppedValue = stack.pop();
        setTopValue(stack.peek());
        setMessage(`Popped ${poppedValue}.`);
    };

    const checkIfEmpty = () => {
        const isEmpty = stack.isEmpty();
        setMessage(`Is stack empty? ${isEmpty}`);
    };

    return (
        <div>
            <h1>Stack Operations</h1>
            <p>Top Value: {topValue !== null ? topValue : 'Stack is empty'}</p>
            <button onClick={() => handlePush(Math.floor(Math.random() * 100))}>Push Random Number</button>
            <button onClick={handlePop}>Pop</button>
            <button onClick={checkIfEmpty}>Check if Empty</button>
            <p>{message}</p>
        </div>
    );
};

export default StackComponent;

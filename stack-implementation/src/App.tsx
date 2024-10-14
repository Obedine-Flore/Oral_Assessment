// src/App.tsx
import React from 'react';
import StackComponent from './components/StackComponent'; // Adjust the path as needed
import Counter from './components/Counter'; // Import the Counter component

const App: React.FC = () => {
    return (
        <div>
            <h1>Stack and Counter Application</h1>
            <StackComponent /> {/* Render your Stack component */}
            <Counter /> {/* Render the Counter component */}
        </div>
    );
};

export default App;

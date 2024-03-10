import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom/client';

const height = 1000;
const width = 850;
const radius = 40;
const initialMousePosition = { x: width / 2, y: height / 2 };

// App component == orchestrator
const App = () => {

    const [mousePostition, setMousePosition] = useState(initialMousePosition);

    const handleMouseMove = useCallback(
        (event) => {
            setMousePosition({x: event.clientX, y: event.clientY})
        }, [setMousePosition]
    )

    return (<svg width={width} height={height} onMouseMove={handleMouseMove}>
        <circle
            cx={mousePostition.x}
            cy={mousePostition.y}
            r={radius}
        />
    </svg>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
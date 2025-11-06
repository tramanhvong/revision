import React, {useState} from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: "center"}}>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count+1)}>+</button>
            <button onClick={() => setCount(count > 0 ? count - 1: 0)}>-</button>
        </div>
    );
}
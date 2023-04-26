import React, {useState} from 'react';

function Counter(){

    const [count, setCount] = useState(0);

    let increment = () => {
        setCount(count+1)
    }

    let decrement = () => {
        setCount(count-1)
    }

    return(
        <div>
            <h1>Counter App</h1>
            <h2>{count}</h2>
            
            <button onClick={(increment)}>increment</button>
            
            <button onClick={(decrement)}>decrement</button>
        </div>
    );
}

export default Counter;
import React, { useState } from 'react';

function Counter({initialCount}) {
    const  [count, setCount] = useState(initialCount);

    // Function test
    function addOne(number){
        number += 1;
        number.log(number);
        return number;
    }

    return (
        <>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <button onClick={() => setCount(addOne(count))}>+</button>
        </>
    );
}

export default Counter;
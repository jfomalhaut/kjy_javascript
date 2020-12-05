import React, {useState, useReducer} from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const CounterReducer = (state, dispatch) => {
        switch(state.value){
            case 'INCREASEMENT' : {
                return counter + 1;
            }
        }
    }

    const increase = () => {
        dispatch()
    }

    const [counter, dispatch] = useReducer(CounterReducer, 0);

    return (
        <div>
            <h1 id={counter}>0</h1>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    );
}

export default Counter;
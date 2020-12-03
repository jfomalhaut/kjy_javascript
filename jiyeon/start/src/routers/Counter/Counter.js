import React, {useState, useReducer} from 'react';

//action
//업무의 정의
const INCREASEMENT = 'INCREASEMENT';
const DECREASEMENT = 'DECREASEMENT';

//dispatch 하는 기능들을 함수로 관리
const onIncrease = () => ({ type: INCREASEMENT});
const onDecrease = () => ({ type: DECREASEMENT});


//reducers
const CounterReducer = (state, action) => { //type에는 일의 정의 
    switch(action.type){
        case INCREASEMENT : {
            return state + 1; //state 는 초기값을 누적으로 가지고 있다
        }
        case 'DECREASEMENT' : {
            return state - 1;
        }
        case 'INPUT' : {
            return state + Number(action.value);
        }
        default : { //안쓰면 오류남
            return state;
        }
    }
};

const Counter = () =>{
    // const [count, setCount] = useState(0);
    const [count, dispatch] = useReducer(CounterReducer, 0);
    const [input, setInput] = useState("");


    const increase = () => {
        // setCount(count + 1);
        dispatch(onIncrease()); //객체 형태로 
    };

    const decrease = () => {
        // setCount(count - 1);
        dispatch(onDecrease());
    };

    const onInput = () => {
        dispatch({type: 'INPUT', value : input});
    }

    return (
        <div>
            <div>{count}</div>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
            <input name="input" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={onInput}>input</button>
        </div>
    );
}

export default Counter;
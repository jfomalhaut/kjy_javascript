import React, { useState } from 'react';
const REGEX = /[0-9]/;

const SignUp = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(""); //input은 string
    
    const increasement = () => {
        setCount(count + 1);
    };
    const decreasement = () => {
        setCount(count - 1);
    };
    const addCunstom = () => { //숫자더하기
        setCount(count + number);
        // count + number
    }
    const onChangeNumber = (ev) => {
        const { target: { value }} = ev;
        if(REGEX.test(value * 1)){
            setNumber(value);
        }
    }
    return (
        <div>
            <h1>count: {count}</h1>
            <h1>custom number: {number}</h1>
            <input value={number} onChange={onChangeNumber} maxLength={5}/>
            <button onClick={addCunstom}>addCunstom</button>
            <button onClick={increasement}>increasement</button>
            <button onClick={decreasement}>decreasement</button>
        </div>
    )
}

export default SignUp;
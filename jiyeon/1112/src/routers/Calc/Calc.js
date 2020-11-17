import React, { useState } from 'react';
const REGEX = /[0-9]/;

const Calc = () => {
    const [result, setResult] = useState(0);
    const [input, setInput] = useState("");

    const increase = () =>{
        setResult(result + 1);
    }
    const decrease = () =>{
        setResult(result - 1);
    }
    const onChangeNumber = (ev) =>{
        const { target : {value}} = ev;
        if(REGEX.test(value * 1)){
            setInput(value);
        }
    }
    const addInput = () =>{
        // setInput(parseInt(input));
        // console.log(input);
        // console.log(typeof input);
        setResult(Number(input) + result);
    }

    return (
        <div>
            <h1>result: {result}</h1>
            <input value={input} onChange={onChangeNumber} maxLength={5} />
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
            <button onClick={addInput}>add input number</button>
            
        </div>
    );
}

export default Calc;
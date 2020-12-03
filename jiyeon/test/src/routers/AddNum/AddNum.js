import React, {useState} from 'react';

const AddNum = ({history}) =>{
    const [num, setNum] = useState(0);
    const [input, setInput] = useState("");

    const addNum = () => {
        setNum(num + 1);
    }

    const minusNum = () => {
        setNum(num - 1);
    }

    const addInputNum = () => {
        console.log(input);
        setNum(num + Number(input));
    }

    const goPage = () => {
        history.push('./juso');
    }

    return(
        <div>
            <h1>{num}</h1>
            <input
                name="input"
                placeholder="input num"
                value={input}
                onChange={(e) => (setInput(e.target.value))}
            />
            <button onClick={addNum}>+</button>
            <button onClick={minusNum}>-</button>
            <button onClick={addInputNum}>addInputNum</button>
            <button onClick={goPage}>juso</button>
        </div>
    );
}

export default AddNum;
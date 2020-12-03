import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Juso = () => {
    const JUSO_API = process.env.JUSO_API;
    const JUSO_URL = process.env.JUSO_URL;

    // console.log(JUSO_API);
    // console.log(JUSO_URL);

    const [input, setInput] = useState("");
    const [list, setList] = useState([]);
    const [total, setTotal] = useState("");
    const [current, setCurrent] = useState(1);

    const onChange = (e) => {
        // const {name, value} = e.target;

        setInput(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        search();
    }

    const search = () => {
        const addLoad ={
            confmKey: JUSO_API,
            currentPage: current,
            countPerPage: 20,
            resultType: 'json',
            keyword: input
        }

        const _addLoad = params(addLoad);
        console.log('_addLoad: ' + _addLoad);
        axios.get(`${JUSO_URL}?${_addLoad}`)
        .then(res => {
            console.log('res: ' + res);
            const {data: {results: {common: {totalCount}, juso}}} = res;
            setList(juso);
            setTotal(totalCount);
        })
        .catch(err => {
            console.log(err);
        });
    }

    const params = (arr) =>{
        const data = [];
        console.log('arr: ' + arr);

        for(let key in arr){
            data.push(`${key}=${arr[key]}`);
        }
        return data.join('&');
    }

    const onNext = () => {
        setCurrent(current + 1);
        search();
    }

    const onPrev = () => {
        setCurrent(current - 1);
        search();
    }

    useEffect(() =>{
        if(input !== ''){
            search();
        }
    }, [current]);

     return(
        <div>
            <h1>juso page</h1>
            <form onSubmit={onSubmit}>
                <input
                    name="input"
                    value={input}
                    placeholder="input your address"
                    onChange={onChange}
                />
                <Btn>submit</Btn>
            </form>
            <List2>
                {list.map((item, index) => (
                    <li key={`${index}`}>{item.roadAddrPart1}</li>
                ))}
            </List2>
            <button onClick={onNext}>next</button>
            <button onClick={onPrev}>prev</button>
        </div>
    );
}

export default Juso;

const Btn = styled.button`
    color: green;
`;

const List2 = styled.ul`
    background: wheat;

    li{
        color: gray;
    }
`;

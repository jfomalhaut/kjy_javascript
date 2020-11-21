import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const JUSO_API = process.env.JUSO_API;
const JUSO_URL = process.env.JUSO_URL;


const Juso2 = () => {

    const [keyword, setKeyword] = useState('');
    const [list, setList] = useState([]);
    const [totalCount, setTotalCount] = useState('');
    const [current, setCurrent] = useState(1);

    const onChange  = (ev) => {
        setKeyword(ev.target.value);
        // console.log(keyword);
    }

    const onSubmit = (ev) => {
        ev.preventDefault();
        search();
    }

    const search = () =>{
        const addLoad ={
            confmKey: JUSO_API,
            currentPage: 1,
            countPerPage: 20,
            resultType: 'json',
            keyword: keyword
        }

        const _addLoad = params(addLoad);
        console.log(_addLoad);

        axios.get(`${JUSO_URL}?${_addLoad}`)
        .then(res => {
            console.log(res);
            const {data : {results: {common: {totalCount}, juso}}} = res;
            setList(juso);
            setTotalCount(totalCount);
        }) 
        .catch(error => {
            console.log(error);
        });
    }

    const params = (arr) => {
        const data = [];
        for(let key in arr){
            data.push(`${key}=${arr[key]}`);
            console.log(data[key]);
        }
        return data.join('&');
    }

    
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={keyword} onChange={onChange}/>
                <button onSubmit={onSubmit}>검색</button>
            </form>
            <ul>
                {list.map((item, index) => (
                    <li key={`ADDR_LIST${index}`}>{item.roadAddrPart1}</li>
                ))}
            </ul>
        </div>
    );
}

export default Juso2;
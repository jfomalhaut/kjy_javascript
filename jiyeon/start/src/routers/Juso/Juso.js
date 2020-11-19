import React, {useState, useEffect, useRef} from 'react';
import Axios from 'axios';

const JUSO_API = process.env.JUSO_API;
const JUSO_URL = process.env.JUSO_URL;

console.log(JUSO_API);
console.log(JUSO_URL);



const Juso = () => {
    const inputElement = useRef();
    const [keyword, setKeyword] = useState('');
    const [list, setList] = useState([]);
    const [total, setTotal] = useState('');
    const [current, setCurrent] = useState(1);

    const onSubmit = (ev) => {
        ev.preventDefault();
        search();
    }
    
    const params = (arr) => {
        const data = [];
        for(let key in arr){
            data.push(`${key}=${arr[key]}`);

        }
        return data.join('&');
    }
    

    const search = () => {
        const payload ={
            confmKey: JUSO_API,
            currentPage: current,
            countPerPage: 10,
            resultType: 'json',
            keyword
        }
        
        const _payload = params(payload);
        Axios.get(`${JUSO_URL}?${_payload}`).then(res => {
            const { data : {results : {common: {totalCount}, juso }}} = res;
            setList(juso);
            setTotal(totalCount);
        }).catch(error => {
            console.log(error);
        });
    }

    const onCurrentPageNext = () =>{
        setCurrent(current + 1);
    }
    const onCurrentPagePrv = () =>{
        setCurrent(current - 1);
    }

    useEffect(() =>{
        if(keyword !== ''){
            search();
        }
    }, [current]);

    //값 썼을때 바로 적용 안되고 검색 버튼 클릭 시 변경 
    //이전 다음 버튼 없을 때 감추는거 
    //폰북 이름 나이 폰북 
    //장바구니 출력 

    //글로벌 state redux auth saga 
    useEffect(() => {

    })
    useEffect(() =>{
        inputElement.current.focus();
    }, []);

    return(
        <div onSubmit={onSubmit}>
            <form>
                <input ref={inputElement} value={keyword} onChange={(ev) => setKeyword(ev.target.value)} />
                <button>검색</button> 
            </form>
            <ul>
                {list.map((item, index) => (
                    <li key={`ADDR_LIST${index}`}>{item.roadAddrPart1}</li>
                ))}
            </ul>
            <button onClick={onCurrentPagePrv}>이전</button>
            <button onClick={onCurrentPageNext}>다음</button>
        </div>
    );
}

export default Juso;
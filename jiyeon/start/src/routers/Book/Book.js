import React, {useState} from 'react';

const Book = () =>{

    const [info, setInfo] = useState({
        name: "",
        age: 0,
        phone: ""
    });

    const {name, age, phone} = info;

    const [infoList, setInfoList] = useState([]);

    const onChange = (e) =>{
        const {value, name} = e.target;
        setInfo({
            ...info,
            [name] : value
        });
    }

    const addList = (info) =>{
        // setInfoList(infoList.concat(info));
        const newList = infoList.concat(info);
        setInfoList([...infoList, info]);
        setInfoList(newList);
        console.log(newList);
    }

    const submit = (e) =>{
        // e.preventDefault();
        //리스트 추가
        addList(info);
        setInfo({
            ...info,
            name: "",
            age: 0,
            phone: ""
        });
    }

    return(
        <div>
            <input value={name} name="name" onChange={onChange} placeholder="name"/>
            <input value={age} name="age" onChange={onChange} placeholder="age" />
            <input  value={phone} name="phone" onChange={onChange} placeholder="phone" />
            <button onClick={submit}>제출</button>
            <div>{infoList.map(item =>(
                <div>{item.name}</div>
            )
            )}</div>
        </div>
        
    );
}

export default Book;
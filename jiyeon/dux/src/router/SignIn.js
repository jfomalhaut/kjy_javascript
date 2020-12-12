import React, {useState} from 'react';
import Axios from 'axios';


const SignIn = () => {
    const [info, setInfo] = useState({
        id: '',
        pw: ''
    });
    const {id, pw} = info;

    const onChange = (e) => {
        const {target: { name, value }} = e;
        setInfo({
            ...info,
            [name]: value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const payload = { id, pw };
        console.log(payload);

        Axios.post('http://localhost:4000/api/signIn', payload)
        .then(res => {
            const { status, data: { valid, userinfo } } = res;
            if(status === 200){
                if(valid) {
                    alert(`welcome! ${userinfo.username}님!`);
                } else {
                    alert('login failure');
                }
            }else {
                alert('네트워크 오류 발생!');
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    return(
        <form onSubmit={onSubmit}>
            <input 
                name="id"
                value={id}
                onChange={onChange}
            />
            <input 
                name="pw"
                value={pw}
                onChange={onChange}
            />
            <button>submit</button>
        </form>
    )
}

export default SignIn;
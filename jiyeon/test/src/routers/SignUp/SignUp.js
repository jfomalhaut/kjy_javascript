import React, {useState} from 'react';
import { useLogin } from './../../customs/login';

const user = {
    id: "",
    pw: ""
};

const SignUp = () =>{
    const [value, onChange, setValue] = useLogin(user);
    const {id, pw} = user;

    const {test, setTest} = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(value);
    }

    const onChange2 = () => {
        console.log('test');
    }

    return(
        <form onSubmit={onSubmit}>
            {/* <useLogin/> */}
            <input value={id} name="id" onChange={onChange} />
            <input value={pw} name="pw" onChange={onChange} />
            <button>submit</button>
        </form>
    );
}

export default SignUp;
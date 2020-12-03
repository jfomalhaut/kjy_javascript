import React from 'react';
import { useLogin } from './../../customs/login';

const SignUp = () =>{
    const []
    const onSubmit = (e) => {
        e.preventDefault();
        
    }

    return(
        <form onSubmit={onSubmit}>
            <useLogin/>
            <button>submit</button>
        </form>
    );
}

export default SignUp;
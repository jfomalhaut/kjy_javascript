import React, {useState} from 'react';

export const useLogin = (initialValue) =>{
    const [user, setUser] = useState(initialValue);
    
    const onChange = (e) => {
        const {value, name} = e.target;

        setUser({
            ...user,
            [name]: value
        });

        console.log(user);
    }

    return [user, onChange, setUser];
    
}
import React, {useState, useEffect} from 'react';

const Book = () => {
    const [user, setUser] = useState({
        name: "",
        age: "",
        phone: ""
    });
    const {name, age, phone} = user;
    const [userList, setUserList] = useState([]);

    const onChange = (e) => {
        const {name, value} = e.target;

        setUser({
            ...user,
            [name] : value
        });
    }

    const onSubmit = (e) =>{
        e.preventDefault();

        setUserList([...userList, user]);
        

        setUser({
            name: "",
            age: "",
            phone: ""
        });
        // console.log(userList);
    }

    // useEffect(() => {
    //     setUserList([...userList, user]);
    // },[user]);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    name="name"
                    value={name}
                    placeholder="name"
                    onChange={onChange}
                />
                <input
                    name="age"
                    value={age}
                    placeholder="age"
                    onChange={onChange}
                />
                <input
                    name="phone"
                    value={phone}
                    placeholder="phone"
                    onChange={onChange}
                />
                <button>push</button>
            </form>
            <ul>
                {
                    userList.map(item => (
                        <li>{item.name} {item.age} {item.phone}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Book;
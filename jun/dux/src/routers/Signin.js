import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AuthAction } from '../actions';

const Signin = () => {
	const dispatch = useDispatch();
	const [info, setInfo] = useState({ username: '', password: '' });
	const { username, password } = info;

	const onChangeValue = ev => {
		const { target: { name, value } } = ev;
		setInfo({
			...info,
			[name]: value
		});
	};

	const signin = (ev) => {
		ev.preventDefault();
		const payload = { username, password };
		dispatch(AuthAction.signIn(payload));
	};

	return (
		<form onSubmit={signin}>
			<h1>LOGIN</h1>
			<div>
				<input value={username} name="username" onChange={onChangeValue} placeholder="아이디를 입력하세요" />
			</div>
			<div>
				<input type="password" value={password} name="password" onChange={onChangeValue} placeholder="패스워드를 입력하세요" />
			</div>
			<button>로그인</button>
		</form>
	);
};

export default Signin;

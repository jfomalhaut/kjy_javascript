import React, { useState } from 'react';
import Axios from 'axios';

const Signin = () => {
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
		console.log(payload);
		
		Axios.post('http://localhost:4000/api/signin', payload).then(res => {
			const { status, data: { valid, userinfo } } = res;
			if (status === 200) {
				if (valid) {
					alert(`환영합니다, ${userinfo.username}님!`);
				} else {
					alert('일치하는 정보가 없습니다');
				}
			} else {
				alert('네크워크 오류 발생!');
			}
		}).catch(error => {
			console.log(error);
		});
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

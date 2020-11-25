import React, { useState } from 'react';
import { useInput, useInputNumber } from '../../customs/useInput';

const fields = {
	name: '',
};

const filed2 = {
	age: '',
	tel: '',
};

const Book = () => {
	const [info, onChange, setInfo] = useInput(fields);
	const [info2, onChange2, setInfo2] = useInputNumber(filed2);
	const [list, setList] = useState([]);
	const { name } = info;
	const { age, tel } = info2;

	const onSubmit = (ev) => {
		ev.preventDefault();
		setList([ ...list, info, info2 ]);
		setInfo(fields);
		setInfo2(fields2);
	};

	return (
		<div>
			<h1>Book Componet</h1>
			<form onSubmit={onSubmit}>
				<input value={name} name="name" onChange={onChange} />
				<input value={age} name="age" onChange={onChange2} />
				<input value={tel} name="tel" onChange={onChange2} />
				<button>입력</button>
			</form>
			<ul>
				{list.map((item, index) => (
					<li key={`PHONE_BOOK${index}`}>
						<div>{item.name}</div>
						<div>{item.age}</div>
						<div>{item.tel}</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Book;
import React, { useState } from 'react';

const useInput = (initialValue) => {
	const [data, setData] = useState(initialValue);
	const onChange = (ev) => {
		const { target: { value }} = ev;
		setData(value);
	};
	return [data, onChange, setData];
};

const Book2 = () => {
	const [list, setList] = useState([]);
	const [name, onChangeName, setName] = useInput("");
	const [age, onChangeAge, setAge] = useInput("");
	const [tel, onChangeTel, setTel] = useInput("");


	const onSubmit = (ev) => {
		ev.preventDefault();
		setList([ ...list, { name, age, tel }]);
	};
	return (
		<div>
			<form onSubmit={onSubmit}>
				<input value={name} name="name" onChange={onChangeName} />
				<input value={age} name="age" onChange={onChangeAge} />
				<input value={tel} name="tel" onChange={onChangeTel} />
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

export default Book2;
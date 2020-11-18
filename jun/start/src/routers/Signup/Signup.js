import React, { useState } from 'react';
const REGEX = /[0-9]/;

const Signup = () => {
	const [count, setCount] = useState(0);
	const [number, setNumber] = useState("");
	
	const increasement = () => {
		setCount(count + 1);
	};
	
	const decreasement = () => {
		setCount(count - 1);
	};

	const addCustom = () => {
		setCount(prev => prev + number * 1);
		setNumber('');
	};

	const onChangeNumber = (ev) => {
		const { target: { value } } = ev;
		if (REGEX.test(value * 1)) {
			setNumber(value);
		}
	};

	const style = {
		color: count > 100 ? 'red' : 'black',
		backgroundColor: count > 100 ? 'blue' : '#f0f0f0'
	};

	return (
		<div>
			<h1 style={style}>Count: {count}</h1>
			{ count > 100 && (<p>*100을 넘었습니다. 조정 바랍니다.</p>)}
			<h1>Custom Number: {number}</h1>
			<input value={number} onChange={onChangeNumber} maxLength={5} />
			<button onClick={addCustom}>addCustom</button>
			<button onClick={increasement}>increasement</button>
			<button onClick={decreasement}>decreasement</button>
		</div>
	);
};

export default Signup;
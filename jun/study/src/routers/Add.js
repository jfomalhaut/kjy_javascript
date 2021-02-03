import React, { useState } from 'react';

const Add = () => {
	const [list, setList] = useState([]);

	const addItem = () => {
		setList([...list, 'data']);
	};

	return (
		<div>
			<button onClick={addItem}>추가하기</button>
			<ul>
				{list.map((item) => (
					<li>data</li>
				))}
			</ul>
		</div>
	);
};

export default Add;

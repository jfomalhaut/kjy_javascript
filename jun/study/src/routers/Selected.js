import React, { useEffect, useState } from 'react'

const _list = [
	{ id: 1, type: 1, name: '땡땡초등학교1' },
	{ id: 2, type: 1, name: '땡땡초등학교2' },
	{ id: 3, type: 1, name: '땡땡초등학교3' },
	{ id: 4, type: 2, name: '땡땡중학교4' },
	{ id: 5, type: 2, name: '땡땡중학교5' },
	{ id: 6, type: 2, name: '땡땡중학교6' },
	{ id: 7, type: 2, name: '땡땡중학교7' },
	{ id: 8, type: 3, name: '땡땡고등학교8' },
	{ id: 9, type: 3, name: '땡땡고등학교9' },
	{ id: 10, type: 3, name: '땡땡고등학교10' },
	{ id: 11, type: 3, name: '땡땡고등학교11' },
	{ id: 12, type: 3, name: '땡땡고등학교12' },
];

const Selected = () => {
	const [school, setSchool] = useState(0);
	const [list, setList] = useState([]);

	useEffect(() => {
		if (school === 0) return;
		setList(_list.filter(item => item.type === school * 1));
	}, [school]);

	return (
		<div>
			<select onChange={(ev) => setSchool(ev.target.value)}>
				<option value={0}>학교를 고르세요</option>
				<option value={1}>초등학교</option>
				<option value={2}>중학교</option>
				<option value={3}>고등학교</option>
			</select>
			{list.length > 0 && (
				<select>
					{list.map(item => (
						<option value={item.name}>{item.name}</option>
					))}
				</select>
			)}
		</div>
	)
}

export default Selected

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const _hobby = [
	{ id: 1, label: '승마', checked: true },
	{ id: 2, label: '수영', checked: false },
	{ id: 3, label: '격투기', checked: false },
	{ id: 4, label: '뜨개질', checked: false },
];

const Modal = () => {
	const [hobby, setHobby] = useState(_hobby);
	const [all, setAll] = useState(false);

	const onChangeCheck = (ev) => {
		const {
			target: { id },
		} = ev;
		const _list = hobby.map((item) => (item.id === id * 1 ? { ...item, checked: !item.checked } : item));
		setHobby(_list);
	};

	const checkAll = () => {
		const flag = hobby.some(item => !item.checked); // false가 하나라도 있으면 true, 없으면 false
		setHobby(hobby.map(item => ({ ...item, checked: flag })));
	};

	useEffect(() => {
		const flag = hobby.some(item => !item.checked);
		setAll(!flag);
	}, [hobby]);

	return (
		<HobbyComponent>
			<h1>취미 선택하기</h1>
			<label>
				<input type="checkbox" checked={all} onClick={checkAll} />
				<span>전체선택</span>
			</label>
			{hobby.map((item) => (
				<label>
					<input type="checkbox" id={item.id} checked={item.checked} onChange={onChangeCheck} />
					<span>{item.label}</span>
				</label>
			))}
		</HobbyComponent>
	);
};

export default Modal;

const HobbyComponent = styled.div`
	* {
		user-select: none;
	}
`;

import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const Menu = [
	{id: 1, name: '큰메뉴1', child: ['작은메뉴1', '작은메뉴1', '작은메뉴1']},
	{id: 2, name: '큰메뉴2', child: ['작은메뉴2', '작은메뉴2', '작은메뉴2', '작은메뉴2', '작은메뉴2']},
	{id: 3, name: '큰메뉴3', child: ['작은메뉴3', '작은메뉴3', '작은메뉴3', '작은메뉴3']},
	{id: 4, name: '큰메뉴4', child: ['작은메뉴4', '작은메뉴4']},
	{id: 5, name: '큰메뉴5', child: ['작은메뉴5', '작은메뉴5', '작은메뉴5']},
]

const Arcordian = () => {
	const [active, setActive] = useState(0);
	const [length, setLength] = useState(0);

	const onClickHandler = id => {
		if (active === id) {
			setActive(0);
			return;
		}
		setActive(id);
	};

	useEffect(() => {
		if (active === 0) return;
		const _length = Menu.filter(item => item.id === active)[0].child.length;
		setLength(_length);
	}, [active]);

	return (
		<MenuComponent length={length}>
			{Menu.map(item => (
				<li className={active === item.id ? 'active' : ''}>
					<span onClick={() => onClickHandler(item.id)}>{item.name}</span>
					<ul>
						{item.child.map(child => (
							<li>{child}</li>
						))}
					</ul>
				</li>
			))}
		</MenuComponent>
	)
}

export default Arcordian


const MenuComponent = styled.ul`

	* {
		list-style: none;
		cursor: pointer;
		user-select: none;
	}

	position: absolute;
	left: 0;
	top: 0;
	width: 200px;
	height: 100vh;
	border-right: 1px solid;

	& > li {
		padding: 20px;
		line-height: 30px;
		padding: 0 10px;
		font-size: 17px;
		border-bottom: 1px solid;

		span {
			display: block;
		}

		&.active {
			span {
				color: blue;
			}
			ul {
				height: ${props => props.length * 30}px;
			}
		}

		& > ul {
			padding-left: 50px;
			transition: .2s;
			height: 0;
			overflow: hidden;
		}
	}
`;
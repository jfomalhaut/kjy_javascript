import React, { useEffect, useState } from 'react';
import Product from '../../jsons/items.json';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
const nf = new Intl.NumberFormat();

const Items = ({ history, match: { params: { type } } }) => {
	const [list, setList] = useState(Product);
	const [path, setPath] = useState("");
	const location = useLocation();

	const transType = (val) => {
		switch(val) {
			case 'fish': return 1;
			case 'fruit': return 2;
			case 'vegetable': return 3;
			default: {
				history.push('/items/all');
			};
		}
	};

	useEffect(() => {
		if (type === 'all') {
			setList(Product);
			return;
		}
		const _type = transType(type);
		const newList = Product.filter(item => item.type === _type);
		setList(newList);
	}, [type]);

	useEffect(() => {
		const url = location.pathname.split('/')[2];
		setPath(url);
	}, [location]);

	return (
		<div>
			{/* <h1>Item Component</h1> */}
			<Nav>
				<Link style={{ color: path ===  'all' ? '#000' : '#999' }} to="/items/all">전체</Link>
				<Link style={{ color: path ===  'fish' ? '#000' : '#999' }} to="/items/fish">수산물</Link>
				<Link style={{ color: path ===  'fruit' ? '#000' : '#999' }} to="/items/fruit">청과</Link>
				<Link style={{ color: path ===  'vegetable' ? '#000' : '#999' }} to="/items/vegetable">야채</Link>
			</Nav>
			<List>
				{list.map(item => (
					<Item key={`ITEM${item.id}`} color={item.type}>
						<figure />
						<h1>{item.name}</h1>
						<div>{nf.format(item.price)}원</div>
					</Item>
				))}
			</List>
		</div>
	);
};

export default Items;

const Nav = styled.nav`
	width: 1000px;
	margin: 0 auto;
	line-height: 50px;
	a {
		font-size: 25px;
		margin: 0 10px 0 0;
		text-decoration: none;
		color: #999;
		&:link, &:visited {
			color: #999;
		}
		&:hover {
			color: blue;
		}
	}
`;

const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 20px;
	width: 1000px;
	margin: 50px auto;
`;

const Item = styled.li`
	border: 1px solid #ddd;
	padding-bottom: 10px;
	transition: .2s;

	&:hover {
		transform: scale(1.15);
	}

	figure {
		height: 120px;
		background: ${props => (
			props.color === 1 ? '#0071B3' : 
			props.color === 2 ? '#C9242B' : 
			props.color === 3 ? '#198942' : '#ddd'
		)};
	}
	h1, div {
		padding: 5px 10px;
	}
`;
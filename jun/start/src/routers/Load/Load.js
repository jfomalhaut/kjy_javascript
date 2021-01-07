import React, { useState } from 'react'
import styled, { keyframes, css } from 'styled-components';

const Load = () => {
	const [isLoading, setIsLoading] = useState(true);
	const config = {
		size: 60,
		thickness: 8,
		activeColor: 'skyblue',
		defaultColor: '#ddd',
		active: true
	};

	return (
		<div>
			<button onClick={() => setIsLoading(true)}>ON</button>
			<button onClick={() => setIsLoading(false)}>OFF</button>
			{isLoading ? (
				<Loading config={config}/>
			) : (
				<h1 style={{ height: '300px' }}>LoadComponent</h1>
			)}
		</div>
	);
};

export default Load;

export const Loading = ({ config }) => {
	return (
		<LoadingComponent { ...config } >
			<span />
		</LoadingComponent>
	)	
};

const rotate = keyframes`
	0% { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
`;

const animate = css`
	animation-name: ${rotate};
	animation-duration: 1s;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
`;

const LoadingComponent = styled.div`
	height: 300px;
	display: flex;
	span {
		${props => props.active && animate}
		margin: auto;
		width: ${props => props.size ? props.size : '40' }px;
		height: ${props => props.size ? props.size : '40' }px;
		border: 8px solid #ddd;
		border-top: 8px solid skyblue;
		border-right: 8px solid skyblue;
		border-radius: 50%;
		transition: border .5s;
	}

	@media screen and (max-width: 1000px) {
		span {
			border-right: 8px solid tomato;
			border-top: 8px solid tomato;
		}
	}
`;
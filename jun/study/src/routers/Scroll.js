import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

const Scroll = () => {
	const sec = useRef();
	const [active, setActive] = useState(false);

	const onScroll = () => {
		if (window.scrollY + 50 > sec.current.offsetTop) {
			setActive(true);
		} else {
			setActive(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
		}
	}, []);

	return (
		<ScrollComponent active={active}>
			<header />
			<figure />
			<section ref={sec} >
				<div></div>
				<div></div>
				<div></div>
			</section>
			<figure />
		</ScrollComponent>
	);
};

export default Scroll;

const activeStyle = css`
	background: navy;
	height: 100px;
`;

const ScrollComponent = styled.main`
	padding: 50px 10% 0;

	header {
		height: 50px;
		width: 100%;
		background: blue;
		position: fixed;
		top: 0;
		left: 0;
		transition: .3s;

		${props => props.active && activeStyle}
	}

	figure {
		height: 150vh;
		background: #ddd;
		margin: 0; padding: 0;
	}

	section {
		margin: 20px 0;
		display: flex;

		div {
			height: 300px;
			background: #444;
			flex-grow: 1;
			&:not(:last-child) {
				margin-right: 20px;
			}
		}
	}
`;

// 1. 스크롤이벤트로 현재의 scrollY 위치를 잡아준다.
// 2. 내가 변화시키고자 하는 지점의 위치를 구한다. 방법은 다양하다. 여기서는 uesRef + offsetTop
// 3. 해당 위치가 될 때 state에 변화를 준다.
// 4. 해당 변화에 맞추어서 작용하는 styled 문법을 작성한다.
// * 결론: useRef + scroll EventListener + styled-component + props 넘기기
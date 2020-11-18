import React, { useEffect, useRef, useState } from 'react';
import Axios from 'axios';

const JUSO_API = process.env.JUSO_API;
const JUSO_URL = process.env.JUSO_URL;

const Juso = () => {
	const inputElement = useRef();
	const [keyword, setKeyword] = useState('');
	const [keyword2, setKeyword2] = useState('');
	const [list, setList] = useState([]);
	const [total, setTotal] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);

	const params = (arr) => {
		const data = [];
		for (let key in arr) {
			data.push(`${key}=${arr[key]}`);
		}
		return data.join('&');
	};

	const onSubmit = (ev) => {
		ev.preventDefault();
		setKeyword2(keyword);
	};

	const search = () => {
		const payload = {
			confmKey: JUSO_API,
			currentPage,
			countPerPage: 10,
			resultType: 'json',
			keyword: keyword2
		};

		const _payload = params(payload);

		Axios.get(`${JUSO_URL}?${_payload}`).then(res => {
			const { data: { results: { common: { totalCount }, juso } } } = res;
			setList(juso);
			setTotal(totalCount);
		}).catch(error => {
			console.log(error);
		});
	};

	const next = () => {
		setCurrentPage(currentPage + 1);
	};

	useEffect(() => {
		if (keyword2 !== '') {
			search();
		}
	}, [currentPage]);

	// 유저가 검색 버튼을 누를 때
	useEffect(() => {
		if (keyword2 !== '') {
			if (currentPage === 1) {
				search();
			} else {
				setCurrentPage(1);
			}
		}
	}, [keyword2]);

	useEffect(() => {
		// 처음 시작할 떄, init
		inputElement.current.focus();
	}, []);

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input ref={inputElement} value={keyword} onChange={(ev) => setKeyword(ev.target.value)} />
				<button>검색</button>
			</form>
			<h1>{keyword2}에 대한 검색결과 입니다({total})</h1>
			<h1>Current page: {currentPage}</h1>
			<ul>
				{list.map((item, index) => (
					<li key={`ADDR_LIST${index}`}>{item.roadAddrPart1}</li>
				))}
			</ul>
			<div>
				<button>이전</button>
				<button onClick={next}>다음</button>
			</div>
		</div>
	);
};

export default Juso;

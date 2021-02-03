import React, { useState } from 'react';
const { daum } = window;

const Kakao = () => {
	const [address, setAddress] = useState("");
	
	const search = () => {
		new daum.Postcode({
			oncomplete: (data) => {
				const { roadAddress, jibunAddress, buildingName } = data;
				setAddress(`${roadAddress} (${buildingName})`);
			},
		}).open();
	};

	return (
		<div>
			<button onClick={search}>주소찾기</button>
			<h1>{address}</h1>
		</div>
	);
};

export default Kakao;

// 1. 카카오 daum 주소 링크를 dist/index.html에 스크립트로 추가.
// 2. 사용할 컴퍼넌트에서 daum을 선언해준다.
// 3. daum에 있는 Postcode를 이용하여 팝업창을 띄워준다.
// 4. onComplete 함수로 내가 검색한 주소 데이터의 리턴값을 받는다.
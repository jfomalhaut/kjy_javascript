import React from 'react';

function Page1({ history }) {

	const goPage2 = () => {
		history.push('/page2/apple');
	};

	return (
		<div>
			<h1>Page1 Component</h1>
			<button onClick={goPage2}>Page2로 이동</button>
		</div>
	);
};

export default Page1;
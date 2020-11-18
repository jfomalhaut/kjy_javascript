import React from 'react';

function Page2({ match: { params: { name } } }) {
	return (
		<div>
			<h1>Page2 Component</h1>
			<h1>Params Value : {name}</h1>
		</div>
	);
};

export default Page2;
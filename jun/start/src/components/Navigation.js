import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<header>
			<ul>
				<li>
					<Link to="/page1">Page1</Link>
				</li>
				<li>
					<Link to="/page2/default">Page2</Link>
				</li>
				<li>
					<Link to="/signup">Signup</Link>
				</li>
				<li>
					<Link to="/juso">주소</Link>
				</li>
			</ul>
		</header>
	);
};

export default Navigation;
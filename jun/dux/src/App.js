import React from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import { Detail, List, Signin } from './routers';
import { useSelector } from 'react-redux';

const App = () => {
	const { count, data } = useSelector(({ CounterReducer }) => CounterReducer);

	return (
		<BrowserRouter>
			{/* <Link to="/list">List Page</Link>
			<Link to="/detail">Detail Page</Link>
			<h1>COUNT: {count}</h1>
			<h1>DATA: {data}</h1> */}
			<Switch>
				<Route path="/detail" component={Detail}/>
				<Route path="/list" component={List}/>
				<Route path="/signin" component={Signin}/>
				<Redirect to="/signin" />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
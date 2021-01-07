import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { Navigation } from './components';
import { Book, Book2, Counter, Items, Juso, Page1, Page2, Signup, Load } from './routers';

function App() {
	
	return (
		<Router>
			{/* <Navigation /> */}
			<GlobalStyles />
			<Switch>
				<Route path="/page1" render={(props) => (
					<Page1 history={props.history} />
				)} />
				<Route path="/page2/:name" component={Page2} />
				<Route path="/signup" component={Signup} />
				<Route path="/juso" component={Juso} />
				<Route path="/counter" component={Counter} />
				<Route path="/book" component={Book} />
				<Route path="/book2" component={Book2} />
				<Route path="/load" component={Load} />
				<Route path="/items/:type" component={Items} />
				<Redirect to="/counter" />
			</Switch>
		</Router>
	);
};

export default App;

const GlobalStyles = createGlobalStyle`
	* { margin: 0; padding: 0; user-select: none; box-sizing: border-box; list-style: none; }
	body { background-color: #f9f9f9; }
`;
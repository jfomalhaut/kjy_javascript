import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Navigation } from './components';
import { Juso, Page1, Page2, Signup } from './routers';

function App() {
	
	return (
		<Router>
			<Navigation />
			<Switch>
				<Route path="/page1" render={(props) => (
					<Page1 history={props.history} />
				)} />
				<Route path="/page2/:name" component={Page2} />
				<Route path="/signup" component={Signup} />
				<Route path="/juso" component={Juso} />
				<Redirect to="/juso" />
			</Switch>
		</Router>
	);
};

export default App;

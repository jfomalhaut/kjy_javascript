import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { Navigation } from './components';
import { Page1, Page2, SignUp } from './routers';

function App(){
    return (
        <Router>
            <Navigation/>
            <Switch>
                <Route path="/page1" render={(props) => (
                    <Page1 name="금지연" history={props.history}/>
                )} />
                <Route path="/page2/:name" component={Page2}/>
                <Route path="/signup" component={SignUp} />
                <Redirect to="/signup" />
            </Switch>
        </Router>
    );
}

export default App;
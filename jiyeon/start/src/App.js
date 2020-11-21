import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { Navigation } from './components';
import { Page1, Page2, SignUp, Page3, Juso, Juso2 } from './routers';

function App(){
    return (
        <Router>
            <Navigation/>
            <Switch>
                <Route path="/page1" render={(props) => (
                    <Page1 name="금지연" history={props.history}/>
                )} />
                <Route path="/page2/:name" component={Page2}/>
                <Route path="/page3/:id" component={Page3}/>
                <Route path="/signup" component={SignUp} />
                <Route path="/juso" component={Juso} />
                <Route path="/juso2" component={Juso2} />
                <Redirect to="/juso2" />
            </Switch>
        </Router>
    );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { Navigation } from './components';
import { Page1, Page2, SignUp, Page3, Juso, Juso2, Items, Book, Counter } from './routers';
import { createGlobalStyle } from 'styled-components';


function App(){
    return (
        <Router>
            {/* <Navigation/> */}
            <Global />
            <Switch>
                <Route path="/page1" render={(props) => (
                    <Page1 name="금지연" history={props.history}/>
                )} />
                <Route path="/page2/:name" component={Page2}/>
                <Route path="/page3/:id" component={Page3}/>
                <Route path="/signup" component={SignUp} />
                <Route path="/juso" component={Juso} />
                <Route path="/juso2" component={Juso2} />
                <Route path="/items/:type" component={Items}/>
                <Route path="/book" component={Book}/>
                <Route path="/counter" component={Counter}/>
                <Redirect to="/book" />
            </Switch>
        </Router>
    );
}

export default App;

const Global = createGlobalStyle`
    *{
        margin: 0; padding: 0; user-select: none; box-sizing: border-box; list-style: none;
    }

    body{
        background-color: #f9f9f9;
    }
`;
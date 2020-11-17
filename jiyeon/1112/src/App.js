import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Page1, Page2, Calc } from './routers';
import { Navigation } from './components';

function App() {
    return (
            <BrowserRouter>
                <Navigation />
                <Switch>
                    <Route path="/page1" render={(props) =>(
                        <Page1 name="jiyeon" props={props} />
                    )}>
                    </Route>
                    {/* <Route path="/page1" component={Page1} /> */}
                    <Route path="/page2/:name" component={Page2} />
                    <Route path="/calc" component={Calc} />
                </Switch>
            </BrowserRouter>
    );
}

export default App;
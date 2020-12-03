import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Main, AddNum, Juso, Items, Book } from './routers';


const App = () =>{
    return(
        <Router>
            <Switch>
                <Route path="/main/:id" component={Main}/>
                <Route path="/addNum" component={AddNum}/>
                <Route path="/juso" component={Juso}/>
                <Route path="/items/:type" component={Items}/>
                <Route path="/book" component={Book}/>
            </Switch>
        </Router>
    );
}


export default App;
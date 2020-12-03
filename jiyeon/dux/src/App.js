import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Detail from './router/Detail';
import List from './router/List';
import { useSelector } from 'react-redux';

const App = () => {

    const count = useSelector(({CounterReducer}) => CounterReducer.count); //구독

    return(
        <BrowserRouter>
            <Link to="/list">list page</Link>
            <Link to="/detail">detail page</Link>
            <h1>Count: {count}</h1>
            <Switch>
                <Route path="/detail" component={Detail}/>
                <Route path="/list" component={List}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
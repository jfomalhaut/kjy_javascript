import React from 'react';
import { Route } from 'react-router-dom';
import P1 from './P1';

const Page3 = ({match}) => {
    return (
        <Route path="/page3/p1" component={P1} />
        // <Route path={`${match.path}/:id`} component={Page3Detail}></Route>
    );
}

export default Page3;
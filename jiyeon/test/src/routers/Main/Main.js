import React from 'react';

const Main = ({history, match : { params : { id }}}) => {

    const goPage = () => {
            history.push('/addNum');
    }
    return(
        <div>
            <h1>main page</h1>
            <div>this page is {id}</div>
            <button onClick={goPage}>go addNum Page</button>
        </div>
    );
}

export default Main;
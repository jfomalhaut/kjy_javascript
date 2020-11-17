import React from 'react';

const Page2 = ({ match: { params: { name }}}) => {
    return (
        <div>
            <div>Page2</div>
            <h1>name value: {name}</h1>
        </div>
    );
}

export default Page2;
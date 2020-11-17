import React from 'react';

function Page2({ match: { params: { name }} }){
    
    return (
        <div>
            <h1>page2</h1>
            <h1>Params value: {name}</h1>
        </div>
    );
};

export default Page2;
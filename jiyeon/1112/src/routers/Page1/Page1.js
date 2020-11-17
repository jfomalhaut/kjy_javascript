import React from 'react';

function Page1({ props }){
    console.log(props);
    const goPage = () => {
        props.history.push('/page2/parameter');
    }
    return (
        <div>
            <div>Page1</div>
            <button onClick={goPage}>go page2</button>
        </div>
    );
}

export default Page1;
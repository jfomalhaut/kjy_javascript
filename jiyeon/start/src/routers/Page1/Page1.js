import React from 'react';

function Page1({ history }){
    // console.log(props);
    const goPage2 = () => {
        history.push('/page2/apple');
    };

    return (
        <div>
            <h1>page1</h1>
            <button onClick={goPage2}>Page2 로 이동</button>
        </div>
        
    );
};

export default Page1;
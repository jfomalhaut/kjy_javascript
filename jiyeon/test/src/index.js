import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from './SignUp';
// import App from './App';

handleCreate = (data) => {
    console.log(data);
}
ReactDOM.render(
    <div>
        {/* <SignUp
            onCreate={this.handleCreate}
        /> */}
        <SignUp />
        <div>hello</div>
    </div>
    , document.getElementById("root"));
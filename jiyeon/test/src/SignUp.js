import React from 'react';

state = {
    "id": "",
    "password": "",
    "userName": "",
    "phoneNum": "",
    "img": ""
}

handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleSubmit = (e) => {
    e.preventDefault(); //페이지 리로딩 방지 
    this.props.onCreate(this.state); //상태 값을 onCreate를 통하여 부모에게 전달
    this.setState({
        "id": "",
        "password": "",
        "userName": "",
        "phoneNum": "",
        "img": ""
    }) //초기화
}

SignUp = () => {
    return(
        <form>
            <input
                placeholder="ID"
                value={this.state.id}
                onchange={this.handleChange}
                name="id">
            </input>
            <input
                placeholder="Password"
                value={this.state.password}
                onchange={this.handleChange}
                name="password">
            </input>
            <input
                placeholder="name"
                value={this.state.usetName}
                onchange={this.handleChange}
                name="userName">
            </input>
            <input
                placeholder="address"
                value={this.state.address}
                onchange={this.handleChange}
                name="address">
            </input>
            <button type="submit">sign up</button>
        </form>
    );
}

export default signUp;
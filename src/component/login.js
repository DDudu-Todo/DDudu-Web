import React, { Component } from "react";
import "./login.css";
import md5 from "md5";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "username",
      password: "password",
      client_id: "1540268f26cf9428dc8d5e06a18aa583",
      redirect_uri: "http://localhost:3000/user/kakao/oauth"
    };
  }

  handleKakaoLogin = () => {
    const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${this.state.client_id}&redirect_uri=${this.state.redirect_uri}`
    window.location.href = KAKAO_AUTH_URI;
  }

  //form handling before submission
  handleInputChange = (event) => {
    const target = event.target;
    let value = event.target.value;
    const name = target.name;

    if (target.name === "password") {
      document.getElementById(name).type = "password";
      value = md5(event.target.value);
    }

    this.setState({
      [name]: value,
    });

    document.getElementById(name).style.fontFamily = "Montserrat black";
  };

  setEmptyValue = (event) => {
    const name = event.target.name;
    document.getElementById(name).value = "";
  };

  render() {
    return (
      <div className="login">
        <h4>Sign In</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="text_area">
            <input
              type="text"
              id="username"
              name="username"
              defaultValue={this.state.username}
              onChange={this.handleInputChange}
              onFocus={this.setEmptyValue}
              className="text_input"
            />
          </div>
          <div className="text_area">
            <input
              type="text"
              id="password"
              name="password"
              defaultValue={this.state.password}
              onChange={this.handleInputChange}
              onFocus={this.setEmptyValue}
              className="text_input"
            />
          </div>
          <input type="submit" value="SIGN IN" className="btn" />
        </form>
        <br />
        <button className="btn" onClick={this.handleKakaoLogin}>SIGN IN with KAKAO</button>
        <div className="SignUp">
          <a className="link" href="/signup">
            Sign Up
          </a>
        </div>
      </div>
    );
  }
}

export default Signin;

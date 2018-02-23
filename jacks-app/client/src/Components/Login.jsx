import React, { Component } from "react";
import axios from "axios";
import {Link } from "react-router-dom";


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      username: "",
      password: "",
      actualpassword: ""
    };

    this.getUserByUsername = this.getUserByUsername.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkCredentials = this.checkCredentials.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });

    console.log(this.state.username);
    console.log(this.state.password);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getUserByUsername();
  }

  getUserByUsername() {
    axios({
      url: `http://localhost:8080/users/login/${this.state.username}`,
      method: "get"
    }).then(response => {
      this.setState(
        {
          user: response.data,
          actualpassword: response.data.password
        },
        this.checkCredentials
      );
    });
  }

  checkCredentials() {
    console.log("checking");
    if (this.state.actualpassword === this.state.password) {
      this.props.changeUserState(this.state.user);
      this.props.history.push("/items");
    } else {
      console.log("no match");
      this.props.history.push("/Login");
    }
  }

  render() {
    return (
      <div className="signIn">
        {/*<h1>Sign In</h1>*/}
        <form className="sign_in_form" onSubmit={this.handleSubmit}>
          <input
            className="sign_in_field"
            type="text"
            placeholder="User Name"
            name="username"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <input
            className="sign_in_password_field"
            type="text"
            placeholder="Password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <input
            className="sign_in_submit"
            type="submit"
            name="submit"
            value="Sign In"
          />
        </form>
        <p className="register">
        Don't have an account?
        <Link to="/Sign_up" className="link"> Register Now</Link>
        </p>
      </div>
    );
  }
}
export default Login;

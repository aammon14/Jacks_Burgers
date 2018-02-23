import React, { Component } from "react";
import axios from "axios";
import {Link } from "react-router-dom";


class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createUser = this.createUser.bind(this);
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
    this.createUser();
  }

  createUser() {
    axios({
      url: "/users",
      method: "POST",
      data: this.state
    }).then(response => {
      this.props.changeUserState(response.data);
      this.props.history.push("/sign_in");
      console.log(this.props.state.user);
    });
  }

  render() {
    return (
      <div className ="signUp">
          {/*<h1 className="sign_up_title">Sign Up</h1>*/}
        <form className="sign_up_form" onSubmit={this.handleSubmit}>
           
          <input
            className="sign_up_field"
            placeholder="User Name"
            type="text"
            name="username"
            onChange={this.handleChange}
            value={this.state.username}
          />
            
            <input
            className="sign_up_password_field"
            type="text"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <input className="sign_up_submit" type="submit" name="submit" value="Sign Up" />
        </form>
        <p className="register">
        <Link to="/Sign_in" className="link"> Sign In</Link> to your account?
        </p>
      </div>
    );
  }

  // methods
}
export default Signup;
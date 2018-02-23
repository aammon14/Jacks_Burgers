import React, { Component } from "react";
import axios from "axios";

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
      console.log(response.data.password);
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
      this.props.history.push("/Sign_In");
    }
  }

  render() {
    return (
      <div>
        <h1>Sign In</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <input
            type="text"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <input type="submit" name="submit" value="Sign In" />
        </form>
      </div>
    );
  }
}
export default Login;

import React, { Component } from "react";
import axios from "axios";

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
      url: "http://localhost:8080/users",
      method: "POST",
      data: this.state
    }).then(response => {
      this.props.changeUserState(response.data);
      this.props.history.push("/");
      console.log(this.props.state.user);
    });
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
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
          <input type="submit" name="submit" value="Sign Up" />
        </form>
      </div>
    );
  }

  // methods
}
export default Signup;

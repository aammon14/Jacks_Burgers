import React, { Component } from "react";
import axios from "axios";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      actualpassword: ""
    };

    this.getUser = this.getUser.bind(this);
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
    this.getUser();
  }

  getUser() {
    axios({
      url: `localhost:3000/users/${this.state.username}`,
      method: "get"
    }).then(response => {
      this.setState({
        actualpassword: response.data
      });
      this.checkCredentials();
    });
  }

  checkCredentials() {
    if (this.state.actualpassword === this.state.password) {
      this.props.history.push("/items");
    } else {
      this.props.history.push("/signin");
    }
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

import React, { Component } from "react";
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.getUser = this.getUser.bind(this);
  }

  getUser() {
    axios({
      url: "localhost:3000/users/:id",
      method: "get"
    }).then(response => {});
  }

  render() {
    return (
      <div>
        <h1>Please Log In</h1>
      </div>
    );
  }

  // methods
}
export default Login;

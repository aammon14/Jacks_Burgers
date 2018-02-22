import React, { Component } from "react";
import axios from "axios";

class UserEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.state.user.id,
      username: this.props.state.user.username,
      password: this.props.state.user.password
    };

    this.getUser = this.getUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  getUser() {
    axios({
      url: `http://localhost:8080/users/${this.state.id}`,
      method: "put"
    }).then(response => {
      this.props.changeUserState(response.data);
    });
  }

  render() {
    return (
      <div>
        <h1>Edit your profile</h1>
        <input
          type="text"
          value={this.state.username}
          name="username"
          onChange={this.handleChange}
        />
        <input
          type="text"
          value={this.state.password}
          name="username"
          onChange={this.handleChange}
        />
        <input type="submit" name="submit" value="Update" />
      </div>
    );
  }

  // methods
}
export default UserEdit;

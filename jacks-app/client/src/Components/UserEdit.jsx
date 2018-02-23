import React, { Component } from "react";
import axios from "axios";
import {Link } from "react-router-dom";


class UserEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.state.user.id,
      username: this.props.state.user.username,
      password: this.props.state.user.password
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.delete = this.delete.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.updateUser();
  }

  updateUser() {
    axios({
      url: `http://localhost:8080/users/edit/${this.state.user}`,
      method: "put",
      data: this.state
    }).then(response => {
      this.props.changeUserState(response.data);
      this.props.history.push("/items");
      console.log(this.props.state.user);
    });
  }

  delete() {
    axios({
      url: `http://localhost:8080/users/${this.state.user}`,
      method: "delete"
    }).then(() => {
      console.log("user deleted");
      this.props.history.push("/");
    });
  }

  render() {
    return (
      <div className='edit'>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h1 className='edit_title'>Edit your profile</h1>
            <input
              className="edit_field"
              placeholder="Edit Your Name"
              type="text"
              value={this.state.username}
              name="username"
              onChange={this.handleChange}
            />
            <input
              className="edit_password"
              placeholder="edit Your Password"
              type="text"
              value={this.state.password}
              name="password"
              onChange={this.handleChange}
            />
            <input className='edit_submit' type="submit" name="submit" value="Update" />
          </div>
        </form>
        <button className="delete"  onClick={this.delete}>Delete Account</button>
      </div>
    );
  }
}
export default UserEdit;

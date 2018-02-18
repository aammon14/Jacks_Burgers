import React, { Component } from "react";
import axios from 'axios';


class UserEdit extends Component {
  constructor(props) {
    super(props)
    this.getUser = this.getUser.bind(this);
  }

  getUser() {
    axios({
      url: "localhost:3000/users/:id",
      method: "put"
    }).then(response => {});
  }

  render(){
    return(
      <div>
        <h1>Edit your profile</h1>
      </div>
      );
  }

  // methods
}
export default UserEdit;
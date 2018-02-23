import React, { Component } from "react";
import axios from "axios";

class EditItem extends Component {
  constructor(props) {
    super(props);
    this.EditOrder = this.EditOrder.bind(this);
  }

  createOrder() {
    axios({
      url: "/orders/",
      method: "put"
    }).then(response => {});
  }

  render() {
    return (
      <div>
        <h1>Edit Your Order</h1>
      </div>
    );
  }
}

export default EditItem;

import React, { Component } from "react";
import axios from 'axios';


class Order extends Component {
  constructor(props) {
    super(props);
    this.getOrder = this.getOrder.bind(this);

  }
  getOrder() {
    axios({
      url: "localhost:3000/orders/:id",
      method: "get"
    }).then(response => {});
  }
  render() {
    return <div className="App" />;
  }
}

export default Order;

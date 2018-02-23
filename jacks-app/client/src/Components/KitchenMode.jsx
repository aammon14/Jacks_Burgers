import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class KitchenMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: 0,
      status: "inprogress",
      currentOrders: [],
      currentOrdersItems: []
    };
    this.getCurrentOrders = this.getCurrentOrders.bind(this);
    this.getCurrentOrdersItems = this.getCurrentOrdersItems.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitOrder = this.submitOrder.bind(this);
  }

  componentDidMount() {
    this.getCurrentOrders();
    this.getCurrentOrdersItems();
  }

  getCurrentOrders() {
    axios({
      url: "/orders/current",
      method: "get"
    }).then(response => {
      this.setState({
        currentOrders: response.data
      });
    });
  }

  getCurrentOrdersItems() {
    axios({
      url: "/orders/currentitem",
      method: "get"
    }).then(response => {
      this.setState({
        currentOrdersItems: response.data
      });
    });
  }

  handleSubmit(id, user_id) {
    this.setState(
      {
        status: "completed",
        order: id,
        user: user_id
      },
      this.submitOrder
    );
  }

  submitOrder() {
    console.log(
      "in submit order, this.state.currentOrders: ",
      this.state.currentOrders
    );
    axios({
      url: "/orders/",
      method: "PUT",
      data: this.state
    }).then(response => {
      this.getCurrentOrders();
    });
  }

  render() {
    const current = this.state.currentOrders.map((el, i) => {
      return (
        <li className="currOrderItem" key={i}>
          <div className="currOrderText">
            <p>
              <em>
                Order {el.id}, for {el.username}:
              </em>
            </p>
            {this.state.currentOrdersItems.map((item, i) => {
              if (item.order_id == el.id) {
                return (
                  <p key={i} className="currItem">
                    <input id="checkBox" type="checkbox" />
                    <b>{item.name}</b>, {item.comment}
                  </p>
                );
              }
            })}
          </div>
          <div className="currOrderButtonDiv">
            <button
              value={el.id}
              onClick={this.handleSubmit.bind(this, el.id, el.user_id)}
              className="orderCompleteButton"
            >
              Mark Order {el.id} Complete
            </button>
          </div>
        </li>
      );
    });
    return (
      <div className="currentOrderDiv">
        <Link to="/items">Back to Menu</Link>
        <h1>
          <em>Current Orders</em>
        </h1>
        <ul>{current}</ul>
      </div>
    );
  }
}

export default KitchenMode;

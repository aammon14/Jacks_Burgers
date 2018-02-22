import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class PreviousOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      prevOrders: [],
      prevOrdersItems: []
    };

    this.getPrevOrders = this.getPrevOrders.bind(this);
    this.getPrevOrdersItems = this.getPrevOrdersItems.bind(this);
  }

  componentDidMount() {
    this.getPrevOrders();
    this.getPrevOrdersItems();
  }

  getPrevOrders() {
    axios({
      url: "http://localhost:8080/orders/previous",
      method: "get"
    }).then(response => {
      this.setState({
        prevOrders: response.data
      });
      console.log("in getPrevOrders prevOrders: ", response.data);
    });
  }

  getPrevOrdersItems() {
    axios({
      url: "http://localhost:8080/orders/previousitem",
      method: "get"
    }).then(response => {
      this.setState({
        prevOrdersItems: response.data
      });
      console.log("in getPrevOrdersItems prevOrdersItems: ", response.data);
    });
  }

  render() {
    const prev = this.state.prevOrders.map((el, i) => {
      return (
        <li className="prevOrderItem" key={i}>
          <div className="prevOrderText">
            <p>Order Number: {el.id}</p>
            {this.state.prevOrdersItems.map((item, i) => {
              if (item.order_id == el.id) {
                return (
                  <p key={i} className="prevItem">
                    <b>{item.name}</b>, ${item.price}, Special Instructions:{" "}
                    {item.comment}
                    <br />
                    <Link className="orderAgain" to={`/items/${el.id}`}>
                      <b>Order {item.name} Again</b>
                    </Link>
                  </p>
                );
              }
            })}
          </div>
          <div className="prevOrderButtonDiv" />
        </li>
      );
    });
    return (
      <div className="prevOrderDiv">
        <Link to="/items">Back to Menu</Link>
        <h1>
          <em>Recent Orders</em>
        </h1>
        <ul>{prev}</ul>
      </div>
    );
  }
}

export default PreviousOrders;

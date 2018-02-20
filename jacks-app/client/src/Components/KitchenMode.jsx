import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

class KitchenMode extends Component {
  constructor(props) {
  super(props);
  this.state = {
    orders: this.props.orders,
    currentOrders: []
  };
  this.getCurrentOrders = this.getCurrentOrders.bind(this);
  }
  getCurrentOrders() {
    axios({
      url: "http://localhost:8080/orders/current",
      method: "get"
    }).then(response => {
      this.setState({
        currentOrders: response.data
      });
    });
  }
  componentDidMount() {
    this.getCurrentOrders()
  }
  render() {
    const current = this.state.currentOrders.map((el, i) => {
      return (
        <li className='currOrderItem' key={i}>
          <div className='prevOrderText'>
            <h3>{el.name}</h3>
            <p>Special Instrucitons: {el.comment}</p>
          </div>
          <div className='prevOrderButtonDiv'>
            <button className='orderAgainButton'>Mark Order Complete</button>
          </div>
        </li>
      )
    })
    return(
      <div className='prevOrderDiv'>
        <h1>Current Orders</h1>
        <ul>{current}</ul>
      </div>
    );
  }
}

export default KitchenMode;
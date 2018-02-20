import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

class KitchenMode extends Component {
  constructor(props) {
  super(props);
  this.state = {
    orders: this.props.orders,
    status: 'inprogress',
    currentOrders: []
  };
  this.getCurrentOrders = this.getCurrentOrders.bind(this);
  this.completeCurrentOrder = this.completeCurrentOrder.bind(this);
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
  completeCurrentOrder() {
    axios({
      url: "http://localhost:8080/orders/current",
      method: "put"
    }).then(response => {
      this.props.markOrderComplete();
    });
  }
  componentDidMount() {
    this.getCurrentOrders();
  }

handleSubmit(e) {
    e.preventDefault();
    this.setState({
      status: "completed"
    }, this.submitOrder)
  }

  submitOrder() {
    console.log(this.state.status);
    axios({
      url: "http://localhost:8080/orders",
      method: "PUT",
      data: this.state
    }).then(response => {
      console.log(response)
    });
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
            <button onClick={this.handleSubmit} className='orderAgainButton'>Mark Order Complete</button>
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
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

class KitchenMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: 0,
      status: 'inprogress',
      currentOrders: [],
      user: 1
    };
    this.getCurrentOrders = this.getCurrentOrders.bind(this);
    //this.completeCurrentOrder = this.completeCurrentOrder.bind(this);
    this.getCurrentOrdersItems = this.getCurrentOrdersItems.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitOrder = this.submitOrder.bind(this);
  };

  getCurrentOrders() {
    axios({
      url: "http://localhost:8080/orders/current",
      method: "get"
    }).then(response => {
      this.setState({
        currentOrders: response.data
      });
      console.log('in getCurrentOrders currentOrders: ', response.data)
    });
  };

  getCurrentOrdersItems() {
    axios({
      url: "http://localhost:8080/orders/currentitem",
      method: "get"
    }).then(response => {
      this.setState({
        currentOrdersItem: response.data
      });
    });
  };

  componentDidMount() {
    this.getCurrentOrders();
  };

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      status: "completed",
      order: 1
    }, this.submitOrder)
  };

  submitOrder() {
    console.log('in submit order, this.state.currentOrders: ', this.state.currentOrders)
    console.log(this.state.status);
    axios({
      url: "http://localhost:8080/orders/",
      method: "PUT",
      data: this.state
    }).then(response => {
      console.log(this.state.currentOrders)
    });
  };

  render() {
    const current = this.state.currentOrders.map((el, i) => {
      //console.log(this.state.currentOrders[0])
      return (
        <li className='currOrderItem' key={i}>
          <div className='prevOrderText'>
            <p>Order Number: {el.id}</p>
            <p>Order for: {el.username}</p>
            <p>Status: {el.status}</p>
            <div>
          
            </div>
          </div>
          <div className='prevOrderButtonDiv'>
            <button value={el.id} onClick={this.handleSubmit} className='orderAgainButton'>Mark Order {el.id} Complete</button>
          </div>
        </li>
      )
    })
    return(
      <div className='prevOrderDiv'>
        <Link to='/items'>Back to Menu</Link>
        <h1>Current Orders</h1>
        <ul>{current}</ul>
      </div>
    );
  };
};

export default KitchenMode;
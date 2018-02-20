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
  };

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      status: "completed"
    }, this.submitOrder)
  };

  submitOrder() {
    console.log(this.state.status);
    axios({
      url: "http://localhost:8080/orders",
      method: "PUT",
      data: this.state
    }).then(response => {
      console.log(response)
    });
  };

  render() {
    const item = this.state.currentOrdersItem.map((el, i) => {
      return (
        <div>{el.name}</div>
      )
    })
    const current = this.state.currentOrders.map((el, i) => {
      console.log(this.state.currentOrders)
      return (
        <li className='currOrderItem' key={i}>
          <div className='prevOrderText'>
            <p>Order Number: {el.id}</p>
            {item}
          </div>
          <div className='prevOrderButtonDiv'>
            <button onClick={this.handleSubmit} className='orderAgainButton'>Mark Order Complete</button>
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
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
      currentOrdersItems: [],
      user: this.props.state.user
    };
    this.getCurrentOrders = this.getCurrentOrders.bind(this);
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
        currentOrdersItems: response.data
      });
      console.log('in getCurrentOrdersItems currentOrdersItems: ', response.data)
    });
  };

  componentDidMount() {
    this.getCurrentOrders();
    this.getCurrentOrdersItems();

  };

  handleSubmit(id, user_id) {
    this.setState({
      status: "completed",
      order: id,
      user: user_id
    }, this.submitOrder)
  };

  submitOrder() {
    console.log('in submit order, this.state.currentOrders: ', this.state.currentOrders)
    console.log('in submitOrder, this.state: ', this.state);
    axios({
      url: "http://localhost:8080/orders/",
      method: "PUT",
      data: this.state
    }).then(response => {
      console.log(this.state.currentOrders);
      this.getCurrentOrders();
    });
  };

  render() {
    const current = this.state.currentOrders.map((el, i) => {
      return (
        <li className='currOrderItem' key={i}>
          <div className='prevOrderText'>
            <p>Order Number: {el.id}</p>
            <p>Order for: {el.username}</p>
            <p>Status: {el.status}</p>
          <div>
          </div>
            {this.state.currentOrdersItems.map((item, i) => {
              if (item.order_id == el.id) {
              return (
                <p key={i}>Items: {item.name} {item.order_id}</p>  
              ) 
              }
            })}
          </div>
          <div className='prevOrderButtonDiv'>
            <button value={el.id} onClick={this.handleSubmit.bind(this, el.id, el.user_id)} className='orderAgainButton'>Mark Order {el.id} Complete</button>
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
import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import axios from 'axios';


class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: this.props.orders,
      prevOrders: []
    };
    this.getPrevOrders = this.getPrevOrders.bind(this);
    console.log(this.state.prevOrders)
  }
  getPrevOrders() {
    axios({
      url: "http://localhost:8080/orders/previous",
      method: "get"
    }).then(response => {
      this.setState({
        prevOrders: response.data
      });
      console.log('in getPrevOrders, response.data: ', response.data);
      console.log('it getPrevOrders, this.state.prevOrders: ', this.state.prevOrders)
    });
  }
  componentDidMount() {
    this.getPrevOrders()
  }
  render(){
    const prev = this.state.prevOrders.map((el, i) => {
      return (
        <ul>
          <li>{el.name}, {el.description}, ${el.price}, Special Instrucitons: {el.comment}</li>
        </ul>
      )
    })
    return(
      <div>
        <h1>Previous Orders</h1>
        <p>{prev}</p>
      </div>
    );
  }
}

export  default Orders;
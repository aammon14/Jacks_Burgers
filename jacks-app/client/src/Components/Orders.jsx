import React, { Component } from "react";
import { Link } from "react-router-dom";
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
        <li className='prevOrderItem'>
          <div className='prevOrderText'>
            <h3>{el.name}</h3>
            <p>{el.description}, ${el.price}</p><p>Special Instrucitons: {el.comment}</p>
          </div>
          <div className='prevOrderButtonDiv'>
            <Link to={`/items/${el.id}`}>
            <button className='orderAgainButton'>Order {el.name} Again!</button>
            </Link>
          </div>
        </li>
      )
    })
    return(
      <div className='prevOrderDiv'>
        <h1>Previous Orders</h1>
        <ul>{prev}</ul>
      </div>
    );
  }
}

export  default Orders;
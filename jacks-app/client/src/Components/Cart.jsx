import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import axios from "axios";


class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order: props.state.order,
      user: 1,
      completed: "false"

    };

    this.submitOrder = this.submitOrder.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      completed: "Cash"
    });
    this.submitOrder();
  }

  submitOrder() {
    console.log(this.state.completed);
    axios({
      url: "http://localhost:8080/orders",
      method: "PUT",
      data: this.state
    }).then(response => {
      this.props.changeOrderState(0);
      this.props.changeCartState([]);
    });
  }

  componentDidMount() {
    this.props.getCart(this.props.state.order);
  }

  render() {
    console.log(this.props.cart)

    if (!(this.props.cart === [])) {
      const total = this.props.cart.reduce(function(prev,current){
        return prev + current.price
      },0)
      return (
        <div className="cart_container">
          <form onSubmit={this.handleSubmit}>
            {this.props.cart.map((el, i) => {
              return (
                <div key={i}>
                  <Link
                    className="cart_item_div_content"
                    to={`/items/${el.id}`}
                  >
                    <h1 className="cart_item_name">{el.name} ${el.price}</h1>
                    <p>{el.description}</p>
                    <p>Comment: {el.comment}</p>
                  </Link>
                </div>
              );
            })}
            <div className="checkout">
            <h3 className='total'> Total  <span> ${total}</span></h3>
            <input className="submit_button" type="submit" value="submit" />
            </div>
          </form>
          
        </div>
      );
    }
  }
}

export default Cart;

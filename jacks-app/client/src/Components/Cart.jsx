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
    if (!(this.props.cart === [])) {
      
      const subtotal=this.props.cart.reduce(function(prev,current){
        return prev + current.price
      },0)
      const nyTax=.0865
      const tax = subtotal * nyTax
      const total = subtotal + tax
      return (
        <div className="cart_container">
        <h2 className="category_title"> Your Cart</h2>
        <div>
        <form onSubmit={this.handleSubmit}>
        <div className="cart_items">
         
            {this.props.cart.map((el, i) => {
              return (
                <div key={i}  className="cart_item_div_content">
                  <Link
                    to={`/items/${el.id}`}
                  >
                    <h2 className="cart_item_name">{el.name} ${el.price}</h2>
                  </Link>
                </div>
              );
            })}  
        </div>
        <div className="checkout">

            <p> Subtotal <span>${subtotal.toFixed(2)}</span>
             <hr className="line" /></p>
           
            <p> Taxes <span className="right"> ${tax.toFixed(2)} </span><hr  className="line"/></p>
            
            <h3 className='total'> Total  <span> ${total.toFixed(2)}</span> <hr  className="line"/></h3>
           
            <input className="submit_button" type="submit" value="submit" />
        </div>
         </form>
         </div>
        </div>
      );
    }
  }
}

export default Cart;

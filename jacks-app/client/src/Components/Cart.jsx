import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order: this.props.state.order,
      total: null,
      user: this.props.state.user.id,
      status: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitOrder = this.submitOrder.bind(this);
  }

  componentDidMount() {
    this.props.getCart(this.props.state.order);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(
      {
        status: "inprogress"
      },
      this.submitOrder
    );
  }

  submitOrder() {
    console.log(this.state.status);
    axios({
      url: "http://localhost:8080/orders",
      method: "PUT",
      data: this.state
    }).then(response => {
      this.props.changeOrderState(0);
      this.props.changeCartState([]);
    });
  }

  render() {
    const subtotal = this.props.cart.reduce(function(prev, current) {
      return prev + current.price;
    }, 0);
    const nyTax = 0.0865;
    const tax = subtotal * nyTax;
    const total = subtotal + tax;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="cart_container">
            <h1> Your Order </h1>
            {this.props.cart.map((el, i) => {
              return (
                <div key={i} className="cart_item_div_content">
                  <Link to={`/items/${el.id}`}>
                    <h1 className="cart_item_name">
                      {el.name} ${el.price}
                    </h1>
                    <p>{el.comment}</p>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="checkout">
            <p>
              Subtotal <span>${Number.parseFloat(subtotal).toFixed(2)}</span>
            </p>
            <p>
              Taxes <span> ${Number.parseFloat(tax).toFixed(2)} </span>
            </p>
            <h3 className="total">
              Total <span> ${Number.parseFloat(total).toFixed(2)}</span>
            </h3>
            <input className="submit_button" type="submit" value="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default Cart;

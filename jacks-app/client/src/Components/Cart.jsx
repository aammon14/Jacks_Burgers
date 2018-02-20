import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order: this.props.state.order,
      user: 1,
      status: "cart",
      total: null
    };

    this.submitOrder = this.submitOrder.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      status: "inprogress"
    }, this.submitOrder)
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
                    <h1 className="cart_item_name">{el.name}</h1>
                    <p>{el.description}</p>
                    <p>{el.price}</p>
                    <p>{el.comment}</p>
                  </Link>
                </div>
              );
            })}
            <input className="submit_button" type="submit" value="submit" />
          </form>
        </div>
      );
    }
  }
}

export default Cart;

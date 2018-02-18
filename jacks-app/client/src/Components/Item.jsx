import React, { Component } from "react";
import axios from "axios";

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {},
      order: 2,
      user: 2
    };

    this.getItem = this.getItem.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
    this.createOrder = this.createOrder.bind(this);
  }

  getItem() {
    axios({
      url: `http://localhost:8080/items/${this.props.match.params.id}`,
      method: "get"
    }).then(response => {
      this.setState({
        item: response.data
      });
      console.log(response.data);
    });
  }

  addItemToCart(e) {
    e.preventDefault();
    axios({
      url: `http://localhost:8080/cart/${this.props.match.params.id}`,
      method: "post",
      data: this.state.order
    }).then(response => {
      this.setState({
        itemAdded: response.data
      });
      console.log(response.data);
    });
  }

  createOrder(user_id) {
    console.log("ran create order");
    axios({
      url: `http://localhost:8080/orders/${user_id}`,
      method: "post"
    }).then(response => {
      this.setState({
        order: response.data.id
      });
    });
  }

  componentDidMount() {
    this.getItem();
    if (this.state.order === 0) {
      this.createOrder(this.state.user);
    }
  }

  render() {
    const order = this.state.order;
    return (
      <div>
        <form onSubmit={this.addItemToCart}>
          <h1>{this.state.item.name}</h1>
          <input type="hidden" name="foot" value={order} />
          <p>{this.state.item.description}</p>
          <p>{this.state.item.price}</p>
          <input type="submit" name="Submit" value="Add To Cart" />
        </form>
      </div>
    );
  }
}

export default Item;

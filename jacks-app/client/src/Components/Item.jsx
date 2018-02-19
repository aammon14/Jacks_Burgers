import React, { Component } from "react";
import axios from "axios";

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {},
      order: this.props.state.order,
      user: 1,
      comment: ""
    };

    this.getItem = this.getItem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createOrder = this.createOrder.bind(this);
    this.addItem = this.addItem.bind(this);
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

  addItem() {
    axios({
      url: `http://localhost:8080/cart/${this.props.match.params.id}`,
      method: "post",
      data: this.state
    }).then(response => {
      this.setState({
        itemAdded: response.data
      });
      console.log(response.data);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.addItem();
    this.props.history.push("/");
  }

  handleChange(event) {
    this.setState({ comment: event.target.value });
    console.log(this.state.comment);
  }

  createOrder(user_id) {
    console.log("ran create order");
    axios({
      url: `http://localhost:8080/orders/${user_id}`,
      method: "post"
    }).then(response => {
      this.props.changeOrderState(response.data.id);
      this.setState({
        order: this.props.state.order
      });
    });
  }

  componentDidMount() {
    this.getItem();
    if (this.props.state.order === 0) {
      this.createOrder(this.state.user);
    }
  }

  render() {
    console.log(this.state.order);
    console.log(this.props.state.order);
    return (
      <div>
        <div className="item_container">
          <form onSubmit={this.handleSubmit}>
            <h1 className="item_specific_name">{this.state.item.name}</h1>
            <p className="item_specific_description">
              {this.state.item.description}
            </p>
            <textarea
              className="comment"
              type="text"
              placeholder="No Salt, Please!"
              value={this.state.comment}
              onChange={this.handleChange}
            />
            <p className="item_specific_price">{this.state.item.price}</p>
            <input
              className="add_to_cart_button"
              type="submit"
              name="Submit"
              value="Add To Cart"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Item;

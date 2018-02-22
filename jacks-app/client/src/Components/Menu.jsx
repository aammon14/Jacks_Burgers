import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import Cart from "./Cart";
import Item from "./Item";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      order: this.props.state.order,
      user: 1,
      comment: ""
    };
    // this.getItem = this.getItem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createOrder = this.createOrder.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  addItem() {
    axios({
      url: `http://localhost:8080/cart/${this.state.item.id}`,
      method: "post",
      data: this.state
    }).then(response => {
      this.setState(
        {
          itemAdded: response.data
        },
        this.props.getCart()
      );
      console.log(response.data);
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.addItem();
  }
  handleChange(event) {
    this.setState({ comment: event.target.value });
    console.log(this.state.comment);
  }
  createOrder(user_id) {
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
    if (this.props.state.order === 0) {
      this.createOrder(this.state.user);
    }
  }
  render() {
    return (
      <div>
        <div className="nav_bar">none</div>
        <div className="menu_container">
          <div>
            {this.props.state.categories.map((category, i) => {
              return (
                <div>
                  <h1 className="Menu_title" id={category}>
                    {category}
                  </h1>;
                  {this.props.items.map((items, i) => {
                    if (items.category === category) {
                      return (
                        <div className="item_div" key={i}>
                          <Link
                            className="item_div_content"
                            to={`/items/${items.id}`}
                          >
                            <h1 className="item_name">{items.name}</h1>
                            <p className="item_description">
                              {items.description}
                            </p>
                            <p className="item_price">${items.price}</p>
                          </Link>
                        </div>
                      );
                    }
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Menu;

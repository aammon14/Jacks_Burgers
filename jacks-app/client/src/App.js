import React, { Component } from "react";
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx";
import Menu from "./Components/Menu.jsx";
import Categories from "./Components/Categories.jsx";
import Checkout from "./Components/Checkout.jsx";
import Past_Orders from "./Components/Pastorders.jsx";

import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.getAllItems = this.getAllItems.bind(this);
    this.getItem = this.getItem.bind(this);
    this.getUser = this.getUser.bind(this);
    this.createUser = this.createUser.bind(this);
    this.getAllOrders = this.getAllOrders.bind(this);
    this.getOrder = this.getOrder.bind(this);
    this.createOrder = this.createOrder.bind(this);
    this.getCart = this.createOrder.bind(this);
    this.addItemToCart = this.createOrder.bind(this);
    this.getItemsByCategory = this.getItemsByCategory.bind(this);

    this.state = {
      user: "",
      items: [],
      cart: [],
      hasData: false
    };
  }

  // Item Calls

  getAllItems() {
    axios({
      url: "localhost:3000/items",
      method: "get"
    }).then(response => {
      this.setState({
        items: response.data,
        hasData: true
      });
    });
  }

  getItem() {
    axios({
      url: "localhost:3000/items/:id",
      method: "get"
    }).then(response => {});
  }

  // User Calls

  getUser() {
    axios({
      url: "localhost:3000/users/:id",
      method: "get"
    }).then(response => {});
  }

  createUser() {
    axios({
      url: "localhost:3000/users/",
      method: "put"
    }).then(response => {});
  }

  // Order Calls

  getAllOrders() {
    axios({
      url: "localhost:3000/orders",
      method: "get"
    }).then(response => {});
  }

  getOrder() {
    axios({
      url: "localhost:3000/orders/:id",
      method: "get"
    }).then(response => {});
  }

  createOrder() {
    axios({
      url: "localhost:3000/orders/",
      method: "put"
    }).then(response => {});
  }

  // Checkout Cart Calls

  addItemToCart() {
    axios({
      url: "localhost:3000/items",
      method: "get"
    }).then(response => {});
  }

  getCart() {
    axios({
      url: "localhost:3000/orders/",
      method: "get"
    }).then(response => {});
  }

  // Past Orders Calls

  getAllPastOrders() {
    axios({
      url: "localhost:3000/orders/",
      method: "get"
    }).then(response => {});
  }

  getItemsByCategory() {
    axios({
      url: "",
      method: "get"
    }).then(response => {});
  }

  componentDidMount() {
    this.getAllItems();
  }

  render() {
    return (
      <div className="App">
        <Login getUser={this.getUser} />
        <Signup createUser={this.createUser} />
        <Menu
          getAllItems={this.getAllItems}
          getItem={this.getItem}
          addItemToCart={this.addItemToCart}
          items={this.state.items}
        />
        <Categories />
        <Checkout getCart={this.getCart} createOrder={this.createOrder} />
      </div>
    );
  }
}

export default App;

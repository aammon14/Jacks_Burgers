import React, { Component } from "react";

import EditOrder from "./Components/EditOrder";
import Item from "./Components/Item";
import Login from "./Components/Login";
import Menu from "./Components/Menu";
import Order from "./Components/Order";
import Orders from "./Components/Orders";
import Signup from "./Components/Signup";
import UserEdit from "./Components/UserEdit";
import Cart from './Components/Cart'

import axios from "axios";
import "./App.css";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {},
      items: [],
      cart: [],
      orders: [],
      hasData: false
    };

    this.getAllItems = this.getAllItems.bind(this);
    // this.getItem = this.getItem.bind(this);
    this.getAllUser = this.getAllUser.bind(this);
    // this.createUser = this.createUser.bind(this);
    this.getAllOrders = this.getAllOrders.bind(this);
    // this.getOrder = this.getOrder.bind(this);
    // this.createOrder = this.createOrder.bind(this);
    // this.getCart = this.getCart.bind(this);
    // this.addItemToCart = this.addItemToCart.bind(this);

    
  }

  // Item Calls

  getAllItems() {
    axios({
      url: "http://localhost:8080/items",
      method: "Get"
    }).then(response => { 
     console.log(
        "In getAllItems received response from server. response.data:",
        response.data
      );
      this.setState({
       
        items: response.data,
        hasData: true
      });

    }); 

  }

  // User Calls
  getAllUser() {
    axios({
      url: "http://localhost:8080/users",
      method: "get"
    }).then(response => {
      this.setState({
        users: response.data,
        hasData: true
      });
      // console.log(users);
    });
  }
  // Order Calls

  getAllOrders() {
    axios({
      url: "http://localhost:8080/orders",
      method: "get"
    }).then(response => {
      this.setState({
        orders: response.data,
        hasData: true
      });
    });
    // console.log(orders);
  }

  // Checkout Cart Calls

  addItemToCart() {
    axios({
      url: "http://localhost:8080/items",
      method: "get"
    }).then(response => {});
  }

  getCart() {
    axios({
      url: "http://localhost:8080/cart",
      method: "get"
    }).then(response => {
      this.setState({
        cart: response.data,
        hasData: true
      });

    });
  }

  // Past Orders Calls

  // getAllPastOrders() {
  //   axios({
  //     url: "localhost:3000/orders/",
  //     method: "get"
  //   }).then(response => {});
  // }

  // getItemsByCategory() {
  //   axios({
  //     url: "",
  //     method: "get"
  //   }).then(response => {});
  // }

  componentDidMount() {
    this.getAllItems();
    this.getAllOrders();
    this.addItemToCart();
    this.getAllUser();
    this.getCart();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="main-container">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/items" />} />
            <Route
              exact
              path="/items"
              render={props => {
                return (
                  <Menu
                    {...props}
                    items={this.state.items}
                    getAllItems={this.getAllItems}
                  />
                );
              }}
            />
            <Route
              exact
              path="/items/:id"
              render={props => {
                return (
                  <Item
                    {...props}
                    items={this.state.items}
                    getAllItems={this.getAllItems}
                  />
                );
              }}
            />
            <Route
              exact
              path="/orders"
              render={props => {
                return (
                  <Orders
                    {...props}
                    orders={this.state.orders}
                    getAllOrders={this.getAllItems}
                  />
                );
              }}
            />
            <Route
              exact
              path="/orders/:id"
              render={props => {
                return (
                  <Order
                    {...props}
                    orders={this.state.orders}
                    getAllOrders={this.getAllItems}
                  />
                );
              }}
            />
            <Route
              exact
              path="/orders/:id/edit"
              render={props => {
                return (
                  <EditOrder
                    {...props}
                    orders={this.state.orders}
                    getAllOrders={this.getAllItems}
                  />
                );
              }}
            />
            <Route
              exact
              path="/users/:id"
              render={props => {
                return (
                  <UserEdit
                    {...props}
                    users={this.state.users}
                    getAllUser={this.getAllUser}
                  />
                );
              }}
            />
            <Route
              exact
              path="/Signup"
              render={props => {
                return (
                  <Signup
                    {...props}
                    users={this.state.users}
                    getAllUser={this.getAllUser}
                  />
                );
              }}
            />
            <Route
              exact
              path="/cart"
              render={props => {
                return (
                  <Cart
                    {...props}
                    cart={this.state.cart}
                    getCart={this.getCart}
                  />
                );
              }}
            />
            <Route
              exactpath="/Login"
              render={props => {
                return (
                  <Login
                    {...props}
                    users={this.state.users}
                    getAllUser={this.getAllUser}
                  />
                );
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

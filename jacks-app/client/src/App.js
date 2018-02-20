import React, { Component } from "react";
import EditItem from "./Components/EditItem";
import Item from "./Components/Item";
import Login from "./Components/Login";
import Menu from "./Components/Menu";
import Order from "./Components/Order";
import Orders from "./Components/Orders";
import Signup from "./Components/Signup";
import UserEdit from "./Components/UserEdit";
import Cart from "./Components/Cart";
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
      order: 0,
      hasData: false
    };

    this.getAllItems = this.getAllItems.bind(this);
    this.getAllUser = this.getAllUser.bind(this);
    this.getAllOrders = this.getAllOrders.bind(this);
    this.changeOrderState = this.changeOrderState.bind(this);
    this.changeCartState = this.changeCartState.bind(this);
    this.getCart = this.getCart.bind(this);
  }

  // Item Calls

  getAllItems() {
    axios({
      url: "http://localhost:8080/items",
      method: "Get"
    }).then(response => {
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
  }

  // Checkout Cart Calls

  getCart() {
    axios({
      url: `http://localhost:8080/cart/${this.state.order}`,
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
    this.getAllUser();
  }

  changeOrderState(order) {
    this.setState({ order: order });
  }

  changeCartState(cart){
     this.setState({ cart: cart });
  } 



  render() {
    return (
      <BrowserRouter>
        <div className="main-container background">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/items" />} />
            <Route
              exact
              path="/items"
              render={props => {
                return (
                  <div className="items_page">
                    <Menu
                      {...props}
                      items={this.state.items}
                      getAllItems={this.getAllItems}
                      changeOrderState={this.changeOrderState.bind(this)}
                      changeCartState={this.changeCartState.bind(this)}
                      orders={this.state.orders}
                      state={this.state}
                      getCart={this.getCart}
                      addItemToCart={this.addItemToCart}

                    />
                    <Cart
                      {...props}
                      state={this.state}
                      cart={this.state.cart}
                      getCart={this.getCart}
                      changeOrderState={this.changeOrderState.bind(this)}
                      changeCartState={this.changeCartState.bind(this)}
                    />
                
                  </div>
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
                    state={this.state}
                    changeOrderState={this.changeOrderState.bind(this)}
                    changeCartState={this.changeCartState.bind(this)}
                    getAllItems={this.getAllItems}
                    addItemToCart={this.addItemToCart}
                    getCart={this.getCart}
                     orders={this.state.orders}

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
                    getAllOrders={this.getAllOrders}
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
                  <EditItem
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

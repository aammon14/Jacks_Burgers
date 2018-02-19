import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import Cart from "./Cart.jsx";
import axios from "axios";

class Menu_Maintenance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "",
      name: "",
      description: "",
      price: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("bi");
    axios({
      url: "http://localhost:8080/items",
      method: "post",
      data: this.state
    }).then(response => {
      this.props.getAllItems();
      this.setState({
        name: "",
        description: "",
        price: ""
      });
    });
  }

  render() {
    return (
      <div className="main_container">
        <div>
          {this.props.items.map((el, i) => {
            return (
              <div className="item_div" key={i}>
                <Link className="item_div_content" to={`/items/${el.id}`}>
                  <h1 className="item_name">{el.name}</h1>
                  <p className="item_description">{el.description}</p>
                  <p className="item_price">{el.price}</p>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="maintenance_container">
          <form onSubmit={this.handleSubmit}>
            <label>
              Category
              <br />
              <input
                type="text"
                name="category"
                onChange={this.handleChange}
                value={this.state.category}
              />
            </label>
            <br />
            <label>
              Name
              <br />
              <input
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
              />
            </label>
            <br />
            <label>
              Description
              <br />
              <textarea
                name="description"
                onChange={this.handleChange}
                value={this.state.description}
              />
            </label>
            <br />
            <label>
              Price
              <br />
              <input
                name="price"
                type="text"
                onChange={this.handleChange}
                value={this.state.price}
              />
            </label>
            <input
              className="submit_button"
              type="submit"
              name="Submit"
              value="Add Item"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Menu_Maintenance;

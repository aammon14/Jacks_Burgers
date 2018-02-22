import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import axios from "axios";
import Menu from "./Menu";
import Scrollchor from 'react-scrollchor';

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      categories: []
    };

    this.getCategories = this.getCategories.bind(this);
    this.getAllItems = this.getAllItems.bind(this);
  }

  componentDidMount() {
    this.getAllItems();
  }

  getAllItems() {
    axios({
      url: "http://localhost:8080/items",
      method: "Get"
    }).then(response => {
      this.setState(
        {
          items: response.data,
          hasData: true
        },
        this.getCategories
      );
    });
  }

  getCategories() {
    const categories = this.state.items.map(item => {
      return item.category;
    });
    const category = Array.from(new Set(categories));
    this.props.changeCategoryState(category);
    this.setState({
      categories: category
    });
  }

  render() {
    return (
      <div className="category_container category_item">
        <h2 className="category_title"> Categories</h2>
        {this.state.categories.map((el, i) => {
          return (
            <Scrollchor to={`#${el}`}>
              <h1 key={i} className="cart_item_name">
                {el}
              </h1>
            </Scrollchor>
          );
        })}
      </div>
    );
  }
}

export default Category;

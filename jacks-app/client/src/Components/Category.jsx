import React, { Component } from "react";
import axios from "axios";
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
      <div className="category_container">
        <h2 className="category_Menu_title"> Categories</h2>
        {this.state.categories.map((el, i) => {
          return (
            <Scrollchor key={i} to={`#${el}`}>
            <div className="category_item">
              <h1 className="category_title">
                {el}
              </h1>
            </div>
            </Scrollchor>

          );
        })}
      </div>
    );
  }
}

export default Category;

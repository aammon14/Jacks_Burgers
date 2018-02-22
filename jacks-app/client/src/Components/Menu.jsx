import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import Item from "./Item";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      order: this.props.state.order,
      user: this.props.state.user
    };
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

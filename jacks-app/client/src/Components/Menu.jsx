import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
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
    );
  }
}

export default Menu;

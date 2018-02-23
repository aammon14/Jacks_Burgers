import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        <div className="hero_image">
          <div className="hero_text">
            <h1> Jack's Burgers</h1>
            <h2>Fresher.Tastier.Better.</h2>
          </div>
        </div>
        <div className="featured_image_left">
        </div>
        <div className="featured_image_right">
        </div>
        <div className="menu_container">
          <div>
            {this.props.state.categories.map((category, i) => {
              return (
                <div key={i}>
                  <h1 className="Menu_title" id={category}>
                    {category}
                  </h1>
                  {this.props.items.map((items, i) => {
                    if (items.category === category) {
                      return (
                        <div className="item_div" key={i}>
                          <Link
                            className="item_div_content"
                            to={`/items/${items.id}`}>
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

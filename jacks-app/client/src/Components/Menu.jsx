
import React, { Component } from "react";
import { Link } from "react-router-dom";
//import Cart from "./Cart.jsx";

class Menu extends Component {
  render() {
    return (
        <div className="menu_container">
      <div>
      
         <h2 className="Menu_title" id="Appetizers">Appetizers</h2>
          {this.props.items.map((el, i) => {
            if(el.category==="Appetizers"){
              return (
              <div className="item_div" key={i}>
                <Link className="item_div_content" to={`/items/${el.id}`}>
                  <h1 className="item_name">{el.name}</h1>
                  <p className="item_description">{el.description}</p>
                  <p className="item_price">${el.price}</p>
                </Link>
              </div>
            )};
          })}

         <h2 className="Menu_title" id="Entrees">Entrees</h2>
          {this.props.items.map((el, i) => {
            if(el.category==="Entree"){
              return (
              <div className="item_div" key={i}>
                <Link className="item_div_content" to={`/items/${el.id}`}>
                  <h1 className="item_name">{el.name}</h1>
                  <p className="item_description">{el.description}</p>
                  <p className="item_price">${el.price}</p>
                </Link>
              </div>
            )};
          })}
        </div>

      </div>
    );
  }
}

export default Menu;

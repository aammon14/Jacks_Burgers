import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

class Appetizers extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
            <div className="menu_container">
         {this.props.items.map((el, i) => {
           return (
             <div
               className="item_div"
               key={i}
               onClick={() => {
                 console.log("i was lcicked");
                 this.setState({ show: true, item: el });
               }}
             >
               <h1 className="item_name">{el.name}</h1>
               <p className="item_description">{el.description}</p>
               <p className="item_price">{el.price}</p>
             </div>
           );
         })}
       </div>)

export default Appetizers;
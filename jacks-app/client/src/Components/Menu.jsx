import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";



class Menu extends Component {
    render() {
      return (
        <div>
        {this.props.items.map((el,i)=> {
          return (
            <div key={i}>
             <Link to={`/items/${el.id}`}>
              <h1>{el.name}</h1>
               </Link>
              <p>{el.description}</p>
              <p>{el.price}</p>
           </div>
          );
        })
      } 
    </div>
  );
}
}


export default Menu;
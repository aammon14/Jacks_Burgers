import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

class Entrees extends Component {
  constructor(props){
    super(props)
  }
  render() {
  	return(
						<div>
              {this.props.items.map((el, i) => {
                if(el.category==="Entree"){
                  return(
                    <div key={i}  className="item_div">
                    <Link className="item_div_content" to={`/items/${el.id}`}>
                      <p>{el.name} {el.price}</p>
                      </Link>
                      <p>{el.description}</p>
                      <p>{el.category}</p>
                    </div>
                    )
                  }
                }     
         		 )}
            </div>
           )}
}

export default Entrees;

import React, { Component } from "react";
import {Link } from 'react-router-dom';

class Appetizers extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
            <div>
              {this.props.items.map((el, i) => {
                if(el.category==="Appetizers"){
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

export default Appetizers;
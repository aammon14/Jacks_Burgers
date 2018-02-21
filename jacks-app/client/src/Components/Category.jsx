import React, { Component } from "react";
// import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
//import Menu from "./Menu";
import Scrollchor from 'react-scrollchor';


class Category extends Component {
  // constructor(props){
  //   super(props)
  // }


  render() {

    return (

      <div className="category_container">
      <h2 className="category_title"> Categories</h2>

    
      <div className="category_div" >
      <div className="category_item">
       <Scrollchor to="#Appetizers">
      <h2>Appetizers</h2>
      </Scrollchor>
      </div>
     
      
     
     <div className="category_item">
      <Scrollchor to="#Entrees">
        <h2> Entrees</h2>
      </Scrollchor>
      </div>
      
      </div>
    

    </div>
     

      
  )}
}
export default Category;

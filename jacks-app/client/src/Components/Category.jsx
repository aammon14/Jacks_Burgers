import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import Menu from "./Menu";
import Scrollchor from "react-scrollchor";

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
     url: "/items",
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
       <p className="cart_menu_title"> Categories</p>
       {this.state.categories.map((el, i) => {
         return (
           <Scrollchor to={`#${el}`}>
             <div className="category_div">
               <p key={i} className="category_title category_item">
                 {el}
               </p>
             </div>
           </Scrollchor>
         );
       })}
     </div>
   );
 }
}

export default Category;
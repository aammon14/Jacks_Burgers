import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import Appetizers from "./Appetizers";
import Entrees from "./Entrees"

class Menu extends Component {
  constructor(props){
    super(props)
  
    this.state={
      // category:[],
      viewAppetizers: false,
      viewEntrees:false
    
    }
 
    this.showAppetizers=this.showAppetizers.bind(this)
    this.toggleEntrees=this.toggleEntrees.bind(this)
  }

showAppetizers(){
  this.setState({
    viewAppetizers:!this.state.viewAppetizers
  })
}

toggleEntrees(){
  console.log('clicked')
  this.setState({
    viewEntrees: !this.state.viewEntrees
  })
}


  render() {

    return (
      <div className="menu_container">
        <div className="item_div" onClick={this.showAppetizers}>
         Appetizers
        </div>
       
        {this.state.viewAppetizers ?   
        <Appetizers items={this.props.items}/> : null }
        
        <div className="item_div" onClick={this.toggleEntrees}>
         Entrees
        </div>
       
        {this.state.viewEntrees ?   
        <Entrees items={this.props.items}/> : null }


      </div> 

      
  )}
}

export default Menu;

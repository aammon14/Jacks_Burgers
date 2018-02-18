import React, { Component } from "react";
import axios from 'axios';



class EditOrder extends Component {
 constructor(props){
  super(props)
  this.EditOrder = this.EditOrder.bind(this);
 } 

 createOrder() {
    axios({
      url: "localhost:3000/orders/",
      method: "put"
    }).then(response => {});
  }

 render(){
  return(
    <div>
      <h1>Edit Your Order</h1>
      </div>
    );
 }
}

export default EditOrder;
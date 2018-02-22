
import React, { Component } from "react";

//import Cart from "./Cart.jsx";

import axios from "axios";
import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap";
// import { Modal } from "react-bootstrap";
// import Cart from "./Cart";
// import Item from "./Item";
// import Appetizers from "./Appetizers";
// import Entrees from "./Entrees";


class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {},
      order: this.props.state.order,
      user: 1,
      comment: "",
      show: false,
      viewAppetizers: false,
      viewEntrees:false,
      open: false

    };

    // this.getItem = this.getItem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createOrder = this.createOrder.bind(this);
    this.addItem = this.addItem.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.showAppetizers=this.showAppetizers.bind(this);
    this.toggleEntrees=this.toggleEntrees.bind(this);
    // this.onOpenModal=this.onOpenModal(this);
    // this.onCloseModal=this.onCloseModal(this);
  }
  //     onOpenModal = () => {
  //   this.setState({ open: true });
  // };
  onOpenModal() {
   this.setState({ open: true }); 
  }

  onCloseModal = () => {
    this.setState({ open: false });
  };

  handleHide() {
    this.setState({ show: false, item: {} });
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
  addItem() {
    axios({
      url: `http://localhost:8080/cart/${this.state.item.id}`,
      method: "post",
      data: this.state
    }).then(response => {
      this.setState(
        {
          itemAdded: response.data
        },
        () => {
          this.props.getCart();
          this.handleHide();
        }
      );

      console.log(response.data);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.addItem();
  }

  handleChange(event) {
    this.setState({ comment: event.target.value });
    console.log(this.state.comment);
  }

  createOrder(user_id) {
    console.log("ran create order");
    axios({
      url: `http://localhost:8080/orders/${user_id}`,
      method: "post"
    }).then(response => {
      this.props.changeOrderState(response.data.id);
      this.setState({
        order: this.props.state.order
      });
    });
  }

  componentDidMount() {
    console.log("MOUNTED");
    // this.getItem();
    if (this.props.state.order === 0) {
      this.createOrder(this.state.user);
    }
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
   <div className="menu_container" onClick={this.onOpenModal}>

         <h2 className="Menu_title" id="Appetizers">Appetizers</h2>
          {this.props.items.map((el, i) => {
            if(el.category==="Appetizers"){
              return (
              <div className="item_div" key={i}>
                <Link className="item_div_content" to={`/items/${el.id}`}> 
                  <h1 className="item_name">{el.name}</h1></Link>
                  <p className="item_description">{el.description}</p>
                  <p className="item_price">${el.price}</p>
               

              </div>
            )};
          })}

         <h2 className="Menu_title" id="Entrees">Entrees</h2>
          {this.props.items.map((el, i) => {
            if(el.category==="Entree"){
              return (
              <div className="item_div" key={i}>
                <Link className="item_div_content" to={`/items/${el.id}`}>
                  <h1 className="item_name">{el.name}</h1></Link>
                  <p className="item_description">{el.description}</p>
                  <p className="item_price">${el.price}</p>
                
              </div>
            )};
          })}
       </div>
       </div>
    
    );
  }
}

export default Menu;

import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import axios from 'axios'

class Cart extends Component {
  constructor(props){
    super(props)
    // this.submitOrder=this.submitOrder.bind(this)

};

  submitOrder(e) {
  e.preventDefault();
    axios({
      url: "http://localhost:8080/cart",
      method: "POST"
  
    }).then(response => {
      this.setState({
        cart: response.data,
        hasData: true
      });
      // console.log('from submitOrder', cart)
    });

  }
  componentDidMount(){
    this.props.getCart(this.props.state.order);
  }

  render() {
  if (!(this.props.cart ===[])) {
    
    return (
      <div>
        <form onSubmit={this.submitOrder.bind(this, this.state)}>
          {this.props.cart.map((el,i)=> {
            return (
              <div key={i}>
                <Link to={`/items/${el.id}`}>
                  <h1>{el.name}</h1>
                </Link>
                <p>{el.description}</p>
                <p>{el.price}</p>
                <p>{el.comment}</p>
              </div>)
        })
      }
          <input type="submit" value="submit" />
        </form>
      </div>   
          );
        }
    }
   }

export default Cart;
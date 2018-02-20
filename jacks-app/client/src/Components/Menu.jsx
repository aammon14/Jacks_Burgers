import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import Cart from "./Cart";
import Item from "./Item";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {},
      order: this.props.state.order,
      user: 1,
      comment: "",
      show: false
    };

    // this.getItem = this.getItem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createOrder = this.createOrder.bind(this);
    this.addItem = this.addItem.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }
  handleHide() {
    this.setState({ show: false });
  }

  // getItem() {
  //   axios({
  //     url: `http://localhost:8080/items/${this.props.items.id}`,
  //     method: "get"
  //   }).then(response => {
  //     this.setState({
  //       item: response.data
  //     });
  //     console.log(response.data);
  //   });
  // }

  addItem() {
    axios({
      url: `http://localhost:8080/cart/${this.state.item.id}`,
      method: "post",
      data: this.state
    }).then(response => {
      this.setState({
        itemAdded: response.data
      }, this.props.getCart);

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
    console.log("MOUNTED")
    // this.getItem();
    if (this.props.state.order === 0) {
      this.createOrder(this.state.user);
    }
  }

  render() {
    return (
      <div >
        <div className="menu_container">
          {this.props.items.map((el, i) => {
            return (
              <div className="item_div" key={i} onClick={() => this.setState({ show: true, item: el })}>
                  <h1 className="item_name">{el.name}</h1>
                  <p className="item_description">{el.description}</p>
                  <p className="item_price">{el.price}</p>
                <div>
                  <div className="modal-container">
                    <div>
                      <Modal
                        show={this.state.show}
                        onHide={this.handleHide}
                        container={this}
                        aria-labelledby="contained-modal-title"
                      >
                        <Modal.Body className="item_container ">
                          <div>
                            <form onSubmit={this.handleSubmit}>
                              <h1 className="item_specific_name">
                                {this.state.item.name}
                              </h1>
                              <p className="item_specific_description">
                                {this.state.item.description}
                              </p>
                              <textarea
                                className="comment"
                                type="text"
                                placeholder="No Salt, Please!"
                                value={this.state.comment}
                                onChange={this.handleChange}
                              />
                              <p className="item_specific_price">
                                {this.state.item.price}
                              </p>
                              <input
                                className="add_to_cart_button"
                                type="submit"
                                name="Submit"
                                value="ADD TO CART"
                              />
                            </form>
                          </div>
                        </Modal.Body>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Menu;

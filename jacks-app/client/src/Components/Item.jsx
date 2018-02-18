import React, { Component } from "react";
import axios from 'axios';


class Item extends Component {
  constructor(props) {
    super(props);

    this.getItem = this.getItem.bind(this);
  }

  getItem() {
    axios({
      url: "localhost:3000/items/:id",
      method: "get"
    }).then(response => {});
  }

  render() {
    return (
      <div>
        <h1>Individual item</h1>
      </div>
    );
  }
}

export default Item;

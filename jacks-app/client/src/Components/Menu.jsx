import React, { Component } from "react";
import Item from "./Item";

class Menu extends Component {
    render() {
        const items = this.props.items;

        return items.map(data => {
            return (
                <div>
                    <h1>{data.name}</h1>
                    <p>{data.description}</p>
                    <p>{data.price}</p>
                </div>
            );
        });
    }
}

export default Menu;

const db = require("../db/setup.js");
const cartModel = {};

cartModel.getCart = (req, res, next) => {
    db
        .manyOrNone(
            "SELECT items.name, items.price, items.description, orders_items.comment FROM users JOIN orders ON users.id = orders.user_id JOIN orders_items ON orders.id = orders_items.order_id JOIN items ON orders_items.item_id = items.id WHERE orders.completed = 'false';"
        )
        .then(data => {
            res.locals.cartData = data;
            next();
        })
        .catch(error => {
            console.log("error encountered in cartModel.getCart:", error);
            next(error);
        });
};

cartModel.addItem = (req, res, next) => {
    console.log(req.body.foot);
    db
        .one(
            "INSERT INTO orders_items (order_id, item_id) VALUES ($1, $2) RETURNING *",
            [2, req.params.id]
        )
        .then(data => {
            res.locals.itemAdded = data;
            next();
        })
        .catch(error => {
            console.log("error encountered in cartModel.addItem:", error);
            next(error);
        });
};

cartModel.updateItem = (req, res, next) => {
    db
        .manyOrNone("UPDATE orders_items SET comment = $1 WHERE id = $2", [
            req.body.comment,
            req.params.id
        ])
        .then(data => {
            res.locals.updatedCartData = data;
            next();
        })
        .catch(error => {
            console.log("error encountered in cartModel.getCart:", error);
            next(error);
        });
};

cartModel.deleteItem = (req, res, next) => {
    db
        .one("DELETE FROM orders_items WHERE id = $1", [req.params.id])
        .then(() => {
            next();
        })
        .catch(error => {
            console.log("error encountered in cartModel.deleteItem:", error);
            next(error);
        });
};

module.exports = cartModel;
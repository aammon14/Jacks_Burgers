const db = require("../db/setup.js");
const ordersModel = {};

ordersModel.allOrders = (req, res, next) => {
    db
        .manyOrNone("SELECT * FROM orders")
        .then(data => {
            res.locals.allOrdersData = data;
            next();
        })
        .catch(error => {
            console.log("error encountered in OrdersModel.allOrders:", error);
            next(error);
        });
};

ordersModel.getAllPastOrders = (req, res, next) => {
   db
       .manyOrNone(
           "SELECT items.name, items.price, items.description, orders_items.comment FROM users JOIN orders ON users.id = orders.user_id JOIN orders_items ON orders.id = orders_items.order_id JOIN items ON orders_items.item_id = items.id WHERE orders.completed = 'true';"
       )
       .then(data => {
           res.locals.allPastOrders = data;
           next();
       })
       .catch(error => {
           console.log("error encountered in ordersModel.getAllPastOrders:", error);
           next(error);
       });
};

ordersModel.findById = (req, res, next) => {
    db
        .one("SELECT * FROM orders WHERE id = $1", [req.params.id])
        .then(data => {
            res.locals.orderData = data;
            next();
        })
        .catch(error => {
            console.log("error encountered in ordersModel.findById:", error);
            next(error);
        });
};

ordersModel.create = (req, res, next) => {
    db
        .one("INSERT INTO orders (user_id) VALUES ($1) RETURNING *;", [
            req.params.user_id
        ])
        .then(data => {
            res.locals.newOrderId = data;
            console.log(res.locals.newOrderId);
            next();
        })
        .catch(error => {
            console.log("error encountered in ordersModel.create:", error);
            next(error);
        });
};

ordersModel.update = (req, res, next) => {
  console.log(req.body)
    db
        .manyOrNone("UPDATE orders SET completed = $1 WHERE id = $2 AND user_id = $3", [
            'true',
            req.body.order,
            req.body.user
        ])
        .then(data => {
            res.locals.updatedOrderData = data;
            next();
        })
        .catch(error => {
            console.log("error encountered in ordersModel.update:", error);
            next(error);
        });
};

module.exports = ordersModel;

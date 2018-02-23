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
          "SELECT orders.id, orders.status, users.username, orders.user_id FROM orders JOIN users ON orders.user_id = users.id WHERE status = 'completed' ORDER BY orders.id DESC LIMIT 5"
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

ordersModel.getAllPrevOrdersItems = (req, res, next) => {
    db
      .manyOrNone(
        "SELECT items.name, items.price, items.description, orders_items.comment, orders_items.order_id FROM users JOIN orders ON users.id = orders.user_id JOIN orders_items ON orders.id = orders_items.order_id JOIN items ON orders_items.item_id = items.id WHERE orders.status = 'completed';"
      )
       .then(data => {
           res.locals.allPrevOrdersItems = data;
           next();
       })
       .catch(error => {
           console.log("error encountered in ordersModel.getAllPrevOrdersItems:", error);
           next(error);
       });
};

ordersModel.getAllCurrentOrders = (req, res, next) => {
    db
      .manyOrNone(
        "SELECT orders.id, orders.status, users.username, orders.user_id FROM orders JOIN users ON orders.user_id = users.id WHERE status = 'inprogress' ORDER BY orders.id ASC;"
      )
       .then(data => {
           res.locals.allCurrentOrders = data;
           next();
       })
       .catch(error => {
           console.log("error encountered in ordersModel.getAllPastOrders:", error);
           next(error);
       });
};

ordersModel.getAllCurrentOrdersItems = (req, res, next) => {
  console.log('in ordersModel.getAllCurrentOrdersItems, req.params: ', req.params);
    db
      .manyOrNone(
        "SELECT items.name, items.price, items.description, orders_items.comment, orders_items.order_id FROM users JOIN orders ON users.id = orders.user_id JOIN orders_items ON orders.id = orders_items.order_id JOIN items ON orders_items.item_id = items.id WHERE orders.status = 'inprogress';"
      )
       .then(data => {
           res.locals.allCurrentOrdersItems = data;
           next();
       })
       .catch(error => {
           console.log("error encountered in ordersModel.getAllPastOrders:", error);
           next(error);
       });
};

// ordersModel.findById = (req, res, next) => {
//   db
//     .one("SELECT * FROM orders WHERE id = $1", [req.params.id])
//     .then(data => {
//       res.locals.orderData = data;
//       next();
//     })
//     .catch(error => {
//       console.log("error encountered in ordersModel.findById:", error);
//       next(error);
//     });
// };

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
  db
    .manyOrNone(
      "UPDATE orders SET status = $1 WHERE id = $2 AND user_id = $3",
      [req.body.status, req.body.order, req.body.user]
    )
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

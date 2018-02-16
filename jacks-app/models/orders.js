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

ordersModel.findById = (req, res, next) => {
    db
        .one("SELECT * FROM orders WHERE orders.id = ${id}", { id: id })
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
        .one("INSERT INTO orders (user_id) VALUES ($1) RETURNING id;", [
            req.body.user_id
        ])
        .then(data => {
            res.locals.newOrderId = data.id;
            next();
        })
        .catch(error => {
            console.log("error encountered in ordersModel.create:", error);
            next(error);
        });
};

ordersModel.destroy = (req, res, next) => {
    db
        .one("DELETE FROM orders WHERE id = $1", [req.params.id])
        .then(() => {
            next();
        })
        .catch(error => {
            console.log("error encountered in ordersModel.destroy:", error);
            next(error);
        });
};

module.exports = ordersModel;

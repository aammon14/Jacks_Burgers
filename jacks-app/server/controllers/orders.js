const express = require("express");
const router = express();
const ordersModel = require("../models/orders.js");

router.get("/", ordersModel.allOrders, (req, res, next) => {
    res.json(res.locals.allOrdersData);
});

router.get("/:id", ordersModel.findById, (req, res, next) => {
    res.json(res.locals.orderData);
});

router.post("/:user_id", ordersModel.create, (req, res, next) => {
    res.json(res.locals.newOrderId);
});

module.exports = router;

const express = require("express");
const router = express();
const ordersModel = require("../models/orders.js");

router.get("/", ordersModel.allOrders, (req, res, next) => {
    res.json(res.locals.allOrdersData);
});

router.get("/:id", ordersModel.findById, (req, res, next) => {
    res.json(res.locals.orderData);
});

router.get("/previous", ordersModel.getAllPastOrders, (req, res, next) => {
    res.json(res.locals.allPastOrders);
});

router.post("/:user_id", ordersModel.create, (req, res, next) => {
    res.json(res.locals.newOrderId);
});

router.put("/", ordersModel.update, (req, res, next) => {
    res.json(res.locals.updatedOrderData);
});

module.exports = router;

const express = require("express");
const router = express();
const ordersModel = require("../models/orders.js");

router.get("/", ordersModel.allOrders, (req, res, next) => {
    res.json(res.locals.allOrdersData);
});

router.get("/previous", ordersModel.getAllPastOrders, (req, res, next) => {
    res.json(res.locals.allPastOrders);
});

router.get(
    "/previousitem",
    ordersModel.getAllPrevOrdersItems,
    (req, res, next) => {
        res.json(res.locals.allPrevOrdersItems);
    }
);

router.get("/current", ordersModel.getAllCurrentOrders, (req, res, next) => {
    res.json(res.locals.allCurrentOrders);
});

router.get(
    "/currentitem",
    ordersModel.getAllCurrentOrdersItems,
    (req, res, next) => {
        res.json(res.locals.allCurrentOrdersItems);
    }
);

// router.get("/:id", ordersModel.findById, (req, res, next) => {
//     res.json(res.locals.orderData);
// });

router.post("/:user_id", ordersModel.create, (req, res, next) => {
    res.json(res.locals.newOrderId);
});

router.put("/", ordersModel.update, (req, res, next) => {
    res.json(res.locals.updatedOrderData);
});

module.exports = router;

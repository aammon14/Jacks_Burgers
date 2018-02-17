const express = require("express");
const router = express();
const cartModel = require("../models/cart.js");

router.get("/", cartModel.getCart, (req, res, next) => {
    res.json(res.locals.cartData);
});

router.delete("/:id", cartModel.deleteItem, (req, res, next) => {
    res.json(res.locals.newOrderData);
});

module.exports = router;

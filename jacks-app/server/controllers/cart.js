const express = require("express");
const router = express();
const cartModel = require("../models/cart.js");

router.get("/", cartModel.getCart, (req, res, next) => {
    res.json(res.locals.cartData);
});

router.delete("/:id", cartModel.deleteItem, (req, res, next) => {
    res.json(res.locals.newOrderData);
});

router.put("/:id", cartModel.updateItem, (req, res, next) => {
    res.json(res.locals.updatedCartData);
});

router.post("/", cartModel.getCart, (req, res, next) => {
    res.json(res.locals.cartData);
});
module.exports = router;

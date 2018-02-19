const express = require("express");
const router = express();
const cartModel = require("../models/cart.js");

router.get("/:id", cartModel.getCart, (req, res, next) => {
    res.json(res.locals.cartData);
});

router.post("/:id", cartModel.addItem, (req, res, next) => {
    res.json(res.locals.itemAdded);
});

router.put("/:id", cartModel.updateItem, (req, res, next) => {
    res.json(res.locals.updatedCartData);
});


router.delete("/:id", cartModel.deleteItem, (req, res, next) => {
    res.json(res.locals.itemDeleted);
});


module.exports = router;

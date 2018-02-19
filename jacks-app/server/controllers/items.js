const express = require("express");
const router = express();
const itemsModel = require("../models/items.js");

router.get("/", itemsModel.allItems, (req, res, next) => {
    res.json(res.locals.allItemsData);
});

router.get("/:id", itemsModel.findById, (req, res, next) => {
    res.json(res.locals.itemData);
});

router.post("/", itemsModel.create, (req, res, next) => {
    res.json(res.locals.newItemId);
});

module.exports = router;

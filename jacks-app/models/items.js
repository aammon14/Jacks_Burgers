const db = require("../db/setup.js");
const itemsModel = {};

itemsModel.allItems = (req, res, next) => {
    db
        .manyOrNone("SELECT * FROM items")
        .then(data => {
            res.locals.allItemsData = data;
            next();
        })
        .catch(error => {
            console.log("error encountered in itemsModel.allItems:", error);
            next(error);
        });
};

itemsModel.findById = (req, res, next) => {
    db
        .one("SELECT * FROM items WHERE items.id = ${id}", { id: id })
        .then(data => {
            res.locals.itemData = data;
            next();
        })
        .catch(error => {
            console.log("error encountered in itemsModel.findById:", error);
            next(error);
        });
};

itemsModel.create = (req, res, next) => {
    db
        .one(
            "INSERT INTO items (category, name, price, description, image) VALUES ($1, $2, $3, $4, $5) RETURNING id;",
            [
                req.body.category,
                req.body.name,
                req.body.price,
                req.body.description,
                req.body.image
            ]
        )
        .then(data => {
            res.locals.newItemId = data.id;
            next();
        })
        .catch(error => {
            console.log("error encountered in itemsModel.create:", error);
            next(error);
        });
};

itemsModel.destroy = (req, res, next) => {
    db
        .one("DELETE FROM items WHERE id = $1", [req.params.id])
        .then(() => {
            next();
        })
        .catch(error => {
            console.log("error encountered in itemsModel.destroy:", error);
            next(error);
        });
};

module.exports = itemsModel;

const db = require("../db/setup.js");
const usersModel = {};

usersModel.allUsers = (req, res, next) => {
    db
        .manyOrNone("SELECT * FROM users")
        .then(data => {
            res.locals.allUsersData = data;
            next();
        })
        .catch(error => {
            console.log("error encountered in usersModel.allUsers:", error);
            next(error);
        });
};

usersModel.findById = (req, res, next) => {
    db
        .one("SELECT * FROM users WHERE id = $1", [req.params.id])
        .then(data => {
            res.locals.userData = data;
            next();
        })
        .catch(error => {
            console.log("error encountered in usersModel.findById:", error);
            next(error);
        });
};

usersModel.findByUsername = (req, res, next) => {
    db
        .one("SELECT * FROM users WHERE username = $1", [req.params.username])
        .then(data => {
            res.locals.userData = data;
            next();
        })
        .catch(error => {
            console.log("error encountered in usersModel.findById:", error);
            next(error);
        });
};

usersModel.create = (req, res, next) => {
    db
        .one(
            "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id;",
            [req.body.username, req.body.password]
        )
        .then(data => {
            res.locals.newUserId = data.id;
            next();
        })
        .catch(error => {
            console.log("error encountered in usersModel.create:", error);
            next(error);
        });
};

usersModel.update = (req, res, next) => {
    db
        .one(
            "UPDATE users SET username = $1, password = $2 WHERE id = $3 RETURNING *;",
            [req.body.username, req.body.password, req.params.id]
        )
        .then(data => {
            res.locals.updatedUserData = data;
            next();
        })
        .catch(error => {
            console.log("error encountered in usersModel.update:", error);
            next(error);
        });
};

usersModel.destroy = (req, res, next) => {
    db
        .one("DELETE FROM users WHERE id = $1", [req.params.id])
        .then(() => {
            next();
        })
        .catch(error => {
            console.log("error encountered in usersModel.destroy:", error);
            next(error);
        });
};

module.exports = usersModel;

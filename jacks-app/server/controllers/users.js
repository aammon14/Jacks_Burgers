const express = require("express");
const router = express();
const usersModel = require("../models/users.js");

router.get("/", usersModel.allUsers, (req, res, next) => {
    res.json(res.locals.allUsersData);
});

router.get("/:id", usersModel.findById, (req, res, next) => {
    console.log("id");
    res.json(res.locals.userData);
});

router.get("/username", usersModel.findByUsername, (req, res, next) => {
    console.log("userame");
    res.json(res.locals.userData);
});

router.post("/:id", usersModel.create, (req, res, next) => {
    res.json(res.locals.newUserData);
});

module.exports = router;

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

router.get("/login/:username", usersModel.findByUsername, (req, res, next) => {
    console.log("username");
    res.json(res.locals.userData);
});

router.post("/", usersModel.create, (req, res, next) => {
    res.json(res.locals.newUserId);
});

router.put("/edit/:id", usersModel.update, (req, res, next) => {
    res.json(res.locals.updatedUserData);
});

router.delete("/:id", usersModel.destroy, (req, res, next) => {
    res.json(res.locals.rowsDeleted);
});

module.exports = router;

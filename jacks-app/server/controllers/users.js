const express = require("express");
const router = express();
const usersModel = require("../models/users.js");

router.get("/", usersModel.allUsers, (req, res, next) => {
    res.json(res.locals.allUsersData);
});

router.get("/:id", usersModel.findById, (req, res, next) => {
    res.json(res.locals.userData);
});

// router.put("/:id", usersModel.update, (req, res, next) => {
//     res.json(res.locals.updatedUser);
// });

router.post("/:id", usersModel.create, (req, res, next) => {
    res.json(res.locals.newUserData);
});

module.exports = router;

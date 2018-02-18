//Hey
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT || 8080;

const mustacheExpress = require("mustache-express");

app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log("Server started on " + PORT);
});

const usersRouter = require("./controllers/users.js");
app.use("/users", usersRouter);

const ordersRouter = require("./controllers/orders.js");
app.use("/orders", ordersRouter);

const itemsRouter = require("./controllers/items.js");
app.use("/items", itemsRouter);

const cartRouter = require("./controllers/cart.js");
app.use("/cart", cartRouter);

app.use((err, req, res, next) => {
    console.log("Error encountered:", err);
    res.status(500);
    res.send(err);
});

DROP TABLE IF EXISTS orders_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE orders (
    id BIGSERIAL PRIMARY KEY,
    user_id SERIAL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    completed BOOLEAN NOT NULL
);

CREATE TABLE items (
    id BIGSERIAL PRIMARY KEY,
    category VARCHAR(255),
    name VARCHAR(255),
    price VARCHAR(255),
    description VARCHAR(255),
    image VARCHAR(255)
);

CREATE TABLE orders_items (
    id BIGSERIAL PRIMARY KEY,
    order_id SERIAL,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    item_id SERIAL,
    FOREIGN KEY (item_id) REFERENCES items(id),
    comment VARCHAR(255)
);



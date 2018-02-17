INSERT INTO users (username, password) VALUES
('keith', 'password1'),
('andrew', 'password1'),
('jen', 'password1'),
('cashs', 'password1');
INSERT INTO items (category, name, price, description) VALUES
('Appetizers', 'Mini Hotdog', 6.95, 'Worlds best hotdog'),
('Appetizers', 'Mini Hamburger', 6.95, 'Worlds best hamburger'),
('Appetizers', 'Mini Waffles', 6.95, 'Worlds best waffles'),
('Appetizers', 'Mini Chicken fingers', 6.95, 'Worlds best chicken fingers'),
('Appetizers', 'Mini Chicken Noodle Soup', 6.95, 'Worlds best chicken noodle soup'),
('Entree', 'Hotdog', 9.95, 'Worlds best hotdog'),
('Entree', 'Hamburger', 9.95, 'Worlds best hamburger'),
('Entree', 'Waffles', 9.95, 'Worlds best waffles'),
('Entree', 'Chicken fingers', 9.95, 'Worlds best chicken fingers'),
('Entree', 'Chicken Noodle Soup', 9.95, 'Worlds best chicken noodle soup');
INSERT INTO orders (user_id, completed) VALUES
(2, TRUE),
(2, FALSE);
INSERT INTO orders_items (order_id, item_id, comment) VALUES
(1, 1, 'no ketchup plz'),
(1, 2, 'no comment'),
(1, 3, 'extra sauce'),
(2, 4, 'no mustard plz'),
(2, 5, ''),
(2, 6, 'extra sauce');
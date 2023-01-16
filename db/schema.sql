-- **************************
-- DB SCHEMA TO BE DISCUSSED
-- **************************

CREATE DATABASE
i_chews_you;
\c i_chews_you

CREATE TABLE reviews(
    id SERIAL PRIMARY KEY
    ,name TEXT
    ,recipe_id INT
    ,rating INT
    ,review TEXT
);

CREATE TABLE recipes(
    id SERIAL PRIMARY KEY
    ,name TEXT
    ,description TEXT
    ,recipe_id INT
);

INSERT INTO reviews(name, recipe_id, rating, review)
VALUES
    ('Jesse', 1111, 4, 'Great')
    ,('George', 2222, 2, 'Bad');

CREATE TABLE users(
    id SERIAL PRIMARY KEY
    ,name TEXT
    ,email TEXT
    ,password_digest TEXT
);
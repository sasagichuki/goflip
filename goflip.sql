CREATE DATABASE goflip;
USE goflip;

CREATE TABLE IF NOT EXISTS users (
  user_id int NOT NULL AUTO_INCREMENT,
  user_name varchar(50) NOT NULL,
  email varchar(50) NOT NULL,
  phone_number varchar(30) NOT NULL,
  total_clicks int NOT NULL,
  total_time int NOT NULL,
  PRIMARY KEY ( user_id )
);


-- CREATE TABLE IF NOT EXISTS users (
--   user_id serial PRIMARY KEY,
--   user_name varchar(50) NOT NULL,
--   email varchar(50) NOT NULL,
--   phone_number varchar(30) NOT NULL,
--   total_clicks int NOT NULL,
--   total_time int NOT NULL
-- );
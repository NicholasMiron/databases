-- CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  message_id int(255) NOT NULL AUTO_INCREMENT,
  message_text text(511) NOT NULL,
  message_user int(255),
  message_room int(255),
  PRIMARY KEY (message_id)
  -- FOREIGN KEY (message_user) REFERENCES users(user_id),
  -- FOREIGN KEY (message_room) REFERENCES rooms(room_id)
);



/* Create other tables and define schemas for them here! */

CREATE TABLE rooms (
  room_id int,
  name string(63) NOT NULL,
  PRIMARY KEY (room_id)
);

CREATE TABLE users (
  user_id int,
  name string(63) NOT NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE message_rooms (
  message_id int,
  room_id int,
  FOREIGN KEY (message_id) REFERENCES messages(message_id),
  FOREIGN KEY (room_id) REFERENCES rooms(room_id)
);

CREATE TABLE message_users (
  message_id int,
  user_id int,
  FOREIGN KEY (message_id) REFERENCES messages(message_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


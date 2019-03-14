var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var queryStr = 'select messages.message_id, messages.message_text, messages.message_room, users.name, users.user_id from messages left outer join users on (messages.message_user = users.user_id) order by messages.message_id desc';
      db.query(queryStr, (err, results) => {
        callback(err, results);
      });
    }, // a function which produces all the messages
    post: function (params, callback) {
      // a function which can be used to insert a message into the database
      let queryStr = `insert into messages(message_text, message_user, message_room) value (${params[0]}, (select user_id from users where username = ${params[1]} limit 1), ${params[2]})`;
      db.query(queryStr, params, (err, results) => {
        callback(err,results);
      });
    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      let queryStr = 'select * from users';
      db.query(queryStr, (err, res) => {
        callback(err, res);
      });
    }, // a function which produces all users
    post: function (params, callback) {
      let queryStr = `insert into users(name) values (${params[0]})`;
      db.query(queryStr, (err, res) => {
        callback(err, res);
      });
    } // a function which can be use to insert a user
  }
};

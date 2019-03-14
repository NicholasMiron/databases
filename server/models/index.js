var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      db.connect((err) => {
        if (err) {
          throw err;
        } else {
          db.query('SELECT * FROM messages', (err, result, fields) => {
            if (err) {
              throw err;
            } else {
              console.log(result);
            }
          })
        }
      })
    }, // a function which produces all the messages
    post: function (data) {
      db.connect(err => {
        if (err) throw err;
        else {
          let sql = `INSERT INTO messages (message_text, message_user, message_room) VALUES (${data.message}, ${data.user}, ${data.room})`
          db.query(sql, (err, result) => {
            if (err) throw err;
            else {
              console.log('A record has penetrated the database');
            }
          })
        }
      })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {}, // a function which produces all users
    post: function () {} // a function which can be use to insert a user
  }
};


var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, results) => {
        if (err) throw err;
        res.json(results);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      let params = [req.body.message, req.body.username, req.body.roomname];
      models.messages.post(params, (err,results) => {
        if (err) throw err;
        res.sendStatus(201);
      })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, results) => {
        if (err) throw err;
        res.json(results);
      })
    },
    post: function (req, res) {
      let params = [req.body.username];
      models.users.post(params, (err, results) => {
        if (err) throw err;
        res.sendStatus(201);
      })
    }
  }
};


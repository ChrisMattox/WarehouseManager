var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/omicron';

//warehouse view
router.get('/', function(req, res) {
  console.log('get request');
  // get books from DB
  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      console.log('connection error: ', err);
      res.sendStatus(500);
    }

    client.query('SELECT warehouse, fulfillment_days FROM warehouse;', function(err, result) {
      done(); // close the connection.
      // console.log('the client!:', client);
      if(err) {
        console.log('select query error: ', err);
        res.sendStatus(500);
      }
      console.log(result.rows);
      res.send(result.rows);

    });

  });
});


module.exports = router;

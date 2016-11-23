var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/omicron';

//warehouse view
router.get('/warehouse', function(req, res) {
  console.log('get request');
  // get warehouse and fulfillment days from DB
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

//customers  view
router.get('/cusotmers', function(req, res) {
  console.log('get request');
  // get name days from DB
  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      console.log('connection error: ', err);
      res.sendStatus(500);
    }

    client.query('SELECT first_name, last_name FROM customers;', function(err, result) {
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

router.get('/orders', function(req, res) {
  console.log('get request');
  // get oders from DB
  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      console.log('connection error: ', err);
      res.sendStatus(500);
    }

    client.query('	SELECT order_date, description, street, city, state, zip, '+
    'address_type, first_name, last_name	FROM orders '+
	'JOIN addresses ON orders.address_id=addresses.id'+
	'JOIN line_items ON line_items.order_id=orders.id'+
	'JOIN products ON products.id=line_items.product_id'+
	'JOIN customers ON addresses.customer_id = customers.id;', function(err, result) {
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

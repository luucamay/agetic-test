// server.js

// DEPENDENCIES
// ===============================================

var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'); // Middleware to read POST data

// SETUP
// ===============================================

// Set the port number.
var   port = Number(process.env.PORT || 8080);

// Set up body-parser.
// To parse JSON:
app.use(bodyParser.json());
// To parse form data:
app.use(bodyParser.urlencoded({
  extended: true
}));

// Tell the app that the view engine is also Handlebars.
app.set('view engine', 'handlebars');

// DATABASE
// ===============================================

// Setup the database.
var Datastore = require('nedb');
var db = new Datastore({
  filename: 'transactions.db', // provide a path to the database file
  autoload: true, // automatically load the database
  timestampData: true // automatically add and manage the fields createdAt and updatedAt
});

// ROUTES
// ===============================================

// GET all transactions.
// (Accessed at GET http://localhost:8080/transactions)
app.get('/transactions', function(req, res) {
  db.find({}).sort({
    updatedAt: -1
  }).exec(function(err, transactions) {
	  if (err) res.send(err);
	  res.json(transactions);
  });
});

// POST a new transaction.
// (Accessed at POST http://localhost:8080/transactions)
app.post('/transactions', function(req, res) {
	  var transaction = {
		      categoria: req.body.categoria,
		      descripcion: req.body.descripcion,
			  monto: req.body.monto,
			  tipo: req.body.tipo
		    };
	  db.insert(transaction, function(err, transaction) {
		      if (err) res.send(err);
		      res.json(transaction);
		    });
});
// GET a transaction.
// (Accessed at GET http://localhosto:8080/transactions/transaction_id)
app.get('/transactions/:id', function(req, res) {
	  var transaction_id = req.params.id;
	  db.findOne({
		      _id: transaction_id
		    }, {}, function(err, transaction) {
			        if (err) res.send(err);
			        res.json(transaction);
			      });
});

// UPDATE a transaction.
// (Accessed at PUT http://localhost:8080/transactions/transaction_id)
app.put('/transactions/:id', function(req, res) {
	var transaction_id = req.params.id;
	db.update({
			_id: transaction_id
		  }, { 
			  categoria: req.body.categoria,
			  descripcion: req.body.descripcion,
			  monto: req.body.monto,
			  tipo: req.body.tipo
			},
			{},
		   function(err, transaction) {
				  if (err) res.send(err);
				  res.sendStatus(200);
				});
});

// DELETE a transaction.
// (Accessed at DELETE http://localhost:8080/transactions/transaction_id)
app.delete('/transactions/:id', function(req, res) {
	  var transaction_id = req.params.id;
	  db.remove({
		      _id: transaction_id
		    }, {}, function(err, transaction) {
			        if (err) res.send(err);
			        res.sendStatus(200);
			      });
});

// START THE SERVER
// ===============================================

app.listen(port, function() {
  console.log('Listening on port ' + port);
});
const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect(
      'mongodb://localhost:27017',
      { useNewUrlParser: true },
      (err, client) => {
        if (err) throw err;
        var db = client.db('wed');
        closure(db);
      }
    );
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get guests
router.get('/guests', (req, res) => {
    connection((db) => {
        db.collection('guests')
            .find()
            .toArray()
            .then((guests) => {
                response.data = guests;
                res.json(response);
            })
            .catch(err => sendError(err, res));
    });
});

module.exports = router;
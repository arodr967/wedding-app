const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const API = 'mongodb://127.0.0.1:27017';

mongoose.connect(API);

const Guest = require('../models/guest');
const guest1 = new Guest({
  firstName: 'Alicia',
  lastName: 'Rodriguez',
  code: '123'
});
guest1.save(err => {
  if (err) throw err;
  console.log('GUEST SAVED!');
});

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/guests', (req, res) => {
  Guest.find({}, (err, guests) => {
    if (err) throw err;
    res.status(200).json(guests);
  });
});

module.exports = router;
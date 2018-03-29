const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guestSchema = new Schema({
  firstName: String,
  lastName: String,
  code: String
});

const Guest = mongoose.model('Guest', guestSchema);

module.exports = Guest;
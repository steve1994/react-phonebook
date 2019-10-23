var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var phonebookSchema = new Schema({
    name: String,
    phone: String
})

module.exports = mongoose.model('Phonebook',phonebookSchema);

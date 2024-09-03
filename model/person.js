const mongoose = require('mongoose');

// Defining the Person Schema
const personSchema = new mongoose.Schema({
    name: {
        type: String, require: true
        },
    age: Number,
    favoriteFoods: [String]
});

// Create the Person model
const Person = mongoose.model('Person', personSchema);

module.exports = Person;
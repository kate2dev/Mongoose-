
const { default: mongoose } = require('mongoose');
const connectDB = require('./database/database');
const Person = require('./model/person');

//Connect to database
connectDB();

// Create Person object
const johnFan = new Person({
    name: "John Fan",
    age: 30,
    favoriteFoods: ['pizza', 'pasta']
})

johnFan.save();

// Create Many Records with model.create()
const arrayOfPeople = [
    { name: 'Jane Doe', age: 25, favoriteFoods: ['sushi', 'burritos'] },
    { name: 'Mike Smith', age: 40, favoriteFoods: ['steak', 'fries'] }
];

// Create multiple people using model.create()
Person.create(arrayOfPeople)
    .then(data => console.log('People created successfully:', data))
    .catch(err => console.log('Error creating people:', err));

// using model.find() to Search Your Database
Person.find({name: 'John'});

//Find one person who likes 'Pizza'
Person.findOne({favoriteFoods: 'pizza'})

// Find byId
Person.findById('66b2c9a02b00bd7eb49198e7');

// perfoming classic updates by running Find, Edit, then save
Person.findById('66b2c9a02b00bd7eb49198e7')
.then(person => {
    if (!person) {
        throw new Error('Person not found');
    }
    person.favoriteFoods.push('hamburger');
    return person.save();
    })
    .then(updatedPerson => {
        console.log('Person updated succesfully', updatedPerson);
    })
    .catch(err => console.log("Error", err))
    
    //Find one and Update
    Person.findOneAndUpdate({name: 'Jane Doe'}, {age: 25}, {new: true});
    
    //Find and Delete
    Person.findByIdAndDelete('66b2c9a02b00bd7eb49198e7');
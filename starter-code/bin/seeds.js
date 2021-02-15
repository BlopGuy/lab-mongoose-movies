const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const DB_NAME = 'starter-code';
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const celebrities = [
    {
        name: 'Johnny Depp',
        occupation: 'Pirates of the Caribean',
        catchPhrase: 'but you have heard of me...'
    },
    {
        name: 'Robert Downey Jr',
        occupation: 'Iron Man',
        catchPhrase: 'Love you 3000'
    },
    {
        name: 'Mark Hamill',
        occupation: 'Luke Skywalker',
        catchPhrase: 'I am a Jedi, like my father before me'
    },
];


Celebrity.create(celebrities)
    .then(celebritiesFromDB => {
        console.log(`Created ${celebritiesFromDB.length} celebrities`);
        // Once created, close the DB connection
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating celebrities from the DB: ${err}`));
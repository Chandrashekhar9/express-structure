const mongoose = require('mongoose');

const connection = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

    console.log('DB connection stablished.');
    return;
}

// Call to connect with Database.
connection().catch(error => console.error(error));
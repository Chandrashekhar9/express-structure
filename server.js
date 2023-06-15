const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const app = express();
const PORT = 4000;

// views setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// layout setup
app.use(expressLayouts);
app.set('layout', 'layouts/layout');

// public path setup
app.use(express.static(path.join(__dirname, '/public')));

// routes.
app.use('/', require('./routes'));

// server start
app.listen(PORT, error => {
    if(error){ console.error(`Error in running the server, ${error}`); }

    console.log(`Server is running on port ${PORT}`); 
})
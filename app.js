require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');

// Connect to DB
const connectDB = require('./server/config/db');

// Express app
const app = express();
const PORT = process.env.PORT || 5000;


// Connect to DB
connectDB();

//for post methods
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files
app.use(express.static('public'));


// Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./server/routes/main'));
app.use('/', require('./server/routes/admin'));



// Server listening
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
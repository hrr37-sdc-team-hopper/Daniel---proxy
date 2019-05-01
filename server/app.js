const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(cors());  // do I even need cors here?
app.use(morgan('dev'));

const staticPath = `${__dirname}/../public`;
app.use('/books/:id', express.static(staticPath));

module.exports = app;

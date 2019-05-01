const express = require('express');
const proxy = require('http-proxy-middleware');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(cors());  // do I even need cors here?
app.use(morgan('dev'));

const staticPath = `${__dirname}/../public`;
app.use('/books/:id', express.static(staticPath));

// reviews-service
app.use(
  '/books/:id/reviews',
  proxy({ target: 'http://localhost:3003', changeOrigin: true }),
);

module.exports = app;

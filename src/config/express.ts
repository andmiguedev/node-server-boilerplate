const express = require('express');
const app = new express();

app.use('/', (req, res) => {
  res.send('Basic Express Server Running...');
});

module.exports = app;

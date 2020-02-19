// Bring in requirements
const express = require('express');
const bodyParser = require('body-parser');
// Gives path of current
const path = require('path');

const PORT = 3000;

const app = express();

// Parsing JSON req body from client
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// default for serving index
app.use('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});

// catch-all route handler for any requests to an unknown route
app.use('*', (req, res) => res.sendStatus(404));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' }
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));

module.exports = app;

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

// server app init
const app = express();
const routes = require('./routes');

const PORT = 5000;

// establish connection with MongoDB
require('./config');

//middleware init
app.use(cors());
app.use(helmet());
app.use(morgan('combined'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoints
app.use(routes);

// Server
module.exports = app;

// app.listen(PORT, () => {
//     console.log('Listening on port ' + PORT);
// });

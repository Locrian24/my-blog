const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

// server app init
const app = express();
const routes = require('./routes');

const PORT = 8080;

// establish connection with MongoDB
require('./config');

//middleware init
app.use(cors());
app.use(helmet());
app.use(morgan('combined'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files middleware
app.use(express.static('client/build'));

// Endpoints
app.use(routes);

// Server
app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
});

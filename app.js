//Lógica de la APP
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const corsOptions = {
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization', 'access_token', 'ACCESS_TOKEN'],
    exposedHeaders: ['Content-Type', 'Authorization', 'access_token', 'ACCESS_TOKEN']
}

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.static(__dirname + '/public'));

const routes = require('./routes/routes');

app.use("/api/", routes);

module.exports = app;
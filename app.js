//Lógica de la APP
const express = require('express');
const app = express();

app.get('/', async (req, res) => {
    // const data = await procesarData();
    res.send('Server NodeJs Activo.');
});

module.exports = app;
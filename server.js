require('dotenv').config();

const server = require('./app.js');

let port = process.env.PORT || 3000; 

server.listen(port, () => {
    console.log(`Listen to ${port}`);
});
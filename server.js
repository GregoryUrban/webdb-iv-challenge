// focal point of End Points

const express = require('express');

const dbRouter = require('./db-Router');

// const cors = require('cors') // stretch

const server = express();

server.use(express.json()); 
// server.use(cors()) // stretch
server.use('/api/dish', dbRouter) // middleware
// server.use('api.users', dbRouter) // examples
// server.use('api.admins', dbRouter)


server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda db API</h>
    <p>Welcome to the Lambda db API</p>
  `);
});





module.exports = server;
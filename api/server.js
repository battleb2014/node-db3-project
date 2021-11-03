const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);
server.use((err, req, res) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = server;
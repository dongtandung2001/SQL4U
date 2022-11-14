const express = require('express');

const user = require('../routes/user');
const auth = require('../routes/auth');
const project = require('../routes/project');



module.exports = function (app) {
    app.use(express.json());
    app.use('/api/users', user);
    app.use('/api/auth', auth)
    app.use('/api/project/', project)
}
const express = require('express');

const router = express.Router();

const bcrypt = require('bcrypt');
const { User } = require('../models/user');
const Joi = require('joi');
const _ = require('lodash');


router.post('/', async (req, res) => {
    // validate input
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // check email
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Invalid email / password');

    // check password
    const password = await bcrypt.compare(req.body.password, user.password);
    if (!password) return res.status(400).send('Invalid email / password');

    // Correct email + password
    const token = user.generateJwtToken();
    res.send(token);

})

function validate(user) {
    const schema = Joi.object({
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required(),
    });

    return schema.validate(user);
}

module.exports = router;
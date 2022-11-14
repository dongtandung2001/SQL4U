const bcrypt = require('bcrypt');
const { User, validate } = require('../models/user');
const _ = require('lodash');

const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    // validate input
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // check if account is existed
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send('Email already existed');

    // Create user
    user = new User(_.pick(req.body, ['email', 'password', 'skill']));

    // encrypt passwor
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    // send jwt token to response header
    const token = user.generateJwtToken();
    res
        .header("x-auth-token", token)
        .header("access-control-expose-headers", "x-auth-token")
        .send(_.pick(user, ["_id", "email"]));
});

// update password
router.put("/:id", async (req, res) => {
    const { error } = validate(req.body);
    let user = await User.findById(req.params.id);
    if (!user) {
        res.status(404).send("User with the given ID does not exist");
    }
    // encrypt passwor
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    res.send(_.pick(user, ['_id', 'email']));
})


module.exports = router;

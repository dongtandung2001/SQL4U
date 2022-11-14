const mongoose = require('mongoose');

const Joi = require('joi');

const courseSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
    topic: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
    topic: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },

})
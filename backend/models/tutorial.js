const mongoose = require('mongoose');
const Joi = require('joi');

const tutorialSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
    content: {
        type: String,
        required: true,
    },
})

const Tutorial = mongoose.model('Tutorial', tutorialSchema);

function validateProject(tutorial) {
    const schema = Joi.object({
        title: Joi.string().required().min(5).max(255),
        content: Joi.string().required(),
    })
    return schema.validate(tutorial);
}


exports.Tutorial = Tutorial;
exports.validate = validateProject;

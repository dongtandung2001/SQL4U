const mongoose = require('mongoose');
const Joi = require('joi');

const tutorialSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
    contents: [{
        header: {
            type: String,
            required: true,
        },
        detail: {
            type: String,
            required: true,
        }
    }]
})

const Tutorial = mongoose.model('Tutorial', tutorialSchema);

function validateProject(tutorial) {
    const schema = Joi.object({
        title: Joi.string().required().min(5).max(255),
        contents: Joi.array().items(Joi.object({
            header: Joi.string().required(),
            detail: Joi.string().required()
        })),
        content: Joi.object({
            header: Joi.string().required(),
            detail: Joi.string().required(),
        })
    })
    return schema.validate(tutorial);
}


exports.Tutorial = Tutorial;
exports.validate = validateProject;

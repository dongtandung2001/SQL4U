const mongoose = require('mongoose');
const Joi = require('joi');

const projectSchema = new mongoose.Schema({
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
    difficulty: {
        type: String,
        required: true,
    }
})

const Project = mongoose.model('Project', projectSchema);

function validateProject(project) {
    const schema = Joi.object({
        title: Joi.string().required().min(5).max(255),
        content: Joi.string().required(),
        difficulty: Joi.string().required(),

    })
    return schema.validate(project);
}


exports.Project = Project;
exports.validate = validateProject;

const mongoose = require('mongoose');
const Joi = require('joi');

const qnaSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    datePosted: {
        type: String,
        default: new Date()
    },
    description: {
        type: String,
        required: true,
    },
    replies: [{
        user: {
            type: String,
            required: true,
        },
        reply: {
            type: String,
            required: true,
        },
        datePosted: {
            type: String,
            default: new Date()
        }
    }]

})

const QnA = mongoose.model('QnA', qnaSchema);

function validateQnA(tutorial) {
    const schema = Joi.object({
        title: Joi.string().required(),
        userName: Joi.string().required(),
        description: Joi.string().required(),
        reply: Joi.object({
            user: Joi.string().required(),
            reply: Joi.string().required(),
        })
    })
    return schema.validate(tutorial);
}


exports.QnA = QnA;
exports.validate = validateQnA;

const mongoose = require('mongoose');
const Joi = require('joi');

const topicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
})

const Topic = mongoose.model('Topic', topicSchema);

function validateTopic(topic) {
    const schema = Joi.object({
        name: Joi.string().required().min(5).max(255),

    })
    return schema.validate(topic);
}


exports.Topic = Topic;
exports.validate = validateTopic;

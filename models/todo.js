 const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoschema = new Schema({

    Date: {
        type: String
    },
    Time: {
        type: String
    },
    Type: {
        type: String
    },
    Name: {
        type: String
    },
    Task: {
        type: String
    },
})

const todo = mongoose.model("todo", todoschema);

module.exports = todo;
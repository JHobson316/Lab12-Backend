const mongoose = require("mongoose")
const { Schema } = mongoose;

const bookSchema = new Schema({
    title: String,
    description: String,
    status: String
})

const Model = mongoose.model("Book", bookSchema)

module.exports = Model;
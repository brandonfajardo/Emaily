const mongoose = require('mongoose')
const { Schema } = mongoose
const Recipient = require('./recipient')

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [Recipient],
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
    _user: { type: Schema.Types.ObjectId, ref: User }, // Who does this survey belong to?
    dateSent: Date,
    lastResponded: Date
})

module.exports = mongoose.model('surveys', surveySchema)
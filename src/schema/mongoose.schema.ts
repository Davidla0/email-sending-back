import { model, Schema } from "mongoose"

const schema = new Schema({
    'to': {type: String, require: true } ,
    'subject': {type: String, require: true },
    'text': {type: String, require: true },

}, {collection: 'email_logs'})

module.exports =  model("Email", schema)
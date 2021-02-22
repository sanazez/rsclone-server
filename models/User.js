const {Schema, model, Types} = require('mongoose');
let schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    surName: {type: String, required: true},
    jobs: [{type: Types.ObjectId, ref: 'users_jobs'}]
})

module.exports = model('User', schema);
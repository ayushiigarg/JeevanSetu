const e = require('express');
const mongoose = require('mongoose');
 
const userSchema = new mongoose.Schema({
    name : {type: String, required: true}, 
    email : {type: String, required: true, unique: true},
    password : {type: String, required: true},
    status : {type: Number, default: 0},
    role : {type: String, default: 'admin '},
},{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);
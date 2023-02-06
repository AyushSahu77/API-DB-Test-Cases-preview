const mongoose = require('mongoose')
const validator = require('validator')

const testSchema = new mongoose.Schema({
    id : {
        type : Number,
        required : true,
        minlength : 1,
        unique  : true
    },
    name : {
        type : String,
        required : true,
        minlength : 4
    }
})

const Test  = new mongoose.model('Test', testSchema)

module.exports = Test
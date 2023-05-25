const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NinjaSchema = new Schema({
    name:{
        type: String,
        required: [true,'Name is Required']
    },
    proffesional:{
        type: String,
        required: [true,'Your Proffessional is required']
    },
    rank:{
        type: String,
    },
    availability:{
        type: String,
        default: false
    },
    age:{
        type: Number,
        required: false
    }
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;
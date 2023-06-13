const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create geo location schema

const GeoSchema = new Schema({
    type:{
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index:"2dsphere"
    }
})

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
    },
    geometry: GeoSchema
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;
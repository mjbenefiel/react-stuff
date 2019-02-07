const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

// create ninja schema & model

const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name required']
    },
    rank: {
        type: String,        
    },
    available: {
        type: Boolean,
        default: false
    }
    // add in geoLocation
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;
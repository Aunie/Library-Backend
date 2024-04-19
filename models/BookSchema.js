const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    publishedYear:{
        type:Number,
        require:true
    },
    genre:{
        type:String,
        require:true
    },
    status:{
        type:String,
        // require:true,
        default: "Available"
    }
});

module.exports = mongoose.model('Books',BookSchema);
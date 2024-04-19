const mongoose = require('mongoose');



const StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    memberId:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    status:{
        type:String,
        require:true
    },

});

module.exports = mongoose.model('Members',StudentSchema);
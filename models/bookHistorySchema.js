const mongoose = require('mongoose')

const bookHistorySchema = new mongoose.Schema({

    bookId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Books'
    },
    checkInTime:{
        type:String,
    },
    studentId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Members'
    }



})



module.exports = mongoose.model('BooksHistory',bookHistorySchema)


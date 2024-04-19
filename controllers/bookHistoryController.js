const bookHistorySchema = require("../models/bookHistorySchema");


const bookHistoryController = async (req,res)=>{


    try {
        const {bookId,checkInTime} = req.body;
        console.log({bookId,checkInTime}  );
       const resp = await new bookHistorySchema({bookId,checkInTime}).save()
                console.log(resp);


    } catch (error) {
        


    }



}


module.exports = { bookHistoryController}
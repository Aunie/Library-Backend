const HistoryRoute = require('express').Router()
const { bookHistoryController } = require('../controllers/bookHistoryController')



HistoryRoute.route('/booksHistory').post(bookHistoryController)




module.exports = HistoryRoute

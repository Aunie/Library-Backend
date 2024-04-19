const express = require('express');
const bookRoute = express.Router();
const {registerBooks,getBooksList, deleteBook,updateBook, unAssignBook}  = require('../controllers/BookController');

bookRoute.route('/books').post(registerBooks);
bookRoute.route('/books').get(getBooksList);
bookRoute.route('/books').delete(deleteBook);
bookRoute.route('/books').put(updateBook);
bookRoute.route('/books/unassign').put(unAssignBook);


module.exports = bookRoute;
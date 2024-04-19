const BookSchema = require("../models/BookSchema");

const registerBooks = (req, res) => {
  try {

      const { author, genre, publishedYear, title , status} = req.body;
    const book = new BookSchema({
      author,
      genre,
      publishedYear,
      title,
      status
    });
    
    // console.log(book);
    book.save();

    res.json({ message: "book data saved", bookData: book });
  } catch (error) {
    res.json(error);
  }
};

const getBooksList = async (req, res) => {
  try {
    const books = await BookSchema.find();
    // console.log(books);
    res.json({ mesasge: "Books data recieved", BooksData: books });
  } catch (error) {
    res.json(error);
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.body;

    const book = await BookSchema.findByIdAndDelete(id);
    console.log(book);

    res.json({ message: "Book deleted" });
  } catch (error) {}
};


const updateBook  =  async (req,res)=>{

  try {
      
      // const {id} = req.body._id
      // const book = await BookSchema.findById(req.body._id)
      // console.log(book);

      const {title,author,publishedYear,genre,_id,status} = req.body
      // console.log({title,author,publishedYear,genre,_id} );
      const updatedBook = await BookSchema.findByIdAndUpdate(_id, {
          title: title,
          author: author,
          publishedYear: publishedYear,
          genre: genre,
          status:'Not Available'
        }, { new: true }
        
        );

        // console.log(updatedBook);

      res.json({message:'Book has been updated successfully',bookData:updatedBook})



  } catch (error) {
      
  }


}



const unAssignBook  =  async (req,res)=>{

  try {
      
      const {title,author,publishedYear,genre,_id,status} = req.body
            // console.log(_id,status);

      const updatedBook = await BookSchema.findByIdAndUpdate(_id, {
          status:'Available'
        }, { new: true }
        
        );

        // console.log(updatedBook);

      res.json({message:'Book has been unassigned successfully',bookData:updatedBook})



  } catch (error) {
      
  }


}




module.exports = { registerBooks, getBooksList, deleteBook,updateBook, unAssignBook};

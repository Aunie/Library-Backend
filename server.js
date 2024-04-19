const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoDb = require('./mongodb/mongodb');
const studentRoute = require('./routes/studentRoute');
const bookRoute = require('./routes/bookRoute');
const employeeRoute = require('./routes/employeeRoute');
const userRoute = require('./routes/usersRoutes');
const HistoryRoute = require('./routes/bookHistoryRoute');
const dotenv = require('dotenv').config()
const app = express();
const PORT = 4000;



app.use(cors({origin:true, credentials: true}));
app.use(cookieParser())
app.use(express.json());

mongoDb();

app.use('/api', studentRoute);

app.use('/api', bookRoute);

app.use('/api', employeeRoute);

app.use('/api', userRoute);

app.use('/api', HistoryRoute);

app.listen(PORT, () => {
    console.log(`Port is working sucessfully at ${PORT}`);
});
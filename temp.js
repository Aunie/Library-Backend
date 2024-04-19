// To install Tailwind CSS
// npm init -y
// npm install -D tailwindcss postcss autoprefixer vite
// "scripts": {
//     "start": "vite"
//   },
// npx tailwindcss init -p
// content: ['*'] (tailwind.config.js)
// npm run start


// To connect Mongodb setup
// npm i mongoose
// npm i express
// npm i cors
// npm i nodemon

// Create a file named mongodb.js inside a parent folder of any name e.g mongodb

// Code inside mongodb.js

// const mongoose = require('mongoose');
// const mongoDb = () => {
//     const url = "mongodb://aun:123@ac-teghpbb-shard-00-00.2ubok0t.mongodb.net:27017,ac-teghpbb-shard-00-01.2ubok0t.mongodb.net:27017,ac-teghpbb-shard-00-02.2ubok0t.mongodb.net:27017/?replicaSet=atlas-14i7vy-shard-0&ssl=true&authSource=admin"; (This link can be get from Mongodb Compass)
//     mongoose.connect(url).then(()=> {
//         console.log('MongoDb Connected Successfully');
//     })
// }
// module.exports = mongoDb;

// Create a file named server.js in the parent folder of backend

// Code inside server.js

// const express = require('express');
// const cors = require('cors');
// const mongoDb = require('./mongodb/mongodb');
// const app = express()
// const PORT = 4000;


// app.use(cors())
// app.use(express.json());//destructuring


// mongoDb()


// app.listen(() => {
//     console.log(`Port is working sucessfully at ${PORT}`);
// })

// npm i axious (From Front end to Backend transfers data)

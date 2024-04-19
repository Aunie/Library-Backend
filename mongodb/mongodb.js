const mongoose = require('mongoose');

const mongoDb = () => {
    const url = "mongodb://aun:123@ac-teghpbb-shard-00-00.2ubok0t.mongodb.net:27017,ac-teghpbb-shard-00-01.2ubok0t.mongodb.net:27017,ac-teghpbb-shard-00-02.2ubok0t.mongodb.net:27017/?replicaSet=atlas-14i7vy-shard-0&ssl=true&authSource=admin";
    mongoose.connect(url).then(()=> {
        console.log('MongoDb Connected Successfully');
    })
}

module.exports = mongoDb;   
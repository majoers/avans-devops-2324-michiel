const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URL;
const client = new MongoClient(uri);

console.log("the db name is " + process.env.DB_NAME);

const db = client.db(process.env.DB_NAME);

module.exports = {
    db: db,
    client: client
};
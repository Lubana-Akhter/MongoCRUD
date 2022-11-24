const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();
// Create a new MongoClient
const client = new MongoClient(process.env.DATABASE);
console.log("Database connected");

module.exports = {client};

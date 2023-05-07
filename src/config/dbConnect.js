import mongoose from "mongoose"

mongoose.connect("mongodb+srv://MONGO_USER:MONGO_PASSWORD@cluster0.8bqkk1r.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;
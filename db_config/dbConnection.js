import mongoose from "mongoose";

const dbConnection = ()=>{
    const MongoUrl = process.env.MongoURL;
    mongoose.connect(MongoUrl)
    .then(()=>{
        console.log("MongoDB Connected");
    })
    .catch((error)=>{
        console.log("Error connecting to MongoDB", error);
    })
}

export default dbConnection;
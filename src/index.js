// This line of import breaks the consistency so for only this to be consistent we do the experiment otherwise this will also run
// require('dotenv').config({path: './env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
});

 
connectDB()













// import express from 'express';
// const app = express();

// ;( async () => {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error",(err) => {
//         console.log("ERR: ",err);
//         throw err
//     })
//     app.listen(process.env.PORT, () => {
//         console.log(`App is running on Port: ${process.env.PORT}`)
//     })
// })()
import mongoose, { connect } from "mongoose";
import express from "express"
import connectDB from "./database/index.js";
import dotenv from "dotenv"

dotenv.config({
    path: './.env'
})
console.log("Mongo URI loaded:", !!process.env.mongo_URI);
connectDB();


















// const app = express();
// async function connectDB() {
//     try {
//         await mongoose.connect(process.env.mongo_URI)
//         app.on("Error", (error) => {
//             console.log("Error");
//             throw error;
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`app is listening on port ${process.env.PORT}`);
//         })
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
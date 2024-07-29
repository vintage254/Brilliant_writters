import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express()
dotenv.config();
mongoose.set('strictQuery', true)

try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB")
} catch (error) {
    handleError(error);
    console.log(error);
}

app.listen(8800, () => {
    console.log("BACKEND SERVER IS RUNNING")
})
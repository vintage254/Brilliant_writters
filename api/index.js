import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import reviewRouter from "./routes/review.route.js";
import orderRouter from "./routes/order.route.js";
import messageRouter from "./routes/message.route.js";
import gigRouter from "./routes/gig.route.js";
import conversationRouter from "./routes/conversation.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

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
app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRouter);
app.use("/api/gigs", gigRouter);
app.use("/api/orders", orderRouter);
app.use("/api/conversation", conversationRouter);
app.use("/api/messages", messageRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/auth", authRouter);

app.listen(8800, () => {
    console.log("BACKEND SERVER IS RUNNING")
})
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';

import userRouter from "./routes/user.js";
import tourRouter from "./routes/tour.js";

 //'mongodb+srv://Nahasil:8592021388@cluster0.r2nhju3.mongodb.net/test'
const port=4000;
const app=express()
app.use(morgan('dev'))
app.use(express.json({ limi: '30mb', extended: true }))
app.use(express.urlencoded({ limi: '30mb', extended: true }))
app.use(cors())

app.use("/users", userRouter);  // http://localhost:4000/users
app.use("/tour", tourRouter);   // http://localhost:4000/tour

const MONGODB_URL = 'mongodb://localhost:27017/trip'


mongoose.connect(MONGODB_URL).then(() => {
    app.listen(port, () => {
        console.log(`server running at ${port} portal`);
    })
}).catch((error)=> console.log(`${error} did not connect`))
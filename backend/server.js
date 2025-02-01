import express from 'express';
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.post("/products", async (req, res) =>{

});

console.log(process.env.MONGO_URI);

app.listen(5001, () => {
    console.log("server started at http://localhost:5001 hello");
});


//npm install mongodb@5.5
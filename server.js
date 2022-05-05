import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.listen(3000, () => console.log("The webserver is running on port 3000"));

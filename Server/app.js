import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./db/connectDB.js";
import routes from "./routes/web.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL;

connectDB(DATABASE_URL);

app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use(json());
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server run at ${port} port`);
});

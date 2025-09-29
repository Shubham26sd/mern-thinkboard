import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
// const express = require("express")

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

//middleware
app.use(cors());
app.use(express.json()); //this middleware will parse JSON bodies: req.body

//our simple custom middleware
// app.use((req, res, next) => {
//   console.log(`Req is ${req.method} & Req url is ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRoutes);

connectDB().then(() =>
  app.listen(PORT, () => {
    console.log("Server started at PORT:", PORT);
  })
);

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
// const express = require("express")

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

//middleware
// if (process.env.NODE_ENV !== "production") {
//   app.use(cors());
// }

app.use(cors());
app.use(express.json()); //this middleware will parse JSON bodies: req.body

app.use("/api/notes", notesRoutes);

const __dirname = path.resolve();

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/dist")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
//   });
// }

connectDB().then(() =>
  app.listen(PORT, () => {
    console.log("Server started at PORT:", PORT);
  })
);

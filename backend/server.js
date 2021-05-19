import express from "express";
import cors from "cors";
import clubculture from "./api/clubculture.route.js";

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/clubculture", clubculture)
app.use("*", (req, res) => res.status(404).json({error: "not found"}))

export default app
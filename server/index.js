import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { PostRoutes } from "./routes/index.js";
const app = express();

app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));

app.use(express.urlencoded({ limit: "30mb", extended: true }));

const CONNECTION_URL =
	"mongodb+srv://admin:pass@cluster0.aom2dla.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
	.connect(CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() =>
		app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
	)
	.catch((error) => console.log(error.message));

app.use("/posts", PostRoutes);

import express from "express";
import mongoose from "mongoose";
import { router as Auth } from "./routes/auth.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 4000;

mongoose
  .connect(
    "mongodb+srv://mohammadalirezaie081:Mh09331732825@cluster0.i3tz8p3.mongodb.net/?retryWrites=true&w=majority&appName=googleGemini"
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/auth", Auth);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} are running`);
});

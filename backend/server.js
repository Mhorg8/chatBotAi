import express from "express";
import mongoose from "mongoose";
import { router as Auth } from "./routes/auth.js";

const app = express();
app.use(express.json());
const PORT = 4000;

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
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

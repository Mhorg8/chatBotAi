import express from "express";
import cors from "cors";
import client from "./prisma.js";
import bcrypt from "bcryptjs";

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

app.get("/", (req, res) => {
  res.send({ message: "Registration successful" });
});

app.post("/register", async (req, res) => {
  const body = req.body;

  const { email, username, password } = body;

  if (!email) {
    res.send({ message: "Pls fill all fields" }).status(500);
  }

  const isExist = await client.user.findUnique({
    where: {
      email: email,
    },
  });

  if (isExist) {
    res.send({ message: "Email is exit, pls Enter another email" }).status(409);
    return;
  }
  const hashedPassword = await bcrypt.hash(password, 12);

  const newUser = await client.user.create({
    data: {
      email,
      password: hashedPassword,
      username,
    },
  });

  if (newUser) {
    res.send({ message: "User created successfully" }).status(200);
  }
});

const PORT = 8000;
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);

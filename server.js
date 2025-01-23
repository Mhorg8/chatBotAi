import express from "express";
import cors from "cors";
import client from "./src/lib/prisma.js";
import bcrypt from "bcryptjs";

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

app.get("/", (req, res) => {
  res.status(200).send({ message: "Registration successful" });
});

app.post("/register", async (req, res) => {
  const body = req.body;

  const { email, username, password } = body;

  // Check if all fields are filled
  if (!email || !username || !password) {
    return res.status(400).send({ message: "Please fill all fields" });
  }

  try {
    // Check if user already exists
    const isExist = await client.user.findUnique({
      where: {
        email: email,
      },
    });

    if (isExist) {
      return res
        .status(409)
        .send({ message: "Email already exists, please try another email." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create the new user
    const newUser = await client.user.create({
      data: {
        email,
        password: hashedPassword,
        username,
      },
    });

    // Respond with success message
    return res
      .status(201) // HTTP 201 indicates a resource was successfully created
      .send({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal server error" });
  }
});

const PORT = 8000;
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);

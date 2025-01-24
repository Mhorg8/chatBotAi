import express from "express";
import session from "express-session";
import cors from "cors";
import client from "./src/lib/prisma.js";
import bcrypt from "bcryptjs";

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies
app.use(
  session({
    secret: process.env.EXPRESS_SESSION, // Replace with a strong secret key
    resave: false,
    saveUninitialized: false, // Only save sessions that are modified
    cookie: {
      secure: false, // Set to `true` if using HTTPS
      httpOnly: true, // Prevent JavaScript from accessing cookies
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    },
  })
);

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

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate input
    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please fill all fields with valid data." });
    }

    // Check if user exists
    const isExist = await client.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!isExist) {
      return res
        .status(404)
        .send({ message: "User not found. Please try another email." });
    }

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, isExist.password);
    if (!isPasswordValid) {
      return res.status(401).send({ message: "Password is not valid." });
    }

    req.session.user = {
      id: isExist.id,
      email: isExist.email,
    };

    // Success response
    return res
      .status(200)
      .send({ message: "Welcome back", userId: isExist.id });
  } catch (error) {
    console.error("Failed to process in server", error);
    return res.status(500).send({ message: "Internal server error" });
  }
});

const PORT = 8000;
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);

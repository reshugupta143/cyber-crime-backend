const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5175",
    credentials: true
  })
);

app.use(cookieParser());


// Authentication routes

app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
  res.json({
    message: "Cyber Crime Awareness Portal API"
  });
});


module.exports = app;
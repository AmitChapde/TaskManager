const cors = require("cors");
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/task.routes");

const app = express();
const PORT = 8082;

const DB_URI = process.env.MONGODB_URL;


// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/tasks", taskRoutes);

// MongoDB Connection
mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4, 
  })
  .then(() => console.log("DB Connected!"))
  .catch((error) => console.error("Error in connecting DB", error));


// Start Server
app.listen(PORT, () => {
  console.log(`Backend listening on Port ${PORT}!`);
});




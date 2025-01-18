const cors = require("cors");
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const taskModel = require("./models/task.model");
const TaskService = require("./services/task.service");
const TaskServiceInstance = new TaskService();
const {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
  } = require("./controllers/task.controller");
const taskRoutes = require("./routes/task.routes");
  


const app = express();
const PORT = 8082;
const DB_URI = process.env.MONGO_URI;
app.use(cors());
app.use(express.json()); 

app.use("/tasks", taskRoutes);

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected!"))
  .catch((error) => console.log("Error in connecting DB", error));

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Backend listening on Port ${PORT}!`);
});
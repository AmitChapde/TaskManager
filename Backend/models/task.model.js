const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: {
      type: String,
      enum: ["TODO", "DONE"],
      linkedFile: {
        data:Buffer,
        contentType: String,
      },
      default: "TODO",
    },
    deadline: { type: Date, required: true },
  },
  { timestamps: true }
);

const taskModel = mongoose.model("Task", taskSchema);
console.log(taskModel);

module.exports = taskModel;

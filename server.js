const express = require("express");
const cors = require("cors");

require("./db");

const Todo = require("./models/Todo");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/todos", async (req, res) => {
  let todos = await Todo.find();

  res.send(todos);
});

app.post("/todos", async (req, res) => {
  let todo = await Todo.create({
    title: req.body.title,
  });

  res.send(todo);
});

app.put("/todos/:id", async (req, res) => {
  let todo = await Todo.findByIdAndUpdate(
    req.params.id,
    { title: req.body.title },
    { new: true },
  );

  res.send(todo);
});

app.delete("/todos/:id", async (req, res) => {
  let todo = await Todo.findByIdAndDelete(req.params.id);

  res.send(todo);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

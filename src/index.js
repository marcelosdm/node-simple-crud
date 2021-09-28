const express = require("express");
const cors = require("cors");

const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
}

app.post("/users", (request, response) => {
  const {name, username} = request.body;

  const userExists = users.find(user => user.username === username);

  if(userExists) {
    return response.status(400).json({error: "Username already exists"});
  }

  const newUser = {
    id: uuidv4(),
    name,
    username,
    todos: []
  }

  users.push(newUser);

  return response.status(201).json(newUser);

});

app.get("/todos", checksExistsUserAccount, (request, response) => {
});

app.post("/todos", checksExistsUserAccount, (request, response) => {
});

app.put("/todos/:id", checksExistsUserAccount, (request, response) => {
});

app.patch("/todos/:id/done", checksExistsUserAccount, (request, response) => {
});

app.delete("/todos/:id", checksExistsUserAccount, (request, response) => {
});

module.exports = app;

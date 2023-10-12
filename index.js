const express = require("express");
const app = express();
const uuid = require("uuid");

app.use(express.json())

const port = 3000;

const users = [];

app.get("/users", (request, response) => {
    return response.json(users);

});

app.post("/users", (request, response) => {
    const { name, age } = request.body;

    const user = { id: uuid.v4(), name, age };

    users.push(user);

    return response.json(users);
});

app.listen(3000, () => {
    console.log(`Server started on port ${port}...`);
});

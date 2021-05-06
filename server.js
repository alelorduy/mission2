const express = require("express");
const cors = require("cors");
const db = require("./src/db");
const usersRouter = require("./src/routes/users.routes");

const app = express();
db();
app.use(express.json());
app.use(cors());

app.use("/users", usersRouter);

app.listen(8000, () => console.log("Listening on port 8000"));

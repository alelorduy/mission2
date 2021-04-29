const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.listen(8000, () => console.log("Listening on port 8000"));

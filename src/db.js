const mongoose = require("mongoose");

function db() {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose.connect(
    "mongodb+srv://jpalacio0612:colombia2020@cluster0.2brkw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    options
  );

  const { connection } = mongoose;

  connection.once("open", () =>
    console.log("Connection established sucessful")
  );
  connection.on("error", (error) => console.log("Something went wrong"));

  return connection;
}

module.exports = db;

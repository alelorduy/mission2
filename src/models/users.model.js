const { Schema, model } = require("mongoose");

const usersSchema = new Schema({
  githubUser: {
    type: String,
    required: [true, "Github user is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
});

const Users = model("Users", usersSchema);

module.exports = Users;

const Users = require("../models/users.model");

module.exports = {
  async create(req, res) {
    const data = req.body;
    try {
      await Users.create(data);
      res.status(201).json();
    } catch (error) {
      res.status(400).json();
    }
  },

  async list(req, res) {
    const users = await Users.find();
    res.status(200).json(users);
  },
};

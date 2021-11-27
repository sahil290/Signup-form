const express = require("express");
const router = express.Router();
const user = require("../Models/userModel");
//Routes Here
//Route for get users
router.get("/", async (req, res) => {
  try {
    const isUser = await user.find();
    res.send(isUser);
  } catch (err) {
    res.send({ message: err });
  }
});
//Route for adding a new user into the Database
router.post("/", async (req, res) => {
  const newUser = new user({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    age: req.body.age,
    password: req.body.password,
  });
  try {
    const saveNewUser = await newUser.save();
    res.json(saveNewUser);
  } catch (err) {
    res.json({ message: err });
  }
});
//Route for getting specific post
router.get("/:userId", async (req, res) => {
  try {
    const findUser = await user.findById(req.params.userId);
    res.json(findUser);
  } catch (err) {
    res.json({ message: err });
  }
});
//Delete Route
router.delete("/:userId", async (req, res) => {
  try {
    const deleteUser = await user.deleteOne({ _id: req.params.userId });
    res.json(deleteUser);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;

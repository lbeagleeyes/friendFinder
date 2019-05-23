var express = require("express");
var path = require("path");
var htmlRouter = express.Router();

htmlRouter.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

htmlRouter.get("/addProfile", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/addPerson.html"));
});

htmlRouter.get("/friends", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/viewFriend.html"));
});



module.exports = htmlRouter;
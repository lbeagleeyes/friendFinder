var express = require("express");
var path = require("path");
var apiRouter = express.Router();


apiRouter.post("/api/people", function (req, res) {
  var newPerson = req.body;
  
  var person = new Person(newPerson.name, newPerson.pictureAddress, newPerson.responses);

  console.log(JSON.stringify(person));

  friendMgr.addPerson(person);
  res.json(person);
});

apiRouter.post("/api/findFriend", function (req, res) {
  var person = req.body;
  

  console.log(JSON.stringify(person));

  var friend = friendMgr.findFriend(person);
  res.json(friend);
});

apiRouter.get("/api/people", function (req, res) {
  return res.json(friendMgr.people);
});

module.exports = apiRouter;
var Person = require("../data/person.js");

class FriendMgr {
  constructor() {
    this.people = [];
  }

  findFriend(me) {
    var absoluteDiff = 50;
    var friend = {};
    for (var i = 0; i < this.people.length; i++) {
      if (this.people[i].name != me.name) {
        var diff = this.getAbsoluteDiff(this.people[i].responses, me.responses);
        if (diff < absoluteDiff) {
          absoluteDiff = diff;
          friend = this.people[i];
        }
      }
    }
    return friend;
  }

  getAbsoluteDiff(res1, res2) {
    var absSum = 0;
    for (var i = 0; i < res1.length; i++) {
      absSum += Math.abs(res1[i] - res2[i]);
    }
    return absSum;
  }

  addPerson(person) {
    this.people.push(person);
  }

}
var friendMgr = new FriendMgr();

friendMgr.addPerson(new Person("Bugs Bunny","http://lorempixel.com/400/200/",[5,0,5,5,0,2,5,2,5,2,4]));

friendMgr.addPerson(new Person("Sam Yosemite","http://lorempixel.com/400/200/",[5,1,0,1,3,2,3,0,5,5,4]));

module.exports = friendMgr;

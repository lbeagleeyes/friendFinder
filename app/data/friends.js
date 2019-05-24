
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

module.exports = friendMgr;

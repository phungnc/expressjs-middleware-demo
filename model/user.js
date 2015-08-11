require('array.prototype.find');

var userData = [
  {
    id: 1,
    name: "Ho"
  },
  {
    id: 2,
    name: "Dat"
  },
  {
    id: 3,
    name: "Hy"
  }
];

exports.findUser = function findUser(name) {
  userData.find(function(user) {
    console.log(user.name);
    if (user.name === name) return user; else return false;
  });
};
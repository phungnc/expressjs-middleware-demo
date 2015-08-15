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

exports.findUser = function(name) {
  return userData.find(function (user) {
    return user.name == name;
  });
}

//module.exports = findUser;
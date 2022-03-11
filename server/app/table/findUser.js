/**
 * 查询用户信息
 */
const User = require("./user.js");

const findUser = function(option = {}) {
  return new Promise((resolve) => {
    if (!option.name) {
      delete option.name;
    } else {
      option.name = { $regex: option.name }; //模糊查询
    }

    User.find(option, function(err, res) {
      if (err) {
        resolve(false);
      } else {
        resolve(res);
      }
    });
  });
};

module.exports = findUser;

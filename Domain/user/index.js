const baseRepo = require("../../Repo/repo");
const model = require("./schema");
const bcrypt = require("bcrypt");
const saltRounds = 10;

class UserDomain {
  userRepo = new baseRepo(model);

  listUsers() {
    return this.userRepo.find(hide);
  }

  async addUser(user) {
    user.password = await bcrypt.hash(user.password, saltRounds);
    return this.userRepo.create(user);
  }

  updateUser(filter, newUser, options) {
    return this.userRepo.update(filter, newUser, options);
  }
  findOneUser(userInfo, hide) {
    return this.userRepo.findOne(userInfo, hide);
  }
  deleteUser(id) {
    return this.userRepo.delete(id, { projection: { _id: 0 } });
  }
}

module.exports = UserDomain;

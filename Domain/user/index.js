const baseRepo = require("../../Repo/repo");
const model = require("./schema");
class UserDomain {
  userRepo = new baseRepo(model);

  listUsers(user) {
    return this.userRepo.find(user);
  }

  addUser(user) {
    return this.userRepo.create(user);
  }

  updateUser(id, newUser) {
    return this.userRepo.update(id, newUser);
  }
  findOneUser(userInfo) {
    return this.userRepo.findOne(userInfo);
  }
  deleteUser(id) {
    return this.userRepo.delete(id);
  }
}

module.exports = UserDomain;

const UserDomain = require("../../Domain/user/index");

const userDomain = new UserDomain();
class KyndrService {
  constructor() {}

  async listUsers() {
    return await userDomain.listUsers();
  }

  async findOneUser(userInfo) {
    return await userDomain.findOneUser(userInfo);
  }

  async addUser(user) {
    return await userDomain.addUser(user);
  }

  async updateUser(id, newUser) {
    return await userDomain.updateUser(id, newUser);
  }

  async deleteUser(id) {
    return await userDomain.deleteUser(id);
  }
}

module.exports = KyndrService;

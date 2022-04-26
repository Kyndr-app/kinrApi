const baseRepo = require("../../Repo/repo");
const model = require("./schema");
const UserDomain = require("../user/index");
const selection = "-_id";
const hide = { _id: 0 };
const path = "user";
class SupporterDomain {
  userDomain = new UserDomain();
  supporterRepo = new baseRepo(model);

  listSupporters() {
    return this.supporterRepo.find(hide).populate(path, selection);
  }

  async findOneSupporter(filter) {
    const user = await this.userDomain.findOneUser(filter);
    return this.supporterRepo
      .findOne({ user: user._id }, hide)
      .populate(path, selection);
  }

  addSupporter(supporter) {
    return this.supporterRepo.create(supporter);
  }

  async updateSupporter(filter, newsupporter) {
    const supporter = await this.findOneSupporter(filter);
    return this.userDomain.updateUser(
      { user: supporter.user.toString() },
      newsupporter
    );
  }

  async deleteSupporter(filter) {
    const user = await this.userDomain.findOneUser(filter);
    return this.supporterRepo.delete(
      { user: user._id },
      { projection: { ...hide, user: 0 } }
    );
  }
}

module.exports = SupporterDomain;

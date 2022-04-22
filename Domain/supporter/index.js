const baseRepo = require("../../Repo/repo");
const model = require("./schema");
const UserDomain = require("../user/index")
const selection = "-_id";
const hide = { _id: 0 };
const path = "user";
class SupporterDomain {
  userDomain = new UserDomain()
  supporterRepo = new baseRepo(model);

  listSupporters() {
    return this.supporterRepo.find(hide).populate(path, selection);
  }

  addSupporter(supporter) {
    return this.supporterRepo.create(supporter);
  }

  updateSupporter(filter, newsupporter) {
    return this.supporterRepo.update(filter, newsupporter);
  }
  findOneSupporter(filter) {
    return this.userDomain.findOneUser(filter, hide)
  }
  deleteSupporter(filter) {
    return this.supporterRepo.delete(filter);
  }
}

module.exports = SupporterDomain;

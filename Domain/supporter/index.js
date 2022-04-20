const baseRepo = require("../../Repo/repo");
const model = require("./schema");
class SupporterDomain {
  supporterRepo = new baseRepo(model);

  listSupporters() {
    return this.supporterRepo.findPopulate("user");
  }

  addSupporter(supporter) {
    return this.supporterRepo.create(supporter);
  }

  updateSupporter(id, newsupporter) {
    return this.supporterRepo.update(id, newsupporter);
  }
  findOneSupporter(supporterInfo) {
    return this.supporterRepo.findOnePopulate(supporterInfo, "user");
  }
  deleteSupporter(id) {
    return this.supporterRepo.delete(id);
  }
}

module.exports = SupporterDomain;

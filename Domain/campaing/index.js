const baseRepo = require("../../Repo/repo");
const model = require("./schema");

const selection = "-_id";
const hide = { _id: 0 };

class CampaingDomain {
  campaingRepo = new baseRepo(model);

  listCampaings() {
    return this.campaingRepo.find();
  }

  findOneCampaing(item, hide) {
    return this.campaingRepo.findOne(item, hide);
  }

  addCampaing(item) {
    return this.campaingRepo.create(item);
  }

  updateCampaing(filter, newItem) {
    return this.campaingRepo.update(filter, newItem, {});
  }

  async deleteCampaing(filter) {}

  // donations
}

module.exports = CampaingDomain;

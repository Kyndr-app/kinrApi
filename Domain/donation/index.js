const baseRepo = require("../../Repo/repo");
const model = require("./schema");

const selection = "-_id";
const hide = { _id: 0 };

class DonationDomain {
  donationRepo = new baseRepo(model);

  listDontations() {
    return this.donationRepo.find();
  }

  findOneDonation(item) {
    return this.donationRepo.findOne(item);
  }

  addDonation(item) {
    return this.donationRepo.create(item);
  }

  updateDonation(filter, newItem) {
  }

  async deleteDonation(filter) {

  }

  // donations
}

module.exports = DonationDomain;

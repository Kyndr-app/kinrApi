const baseRepo = require("../../Repo/repo");
const model = require("./schema");
const UserDomain = require("../user/index");
const selection = "-_id";
const hide = { _id: 0 };
const path = "user";

class BeneficiaryDomain {
  beneficiaryRepo = new baseRepo(model);
  userDomain = new UserDomain();
  listBeneficiaries() {
    return this.beneficiaryRepo.find(hide).populate(path, selection);
  }

  async findOneBeneficiary(filter) {
    const user = await this.userDomain.findOneUser(filter);
    return this.beneficiaryRepo
      .findOne({ user: user._id }, hide)
      .populate(path, selection);
  }

  addBeneficiary(beneficiary) {
    return this.beneficiaryRepo.create(beneficiary);
  }

  async updateBeneficiary(filter, newBeneficiary) {
    const beneficiary = await this.findOneBeneficiary(filter);
    return this.userDomain.updateUser(
      { user: beneficiary.user.toString() },
      newBeneficiary
    );
  }

  async deleteBeneficiary(filter) {
    const user = await this.userDomain.findOneUser(filter);
    return this.beneficiaryRepo.delete(
      { user: user._id },
      { projection: { ...hide, user: 0 } }
    );
  }
}

module.exports = BeneficiaryDomain;

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
    return this.userDomain.findOneUser(filter, hide);
  }

  addBeneficiary(beneficiary) {
    return this.beneficiaryRepo.create(beneficiary);
  }

  updateBeneficiary(filter, newbeneficiary) {
    return this.beneficiaryRepo.update(filter, newbeneficiary);
  }

  async deleteBeneficiary(filter) {
    const user = await this.userDomain.findOneUser(filter);
    console.log(user);
    return this.beneficiaryRepo.delete({ user: user._id });
  }
}

module.exports = BeneficiaryDomain;

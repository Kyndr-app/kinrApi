const baseRepo = require("../../Repo/repo");
const model = require("./schema");
class BeneficiaryDomain {
  beneficiaryRepo = new baseRepo(model);

  listBeneficiaries() {
    return this.beneficiaryRepo.findPopulate("user");
  }

  addBeneficiary(beneficiary) {
    return this.beneficiaryRepo.create(beneficiary);
  }

  updateBeneficiary(id, newbeneficiary) {
    return this.beneficiaryRepo.update(id, newbeneficiary);
  }
  findOneBeneficiary(beneficiaryInfo) {
    return this.beneficiaryRepo.findOnePopulate(beneficiaryInfo, "user");
  }
  deleteBeneficiary(id) {
    return this.beneficiaryRepo.delete(id);
  }
}

module.exports = BeneficiaryDomain;

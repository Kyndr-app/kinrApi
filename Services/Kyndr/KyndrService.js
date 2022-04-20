const UserDomain = require("../../Domain/user/index");
const SupporterDomain = require("../../Domain/supporter/index");
const BeneficiaryDomain = require("../../Domain/beneficiary/index");
const TeamMemberDomain = require("../../Domain/team_member/index");

const userDomain = new UserDomain();
const supporterDomain = new SupporterDomain();
const beneficiaryDomain = new BeneficiaryDomain();
const teamMemberDomain = new TeamMemberDomain();

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

  // Supporters
  async listSupporters() {
    return await supporterDomain.listSupporters();
  }

  async findOneSupporter(supporterInfo) {
    return await supporterDomain.findOneSupporter(supporterInfo);
  }

  async addSupporter(supporter) {
    return await supporterDomain.addSupporter(supporter);
  }

  async updateSupporter(id, newSupporter) {
    return await supporterDomain.updateSupporter(id, newSupporter);
  }

  async deleteSupporter(id) {
    return await supporterDomain.deleteSupporter(id);
  }

  // Beneficiaries

  async listBeneficiaries() {
    return await beneficiaryDomain.listBeneficiaries();
  }

  async findOneBeneficiary(beneficiaryInfo) {
    return await beneficiaryDomain.findOneBeneficiary(beneficiaryInfo);
  }

  async addBeneficiary(beneficiary) {
    return await beneficiaryDomain.addBeneficiary(beneficiary);
  }

  async updateBeneficiary(id, newBeneficiary) {
    return await beneficiaryDomain.updateBeneficiary(id, newBeneficiary);
  }

  async deleteBeneficiary(id) {
    return await beneficiaryDomain.deleteBeneficiary(id);
  }

  
  // TeamMembers

  async listTeamMembers() {
    return await teamMemberDomain.listTeamMembers();
  }

  async findOneTeamMember(team_memberInfo) {
    return await teamMemberDomain.findOneTeamMember(team_memberInfo);
  }

  async addTeamMember(team_member) {
    return await teamMemberDomain.addTeamMember(team_member);
  }

  async updateTeamMember(id, newTeam_member) {
    return await teamMemberDomain.updateTeamMember(id, newTeam_member);
  }

  async deleteTeamMember(id) {
    return await teamMemberDomain.deleteTeamMember(id);
  }
}

module.exports = KyndrService;

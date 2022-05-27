const UserDomain = require("../../Domain/user/index");
const SupporterDomain = require("../../Domain/supporter/index");
const BeneficiaryDomain = require("../../Domain/beneficiary/index");
const TeamMemberDomain = require("../../Domain/team_member/index");

const OrganizationDomain = require("../../Domain/organization/index");

const DonationDomain = require("../../Domain/donation/index");

const userDomain = new UserDomain();
const supporterDomain = new SupporterDomain();
const beneficiaryDomain = new BeneficiaryDomain();
const teamMemberDomain = new TeamMemberDomain();
const organizationDomain = new OrganizationDomain();

const donationDomain = new DonationDomain();


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

  async updateUser(filter, newUser) {
    return await userDomain.updateUser(filter, newUser);
  }

  async deleteUser(filter) {
    return await userDomain.deleteUser(filter);
  }

  // Beneficiaries

  async listBeneficiaries() {
    return await beneficiaryDomain.listBeneficiaries();
  }

  async findOneBeneficiary(filter) {
    return await beneficiaryDomain.findOneBeneficiary(filter);
  }

  async addBeneficiary(beneficiary) {
    return await beneficiaryDomain.addBeneficiary(beneficiary);
  }

  async updateBeneficiary(filter, newBeneficiary) {
    return await beneficiaryDomain.updateBeneficiary(filter, newBeneficiary);
  }

  async deleteBeneficiary(filter) {
    return await beneficiaryDomain.deleteBeneficiary(filter);
  }

  // Supporters
  async listSupporters() {
    return await supporterDomain.listSupporters();
  }

  async findOneSupporter(filter) {
    return await supporterDomain.findOneSupporter(filter);
  }

  async addSupporter(supporter) {
    return await supporterDomain.addSupporter(supporter);
  }

  async updateSupporter(filter, newSupporter) {
    return await supporterDomain.updateSupporter(filter, newSupporter);
  }

  async deleteSupporter(filter) {
    return await supporterDomain.deleteSupporter(filter);
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

  updateTeamMember(filter, newTeam_member) {
    return teamMemberDomain.updateTeamMember(filter, newTeam_member);
  }

  async deleteTeamMember(filter) {
    return await teamMemberDomain.deleteTeamMember(filter);
  }

  //Organization

  async listOrganizations() {
    return await organizationDomain.listOrganizations();
  }

  async findOneOrganization(organization) {
    return await organizationDomain.findOneOrganization(organization);
  }

  async addOrganization(organization) {
    return await organizationDomain.addOrganization(organization);
  }

  async updateOrganization(filter, newOrganization) {
    return await organizationDomain.updateOrganization(filter, newOrganization);
  }

  async deleteOrganization(filter) {
    return await organizationDomain.deleteOrganization(filter);
  }

  // campaing

  async listCampaings(organization) {
    return await organizationDomain.listOrganizationCampaings(organization);
  }

  async findOneCampaing(organization) {
    return await organizationDomain.findOneOrganizationCampaing(organization);
  }

  async addCampaing(campaing, newCampaing) {
    return await organizationDomain.addCampaing(campaing, newCampaing);
  }

  async updateCampaing(organization, campaing, newCampaing) {
    return await organizationDomain.updateCampaing(
      organization,
      campaing,
      newCampaing
    );
  }

  async deleteCampaing(organization, campaing) {
    return await organizationDomain.deleteCampaing(organization, campaing);
  }

  async createDonation(donation) {
    return await DonationDomain.createDonation(donation)
  }
}

module.exports = KyndrService;

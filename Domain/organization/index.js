const baseRepo = require("../../Repo/repo");
const model = require("./schema");
const CampaingDomain = require("../campaing/index");
const selection = "-_id";
const hide = { _id: 0 };

class OrganizationDomain {
  organizationRepo = new baseRepo(model);
  campaingDomain = new CampaingDomain();
  listOrganizations() {
    return this.organizationRepo.find(hide);
  }

  findOneOrganization(filter) {
    return this.organizationRepo.findOne(filter, hide);
  }

  async addOrganization(item) { // i need to hide the id
    const org = await this.organizationRepo.create(item)
    org._id = null;
    return org;
  }

  updateOrganization(filter, newItem) {
    return this.organizationRepo.update(filter, newItem);
  }

  deleteOrganization(filter) {
    return this.organizationRepo.delete(filter);
  }

   listOrganizationCampaings(organization) {
      console.log(organization)
      return this.organizationRepo.findOne(organization, hide).populate("campaings", hide)
  }
  
  async findOneOrganizationCampaing(campaing) { // id is not being selected
    return this.campaingDomain.findOneCampaing(campaing, hide)
  }

  async addCampaing(organization, newCampaing) {
    const _organization = await this.organizationRepo.findOne(organization);
    newCampaing.organization = _organization._id;
    const newLinkedCampaing = await this.campaingDomain.addCampaing(
      newCampaing
    );

    return await this.organizationRepo.update({_id: _organization._id }, {
      $push: {
        campaings: newLinkedCampaing,
      },
      
    }, { upsert: true }).populate("campaings", hide);

  }

  async updateCampaing(campaing, newCampaing) {
    return this.campaingDomain.updateCampaing({campaing}, newCampaing).populate("organization", hide)
  }

  deleteCampaing(filter) {}
}

module.exports = OrganizationDomain;

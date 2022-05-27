const baseRepo = require("../../Repo/repo");
const model = require("./schema");
const CampaingDomain = require("../campaing/index");
const selection = "-_id";
const hide = { _id: 0 };

class OrganizationDomain {
  organizationRepo = new baseRepo(model);
  campaingDomain = new CampaingDomain();
  listOrganizations() {
    return this.organizationRepo.find({ _id: 0, campaings: 0 });
  }

  findOneOrganization(filter) {
    return this.organizationRepo.findOne(filter, { _id: 0, campaings: 0 });
  }

  async addOrganization(item) {
    // i need to hide the id
    const org = await this.organizationRepo.create(item);
    org._id = null;
    return org;
  }

  async updateOrganization(filter, newItem) {
    console.log(newItem);
    return this.organizationRepo.update(filter, newItem, {
      new: true,
      fields: { _id: 0, campaings: 0, team_members: 0 },
    });
  }

  deleteOrganization(filter) {
    return this.organizationRepo.delete(filter);
  }

  async listOrganizationCampaings() {
    let list = await this.organizationRepo
      .find(hide)
      .populate("campaings", { _id: 0, organization: 0 });

    return list;
  }

  async findOneOrganizationCampaing(campaing) {
    // id is not being selected
    return this.campaingDomain.findOneCampaing(campaing, {
      _id: 0,
      organization: 0,
    });
  }

  async addCampaing(organization, newCampaing) {
    const _organization = await this.organizationRepo.findOne(organization);
    newCampaing.organization = _organization._id;
    const newLinkedCampaing = await this.campaingDomain.addCampaing(
      newCampaing
    );

    await this.organizationRepo
      .update(
        { _id: _organization._id },
        {
          $push: {
            campaings: newLinkedCampaing,
          },
        },
        { upsert: true }
      )
      .populate("campaings", { _id: 0, organization: 0 });

    return this.findOneOrganizationCampaing(newCampaing);
  }

  async updateCampaing(campaing, newCampaing) {
    await this.campaingDomain
      .updateCampaing({ campaing }, newCampaing)
      .populate("organization", { _id: 0, organization: 0 });
    return this.findOneOrganizationCampaing(newCampaing);
  }

  // deleteCampaing(filter) {}
}

module.exports = OrganizationDomain;

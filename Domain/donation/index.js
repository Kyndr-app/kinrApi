const baseRepo = require("../../Repo/repo");
const model = require("./schema");

const selection = "-_id";
const hide = { _id: 0 };

const SupporterDomain = require("../supporter/index");
const CampaingDomain = require("../campaing/index");

class DonationDomain {
  donationRepo = new baseRepo(model);
  supporterDomain = new SupporterDomain();
  campaingDomain = new CampaingDomain();
  listDontations() {
    return this.donationRepo
      .find(hide)
      .populate("campaing", hide)
      .populate("supporter", hide);
  }

  findOneDonation(filter) {
    return this.donationRepo
      .findOne(filter, hide)
      .populate("campaing", hide)
      .populate("supporter", hide);
  }

  addDonation(item, campaingFilter, supporterFilter) {



    const campaing = await this.campaingDomain.findOneCampaing(campaingFilter);
    const supporter = await this.supporterDomain.findOneSupporter(supporterFilter);
    item.campaing = campaing._id;
    item.supoporter = supporter._id;
    const donation = await this.donationRepo
    .create(item)
    .populate("campaing", hide)
    .populate("supporter", hide);

    await this.campaingDomain.updateCampaing({_id:  item.campaing  }, {
      $push: {
        donations: donation,
      },
      
    }, { upsert: true }).populate("donations", hide);


    await this.supporterDomain.updateSupporter({_id: supporter._id }, {
      $push: {
        donations: donation,
      },
      
    }, { upsert: true }).populate("donations", hide);

    return donation;
  }

  updateDonation(filter, newItem) {}

  async deleteDonation(filter) {}

  // donations
}

module.exports = DonationDomain;

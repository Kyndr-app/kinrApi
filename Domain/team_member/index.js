const baseRepo = require("../../Repo/repo");
const model = require("./schema");
const UserDomain = require("../user/index");
const selection = "-_id";
const hide = { _id: 0 };
const path = "user";
class TeamMemberDomain {
  teamMemberRepo = new baseRepo(model);
  userDomain = new UserDomain();
  listTeamMembers() {
    return this.teamMemberRepo.find(hide).populate(path, selection);
  }
  async findOneTeamMember(filter) {
    const user = await this.userDomain.findOneUser(filter);
    return this.teamMemberRepo
      .findOne({ user: user._id }, hide)
      .populate(path, selection);
  }
  addTeamMember(teamMember) {
    return this.teamMemberRepo.create(teamMember);
  }

  async updateTeamMember(filter, newTeamMember) {
    const user = await this.userDomain.findOneUser(filter);
    const team_member = await this.teamMemberRepo
      .findOne({ user: user._id }, hide)
      .populate(path);

      this.userDomain.updateUser(
        { user: team_member.user._id },
        newTeamMember.user
      );

    return this.teamMemberRepo.update(
      { user: team_member.user._id },
      newTeamMember.team_member
    );
  }

  async deleteTeamMember(filter) {
    const user = await this.userDomain.findOneUser(filter);
    return this.teamMemberRepo.delete(
      { user: user._id },
      { projection: { ...hide, user: 0 } }
    );
  }
}

module.exports = TeamMemberDomain;

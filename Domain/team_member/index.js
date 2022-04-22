const baseRepo = require("../../Repo/repo");
const model = require("./schema");
const UserDomain = require("../user/index")
const selection = "-_id";
const hide = { _id: 0 };
const path = "user";
class TeamMemberDomain {
  teamMemberRepo = new baseRepo(model);
  userDomain = new UserDomain()
  listTeamMembers() {
    return this.teamMemberRepo.find(hide).populate(path, selection)
  }
  findOneTeamMember(filter) {
    return this.userDomain.findOneUser(filter, hide)
  }
  addTeamMember(teamMember) {
    return this.teamMemberRepo.create(teamMember);
  }

  updateTeamMember(id, newTeamMember) {
    return this.teamMemberRepo.update(id, newTeamMember);
  }

  deleteTeamMember(id) {
    return this.teamMemberRepo.delete(id);
  }
}

module.exports = TeamMemberDomain;

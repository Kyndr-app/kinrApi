const baseRepo = require("../../Repo/repo");
const model = require("./schema");
class TeamMemberDomain {
  teamMemberRepo = new baseRepo(model);

  listTeamMembers() {
    return this.teamMemberRepo.findPopulate("user");
  }
  findOneTeamMember(teamMemberInfo) {
    return this.teamMemberRepo.findOnePopulate(teamMemberInfo, "user");
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

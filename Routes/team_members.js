const response = require("../Utils/response");
const express = require("express");
const router = express.Router();
const KyndrService = require("../Services/Kyndr/KyndrService");
const kyndrService = new KyndrService();

router.get("/", async (req, res) => {
  try {
    const team_membersList = await kyndrService.listTeamMembers();

    response.success(req, res, team_membersList, 201);
  } catch (error) {
    console.log(error);
    response.error(req, res, "Invalid information", 400, "Error", error);
  }
});

router.get("/:user_name", async (req, res) => {
  try {
    const user = await kyndrService.findOneTeamMember({
      user_name: req.params.user_name,
    });
    response.success(req, res, user, 201);
  } catch (error) {
    console.log(error);
    response.error(req, res, "Invalid information", 400, "Error", error);
  }
});

router.post("/", async (req, res) => {
  try {
    const newUser = await kyndrService.addUser(req.body.user);
    const newteamMember = await kyndrService.addTeamMember({
      user: newUser._id,
      permissions: req.body.team_member.permissions,
      designation: req.body.team_member.designation,
      state: req.body.team_member.state,
    });

    response.success(
      req,
      res,
      await kyndrService.findOneTeamMember({ _id: newteamMember.user }),
      201
    );
  } catch (error) {
    console.log(error);
    response.error(req, res, "Invalid information", 400, "Error", error);
  }
});

router.patch("/:user_name", async (req, res) => {
  try {
    const newTeamMember = await kyndrService.updateTeamMember(
      { user_name: req.params.user_name },
      req.body
    );

    response.success(req, res, newTeamMember, 201);
  } catch (error) {
    console.log(error);
    response.error(req, res, "Invalid information", 400, "Error", error);
  }
});

router.delete("/:user_name", async (req, res) => {
  try {
    const teamMember = await kyndrService.deleteTeamMember({
      user_name: req.params.user_name,
    });
    const user = await kyndrService.deleteUser(teamMember.user);
    response.success(req, res, { teamMember, user }, 201);
  } catch (error) {
    response.error(req, res, "Invalid information", 400, "Error", error);
    console.log(error);
  }
});

module.exports = router;

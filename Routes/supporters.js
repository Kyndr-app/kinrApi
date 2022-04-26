const response = require("../Utils/response");
const express = require("express");
const router = express.Router();
const KyndrService = require("../Services/Kyndr/KyndrService");
const kyndrService = new KyndrService();

router.get("/", async (req, res) => {
  try {
    const supporterList = await kyndrService.listSupporters();

    response.success(req, res, supporterList, 201);
  } catch (error) {
    console.log(error);
    response.error(req, res, "Invalid information", 400, "Error", error);
  }
});

router.get("/:user_name", async (req, res) => {
  try {
    const user = await kyndrService.findOneSupporter({
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

    const newSupporter = await kyndrService.addSupporter({ user: newUser._id });
    response.success(
      req,
      res,
      await kyndrService.findOneSupporter({ _id: newSupporter.user }),
      201
    );
  } catch (error) {
    console.log(error);
    response.error(req, res, "Invalid information", 400, "Error", error);
  }
});

router.patch("/:user_name", async (req, res) => {
  try {
    const newUser = await kyndrService.updateSupporter(
      {user_name: req.params.user_name},
      req.body.user
    );
    response.success(req, res, newUser, 201);
  } catch (error) {
    console.log(error);
    response.error(req, res, "Invalid information", 400, "Error", error);
  }
});

router.delete("/:user_name", async (req, res) => {
  try {
    const supporter = await kyndrService.deleteSupporter({
      user_name: req.params.user_name,
    });
    const user = await kyndrService.deleteUser({ user: supporter.user });
    response.success(req, res, { supporter, user }, 201);
  } catch (error) {
    response.error(req, res, "Invalid information", 400, "Error", error);
    console.log(error);
  }
});

module.exports = router;
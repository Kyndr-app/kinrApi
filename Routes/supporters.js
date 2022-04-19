const response = require("../Utils/response");
const express = require("express");
const router = express.Router();
const KyndrService = require("../Services/Kyndr/KyndrService");
const kyndrService = new KyndrService();

router.get("/", async (req, res) => {
  try {
    const userList = await kyndrService.listUsers();
    response.success(req, res, userList, 201);
  } catch (error) {
    response.error(req, res, "Invalid information", 400, "Error", error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await kyndrService.findOneUser({ _id: req.params.id });
    response.success(req, res, user, 201);
  } catch (error) {
    response.error(req, res, "Invalid information", 400, "Error", error);
  }
});

router.post("/", async (req, res) => {
  //{name: "juan"}

  try {
    const newUser = await kyndrService.addUser(req.body.user);
    response.success(req, res, newUser, 201);
  } catch (error) {
    response.error(req, res, "Invalid information", 400, "Error", error);
  }
});

router.patch("/", async (req, res) => {
  //{name: "juan"}

  try {
    const newUser = await kyndrService.updateUser(req.body.id, req.body.user);
    console.log(newUser);
    response.success(req, res, newUser, 201);
  } catch (error) {
    response.error(req, res, "Invalid information", 400, "Error", error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await kyndrService.deleteUser(req.params.id);
    response.success(req, res, user, 201);
  } catch (error) {
    response.error(req, res, "Invalid information", 400, "Error", error);
    console.log(error);
  }
});

module.exports = router;

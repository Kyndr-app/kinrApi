const response = require("../Utils/response");
const express = require("express");
const router = express.Router();
const KyndrService = require("../Services/Kyndr/KyndrService");
const kyndrService = new KyndrService();

router.get("/", async (req, res) => {
  try {
    const beneficiaryList = await kyndrService.listBeneficiaries();

    response.success(req, res, beneficiaryList, 201);
  } catch (error) {
    console.log(error);
    response.error(req, res, "Invalid information", 400, "Error", error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await kyndrService.findOneBeneficiary({ _id: req.params.id });
    response.success(req, res, user, 201);
  } catch (error) {
    console.log(error);
    response.error(req, res, "Invalid information", 400, "Error", error);
  }
});

router.post("/", async (req, res) => {
  try {
    const newUser = await kyndrService.addUser(req.body.user);
    const newBeneficiary = await kyndrService.addBeneficiary({
      user: newUser._id,
    });

    response.success(
      req,
      res,
      await kyndrService.findOneBeneficiary({ _id: newBeneficiary._id }),
      201
    );
  } catch (error) {
    console.log(error);
    response.error(req, res, "Invalid information", 400, "Error", error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const beneficiary = await kyndrService.findOneBeneficiary({
      _id: req.params.id,
    });
    const newUser = await kyndrService.updateUser(
      beneficiary.user,
      req.body.user
    );
    response.success(req, res, newUser, 201);
  } catch (error) {
    console.log(error);
    response.error(req, res, "Invalid information", 400, "Error", error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const beneficiary = await kyndrService.deleteBeneficiary(req.params.id);
    const user = await kyndrService.deleteUser(beneficiary.user);
    response.success(req, res, { beneficiary, user }, 201);
  } catch (error) {
    response.error(req, res, "Invalid information", 400, "Error", error);
    console.log(error);
  }
});

module.exports = router;

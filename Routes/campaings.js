const express = require("express");
const router = express.Router();
const response = require("../Utils/response");
const KyndrService = require("../Services/Kyndr/KyndrService");
const kyndrService = new KyndrService();

router.get("/", async (req, res) => {
    try {
      const campaing = await kyndrService.listCampaings(
        { name: req.body.organization_name });
        console.log(req.body.organization_name)
      response.success(req, res, campaing, 201);
    } catch (error) {
      console.log(error);
      response.error(req, res, "Invalid information", 400, "Error", error);
    }
  });

router.get("/:campaing_title", async (req, res) => {
    try {
      const campaing = await kyndrService.findOneCampaing(
        { title: req.params.campaing_title },

      );
  
      response.success(req, res, campaing, 201);
    } catch (error) {
      console.log(error);
      response.error(req, res, "Invalid information", 400, "Error", error);
    }
  });

router.post("/:organization_name", async (req, res) => {
  try {
    const campaing = await kyndrService.addCampaing(
      { name: req.params.organization_name },
      req.body.campaing
    );

    response.success(req, res, campaing, 201);
  } catch (error) {
    console.log(error);
    response.error(req, res, "Invalid information", 400, "Error", error);
  }
});


router.patch("/:campaing_title", async (req, res) => {
    try {
      const campaing = await kyndrService.updateCampaing(
        { title: req.params.campaing_title },
        req.body.campaing
      );
  
      response.success(req, res, campaing, 201);
    } catch (error) {
      console.log(error);
      response.error(req, res, "Invalid information", 400, "Error", error);
    }
  });

module.exports = router;

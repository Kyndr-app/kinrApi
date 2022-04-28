const express = require("express");
const router = express.Router();
const response = require("../Utils/response");
const KyndrService = require("../Services/Kyndr/KyndrService");
const kyndrService = new KyndrService();

router.get("/", async (req, res) => {
    try {
        const organizations  = await kyndrService.listOrganizations();
    
        response.success(req, res, organizations, 201);
      } catch (error) {
        console.log(error);
        response.error(req, res, "Invalid information", 400, "Error", error);
      }
});

router.get("/:name", async (req, res) => {

    try {
        const organization  = await kyndrService.findOneOrganization({name: req.params.name});
    
        response.success(req, res,organization , 201);
      } catch (error) {
        console.log(error);
        response.error(req, res, "Invalid information", 400, "Error", error);
      }

});

router.post("/", async (req, res) => {
  try {
      const organization  = await kyndrService.addOrganization(req.body.organization);
  
      response.success(req, res, organization, 201);
    } catch (error) {
      console.log(error);
      response.error(req, res, "Invalid information", 400, "Error", error);
    }
});

router.patch("/:name", async (req, res) => {
    try {
        const organization  = await kyndrService.updateOrganization({name: req.params.name}, req.body.organization);
    
        response.success(req, res,organization , 201);
      } catch (error) {
        console.log(error);
        response.error(req, res, "Invalid information", 400, "Error", error);
      }

});

router.delete("/:name", async (req, res) => {
    try {
        const organization = await kyndrService.deleteOrganization({name: req.params.name});
    
        response.success(req, res, organization, 201);
      } catch (error) {
        console.log(error);
        response.error(req, res, "Invalid information", 400, "Error", error);
      }
});





module.exports = router;

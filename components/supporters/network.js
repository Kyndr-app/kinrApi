const response = require("../../Utils/response");
const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", async (req, res) => {
  controller
    .getSupporters()
    .then((supportersList) => {
      response.success(req, res, supportersList, 201);
    })
    .catch((e) => {
      response.error(req, res, "Error", 400, e);
    });
});

router.post("/", async (req, res) => {
  //{fist_name: "juan", last_name: "perez"}
  controller
    .storageSupporter(req.body.supporter)
    .then((fullSupporter) => {
      response.success(req, res, fullSupporter, 200);
    })
    .catch((e) => {
      response.error(req, res, "Invalid information", 400, "Error", e);
    });
});

module.exports = router;

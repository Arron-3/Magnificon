const router = require("express").Router();
const ReportIncidentController = require("../controllers/ReportIncidentController");

router.post("/create", ReportIncidentController.createReportIncident);

router.get("/:id", ReportIncidentController.getReportIncidentById);

router.get("/", ReportIncidentController.getReportIncidentList);

router.get("/count/:filter", ReportIncidentController.getReportIncidentCount);

module.exports = router;

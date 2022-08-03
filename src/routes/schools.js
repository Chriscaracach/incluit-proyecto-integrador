var express = require("express");
var router = express.Router();
const {
  addSchool,
  getAllSchools,
  getSchoolById,
  deleteSchoolById,
  updateSchoolById,
} = require("../controllers/schools.controller");

router.get("/", getAllSchools);
router.get("/:id", getSchoolById);
router.post("/", addSchool);
router.delete("/:id", deleteSchoolById);
router.patch("/:id", updateSchoolById);

module.exports = router;

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

//Éstas rutas se dejan acá, lo único que se maneja desde otro lado so
//las funciones, las tengo que mandar al controlador
module.exports = router;

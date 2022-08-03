var express = require("express");
var router = express.Router();
const {
  addSchool,
  getAllSchools,
  getSchoolById,
} = require("../controllers/schools.controller");

router.get("/", getAllSchools);
router.get("/:id", getSchoolById);
router.post("/", addSchool);
router.delete("/:id", function (req, res) {
  //Delete por id
  res.send("respond with a resource");
});
router.patch("/:id", function (req, res) {
  //patch por id
  res.send("respond with a resource");
});

//Éstas rutas se dejan acá, lo único que se maneja desde otro lado so
//las funciones, las tengo que mandar al controlador
module.exports = router;

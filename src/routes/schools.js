var express = require("express");
var router = express.Router();

router.get("/schools", function (req, res) {
  //Get a la BBDD de todas las escuelas
  res.send("respond with a resource");
});
router.get("/schools/:id", function (req, res) {
  //Get por id
  res.send("respond with a resource");
});
router.post("/schools", function (req, res) {
  //Post, Recibe datos por body
  res.send("respond with a resource");
});
router.delete("/schools/:id", function (req, res) {
  //Delete por id
  res.send("respond with a resource");
});
router.patch("/schools/:id", function (req, res) {
  //patch por id
  res.send("respond with a resource");
});

//Éstas rutas se dejan acá, lo único que se maneja desde otro lado so
//las funciones, las tengo que mandar al controlador
module.exports = router;

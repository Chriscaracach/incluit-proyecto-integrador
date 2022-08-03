const School = require("../models/school.model");
const {
  saveSchool,
  deleteSchool,
  updateSchool,
  getSchools,
  getById,
} = require("../services/databases/schools.service");

async function addSchool(req, res) {
  try {
    const data = req.body;
    const result = await saveSchool(data);
    res.json(result);
  } catch (error) {
    console.error(err);
    res.status(400);
    res.json(err);
  }
}

async function getAllSchools(req, res) {
  await getSchools()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400);
      console.error(error);
      res.json(error);
    });
}

async function getSchoolById(req, res) {
  await getById(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400);
      console.error(error);
      res.json(error);
    });
}

module.exports = { addSchool, getAllSchools, getSchoolById };

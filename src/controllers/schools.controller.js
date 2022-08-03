const {
  saveSchool,
  deleteSchool,
  updateSchool,
  getSchools,
  getById,
  getByName,
} = require("../services/databases/schools.service");

async function addSchool(req, res) {
  const { name } = req.body;
  const school = await getByName(name);
  if (school.name) {
    res.json({ error: "A school with the same name already exists." });
  } else {
    await saveSchool(req.body)
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.status(400);
        console.error(error);
        res.json(error);
      });
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

async function deleteSchoolById(req, res) {
  await deleteSchool(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400);
      console.error(error);
      res.json(error);
    });
}

async function updateSchoolById(req, res) {
  await updateSchool(req.params.id, req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(400);
      console.error(error);
      res.json(error);
    });
}

module.exports = {
  addSchool,
  getAllSchools,
  getSchoolById,
  deleteSchoolById,
  updateSchoolById,
};

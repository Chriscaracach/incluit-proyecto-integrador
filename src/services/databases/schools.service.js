const School = require("../../models/school.model");

async function saveSchool(schoolData) {
  const school = new School(schoolData);
  return school.save();
}

async function deleteSchool(id) {
  const result = await School.deleteOne({ _id: id });
  return result;
}

async function updateSchool(id, schoolData) {
  //Buscar funcion update en doc de mongoose
}

async function getSchools() {
  return School.find({});
}

async function getById(id) {
  return School.findById(id);
}

module.exports = {
  saveSchool,
  deleteSchool,
  updateSchool,
  getSchools,
  getById,
};

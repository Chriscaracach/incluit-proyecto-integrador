const School = require("../../models/school.model");

async function saveSchool(schoolData) {
  const school = new School(schoolData);
  return school.save();
}

async function deleteSchool(id) {
  return await School.deleteOne({ _id: id });
}

async function updateSchool(id, schoolData) {
  return School.findOneAndUpdate({ _id: id }, schoolData);
}

async function getSchools() {
  return School.find({});
}

async function getById(id) {
  return School.findById(id);
}

async function getByName(name) {
  return School.find({ name: name });
}

module.exports = {
  saveSchool,
  deleteSchool,
  updateSchool,
  getSchools,
  getById,
  getByName,
};

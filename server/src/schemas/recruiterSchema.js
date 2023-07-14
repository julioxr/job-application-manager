const { mongoose } = require("mongoose") //! Es como el import
const { Schema } = mongoose

const recruiterSchema = new Schema({
  nameRecruiter: String,
  mailRecruiter: String,
  companyRecruiter: String,
  urlProfile: String
})

module.exports = recruiterSchema
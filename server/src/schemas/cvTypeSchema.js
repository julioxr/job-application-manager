const { mongoose } = require("mongoose") //! Es como el import
const { Schema } = mongoose

const cvTypeSchema = new Schema({
  cvUrl: String,
  date: Date
})

module.exports = cvTypeSchema
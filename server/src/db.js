const schemesAll = require("./schemas/index.js")
const mongoose = require("mongoose")
const { URI_DB } = process.env

const conn = mongoose.createConnection("mongodb+srv://Pepito:BDOn90kYBFEjgBag@cluster0.7gp9498.mongodb.net/?retryWrites=true&w=majority")

//Modelos/Colecciones
const CV = conn.model("CV",schemesAll.cvTypeSchema)
const Recruiter = conn.model("Recruiter", schemesAll.recruiterSchema)
const Application = conn.model("Application", schemesAll.applicationSchema)


module.exports = {
  CV,
  Recruiter,
  Application
}
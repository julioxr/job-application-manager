const express = require("express")
const applicationsRouter = express()
const {getAplications} = require("../../controllers/aplicationsController/aplicationsController")

//!falta middleware para controlar el error del cliente
applicationsRouter.get("/getApplications",getAplications)


module.exports = applicationsRouter
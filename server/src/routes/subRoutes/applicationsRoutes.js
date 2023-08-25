const express = require("express")
const applicationsRouter = express()
const {createAplications} = require("../../controllers/aplicationsController/aplicationsController")

//!falta middleware para controlar el error del cliente
applicationsRouter.post("/createApplications",createAplications)

module.exports = applicationsRouter
// async function controllerParaCrearPostulacion(req,res) {
//   const {dataMail, dataRecruiter,cv } = req.body
//   let newRecruiter = dataRecruiter.new && await Recruiter.create(dataRecruiter)
//   // if(dataRecruiter.new){
//   //   //Crear un nuevo reclutador con los datos traidos dentro de dataRecruiter
//   //   newRecruiter = Recruiter.create(dataRecruiter)
//   // }
//   const newApplicatgion = Application.create({
//     ...dataMail,
//     cvType:cv,
//     recruiter:newRecruiter._id || dataRecruiter.id
//   })
// }

// const body = {
//   dataMail : {
//     emailSender,
//     titleMail,
//     bodyMail,
//     vacancyTitle,
//     vacancyDescription
//   },
//   dataRecruiter:{
//     new:false || true,
//     id:"" | "90812389218903",
//     name,
//     email,
//     company,
//     urlProfile
//   },
//   cv:"id_cv"
// }

// const bodyPCR = {
//   dataMail : {
//     emailSender,
//     titleMail,
//     bodyMail,
//     vacancyTitle,
//     vacancyDescription
//   },
//   dataRecruiter:{
//     new: true,
//     id:"",
//     name,
//     email,
//     company,
//     urlProfile
//   },
//   cv:"id_cv"
// }
const catchedAsyncError = require("../../utils/catchedAsyncError") 
const DropError = require("../../utils/classError") 
const { CV,Recruiter,Application } = require("../../db")


const createAplications  = async (req,res)=> {
  const {cvData,recruiterData,aplicationData} = req.body
  const newCv = new CV({
    ...cvData,
    date: new Date()
  })
  await newCv.save()
  const newRecruiter = await Recruiter(recruiterData)
  const newAplicationJob = newRecruiter.save().then(res => {
    const newAplicationJob = new Application({
      ...req.body,
      cvType: newCv._id, // Usar el ID del nuevo CV
      recruiter: newRecruiter._id, // Usar el ID del nuevo reclutador
    });
    return newAplicationJob
  })

  await newAplicationJob.save()
  return res.status(200).send("hola")
}



// const applicationSchema = new Schema({
//   _id:String,
//   emailSender: String,
//   vacancyTitle: String,
//   vacancyDescription: String, //Abarca la descripción de Linkedin de la vacante
//   mailTitle: String,
//   mailBody: String,
//   cvType: {type:String, ref:"CV"},
//   recruiter: {type:String, ref:"Recruiter"}
// })



//  /applications/createApplications
module.exports = {
  createAplications: catchedAsyncError(createAplications)
}
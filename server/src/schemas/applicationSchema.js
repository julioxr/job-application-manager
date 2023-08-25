const { mongoose } = require("mongoose") //! Es como el import
const { Schema } = mongoose

const applicationSchema = new Schema({
  _id:String,
  emailSender: String,
  vacancyTitle: String,
  vacancyDescription: String, //Abarca la descripción de Linkedin de la vacante
  mailTitle: String,
  mailBody: String,
  cvType: {type:String, ref:"CV"},
  recruiter: {type:String, ref:"Recruiter"}
})

module.exports = applicationSchema;

//https://stackoverflow.com/questions/11604928/is-there-a-way-to-auto-generate-objectid-when-a-mongoose-model-is-newed
/*
{
   "_id":ObjectId("53402597d852426020000002"),
   "address": {
   "$ref": "address_home",
   "$id": ObjectId("534009e4d852427820000002"),
   "$db": "w3cschoolcc"},
   "contact": "987654321",
   "dob": "01-01-1991",
   "name": "Tom Benzamin"
}

Ejemplo 2
{
    _id: <ObjectId1>,
    username "123xyz",
    contact: {
        phone: "123-456"
        email:
    }
    access: {
        level: 5
        group: "dev"
    }
}
*/
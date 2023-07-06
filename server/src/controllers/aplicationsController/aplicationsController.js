const catchedAsyncError = require("../../utils/catchedAsyncError") 
const DropError = require("../../utils/classError") 



const getAplications  = async (req,res)=> {
  res.status(200).send("llegue bien")
}

module.exports = {
  getAplications: catchedAsyncError(getAplications)
}
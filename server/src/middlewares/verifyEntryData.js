const {DropError} = require("../utils/classError")

//Esta funcion se encarga de corroborar que venga del cliente la informacion necessaria
function verifyEntryData(dataRequired,typeEntry){
  return function(req,res,next){   
    let missingData = ""
    const entryData = req[typeEntry]
    const wasNotSentAllData = dataRequired.some(
      propNeeded => {
        if(!entryData[propNeeded] && !entryData[propNeeded] !== null &&!entryData[propNeeded] !== false && !entryData[propNeeded] !==0 ){ //!es undefined porque los null y los false pueden ser intencionales y requiridos
          missingData = propNeeded
          return true
        }  
      }
    )
    if(wasNotSentAllData)throw new DropError({
      message:`Please sent all data required from client, missing : ${missingData}`,
      status:400,
      succes:false,
      typeError:"client error"
    }) 
    next()
  }
}

module.exports = verifyEntryData
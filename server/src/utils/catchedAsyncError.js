const catchedAsyncError = asyncController => {
  return function(req,res,next){
    asyncController(req,res).catch(err => next(err))
  }
}

module.exports = catchedAsyncError
const express = require("express")
const router = express()
const applicationsRoutes = require("./subRoutes/applicationsRoutes")


router.use("/applications",applicationsRoutes)

module.exports = router
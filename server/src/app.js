const express = require("express")
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require("./routes/index.js")
const server = express();

//todo-->  //Middleware//
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
//todo  //Middleware//


//todo-->  //Endpoints- routes//
server.use ("/", routes)
//todo  //Endpoints- routes//

//todo-->  //express Error handle//
server.use ((err,req,res,next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
}) 
//todo  //express Error handle//

module.exports = server;
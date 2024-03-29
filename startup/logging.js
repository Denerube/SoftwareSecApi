/*jshint esversion: 8 */
const winston = require('winston');
//require('winston-mongodb');
require('express-async-errors');

module.exports = function() {
  winston.exceptions.handle(
    new winston.transports.Console(/*{ colorize: true, prettyPrint: true }*/),
    new winston.transports.File({ filename: 'uncaughtExceptions.log' }));
  
  process.on('unhandledRejection', (ex) => {
    throw ex;
  });
  
 
 //winston.add(winston.transports.File, { filename: '/logs/logfile.log',level:"info"});

 /* winston.add(winston.transports.MongoDB, { 
     db: 'mongodb://localhost/logs',
    level: 'info'
   });  */
};
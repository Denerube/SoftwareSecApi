/*jshint esversion: 8 */
const express = require('express');

const rides = require("../routes/rides");
const apiKeys = require("../routes/apikeys");


module.exports = function(app) {
  app.use(express.json());
  app.use("/",rides);
  app.use("/",apiKeys) 
}
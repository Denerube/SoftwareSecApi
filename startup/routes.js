/*jshint esversion: 8 */
const express = require('express');

const rides = require("../routes/rides");



module.exports = function(app) {
  app.use(express.json());
  app.use("/",rides); 
}
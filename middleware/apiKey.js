/*jshint esversion: 8 */
const {ApiKey,validate} =require("../models/ApiKey");


module.exports = async function (req, res, next) {
  //const token = req.header('x-api-key');
  
  if (!req.header('x-api-key')) return res.status(401).send('Access denied. No token provided.');
  let apikey
  apikey=await ApiKey.findOne({key:req.header('x-api-key')}).select("-__v").select("-_id")
  if (!apikey){
    res.status(400).send('Invalid token.');
  }else{
    next();
  }
  


  /*try {
    const decoded = token
    req.user = decoded; 
    next();
  }
  catch (ex) {
    res.status(400).send('Invalid token.');
  }*/
}
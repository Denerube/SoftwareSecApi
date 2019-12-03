/*jshint esversion: 8 */
const {ApiKey,validate} =require("../models/ApiKey");
const express=require("express");
const router=express.Router();


router.get("/apikeys/:id",async(req,res)=>{
    let apikey
    console.log(`getting by id:${req.params.id}`);
    try{
        apikey=await ApiKey.findOne({key:req.params.id}).select("-__v").select("-_id")
        console.log(apikey.key);
    }catch(error){
        console.log(error)
    }
    if (!apikey) return res.status(404).send("object met opgegeven id niet gevonden");
    res.send(apikey);
});

module.exports=router;
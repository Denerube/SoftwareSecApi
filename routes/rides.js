/*jshint esversion: 8 */
const {Rit} =require("../models/Rit");
const express=require("express");
const router=express.Router();

//GetAll
router.get("/",async(req,res)=>{
 let ritten;
 try{
     ritten=await Rit.find();
 }catch(error){
    console.log(error);
 }
 res.send(flessen);
});

module.exports=router;
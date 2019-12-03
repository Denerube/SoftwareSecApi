/*jshint esversion: 8 */
const {Rit,validate} =require("../models/Rit");
const express=require("express");
const router=express.Router();

//GetAll
router.get("/rides",async(req,res)=>{
 let ritten;
 try{
     ritten=await Rit.find().select("-__v");
 }catch(error){
    console.log(error);
 }
 res.send(ritten);
});

router.get("/rides/:id",async(req,res)=>{
    let rit
    console.log(`getting by id:${req.params.id}`);
    try{
        rit=await Rit.findById(req.params.id).select("-__v")
    }catch(error){
        console.log(error)
    }
    if (!rit) return res.status(404).send("object met opgegeven id niet gevonden");
    res.send(rit);
});

router.post("/rides",async(req,res)=>{
    console.log(`putting in db ${req.body}`);
    
    const {error}=validate(req.body);
    if (error) return res.status(400).send("verficatie error object"+error.details[0].message);
    let rit = new Rit({
        From:req.body.From,
        To:req.body.To,
        Time:new Date().toString()

    });
    await rit.save();
    res.send(rit);
});

module.exports=router;
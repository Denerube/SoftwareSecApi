/*jshint esversion: 8 */
const {Rit,validate} =require("../models/Rit");
const express=require("express");
const router=express.Router();
const apiKey = require("../middleware/apiKey");

//GetAll
router.get("/rides",apiKey,async(req,res)=>{
 let ritten;
 try{
     ritten=await Rit.find().select("-__v");
 }catch(error){
    console.log(error);
 }
 res.send(ritten);
});

router.get("/rides/:id",apiKey,async(req,res)=>{
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

router.post("/rides",apiKey,async(req,res)=>{
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

router.delete("/rides/:id",apiKey,async(req,res)=>{
    const rit= await Rit.findByIdAndRemove(req.params.id);
    if (!rit) return res.status(404).send("niet gevonden");
    res.send(rit);
});

router.put("/rides/:id",apiKey,async(req,res)=>{
    console.log(req.body);
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let rit;
    try {
        rit=await Rit.findByIdAndUpdate(req.params.id,{
            From:req.body.From,
            To:req.body.To,
            Time:req.body.Time
        },{new:true});
    if(!rit) return res.status(404).send("rit niet gevonden");
    }catch(err){
        console.log(err)
    }
    res.send(rit);
});



module.exports=router;
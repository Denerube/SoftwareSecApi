/*jshint esversion: 8 */
const Joi=require("joi");
const mongoose=require("mongoose");
const RitSchema = new mongoose.Schema({
    From:{
        type:String,
        required:true
    },
    To:{
        type:String,
        required:true
    },
    Time:{
        type:String,
        required:false,
        default:new Date().toString()
    }
});
let Rit=mongoose.model("Rit",RitSchema);
function validateRit(rit){
    const schema={
        RitId:Joi.objectId(),
        From:Joi.string(),
        To:Joi.strict(),
        Time:Joi.string()
        };
        return Joi.validate(rit,schema);
}
exports.Rit=Rit;
exports.validate=validateRit;
exports.RitSchema=RitSchema;
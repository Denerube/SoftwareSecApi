/*jshint esversion: 8 */
const Joi=require("joi");
const mongoose=require("mongoose");
const RitSchema = new mongoose.Schema({
    From:{
        type:String,
        required:[true,"From is required"]
    },
    To:{
        type:String,
        required:[true,"To is required"]
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
        From:Joi.string().required(),
        To:Joi.strict().required(),
        Time:Joi.string().optional()
        };
        
        return Joi.validate(rit,schema);
}
exports.Rit=Rit;
exports.validate=validateRit;
exports.RitSchema=RitSchema;
/*jshint esversion: 8 */
const Joi=require("joi");
const mongoose=require("mongoose");
const ApiKeySchema = new mongoose.Schema({
    key:{
        type:String,
        required:[true,"From is required"]
    }
    
});
let ApiKey=mongoose.model("ApiKey",ApiKeySchema);

function validateKey(key){
    const schema={       
        key:Joi.string().required(),
        };
        
        return Joi.validate(key,schema);
}
exports.ApiKey=ApiKey;
exports.validate=validateKey;
exports.ApiKeySchema=ApiKeySchema;
import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    name:{
        type : String,
        required : [true,"name required"],
        minLength : [3,"name must conatin atleast 3 characters"],
    },
    email:{
        type : String,
        required : [true,"email required"],
        validate :[validator.isEmail,"provide valid email"]
    },
    subject:{
        type : String,
        required : [true,"subject required"],
        minLength : [5,"subject must conatin atleast 5 characters"],
    },
    message:{
        type : String,
        required : [true,"message required"],
        minLength : [10,"message must conatin atleast 10 characters"],
    }
});

export const Message = mongoose.model("Message",messageSchema);
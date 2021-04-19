const crypto = require("crypto"); //to generate the token and hash it
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JobSchema = new mongoose.Schema({
    jobs : {
        type : String,
        required : [true,'Enter job']
    },
    location : {
        type : String,
        required : [true,'Enter location name']
    },
    experience : {
        type : String,
        required : [true,'Enter experience name']
    },
    description: {
        type : String,
        required : [true,'Enter description name']
      },
      position: {
        type : String,
        required : [true,'Enter position name']
      },
      createdAt: {
        type: Date,
        default: Date.now,
      }
});

JobSchema.methods.getSignedJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
  };
  
  //Match user entered password to hashed password in database
//   UserSchema.methods.matchPassword = async function (enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password);
//   };
  
  //Generate and hash password token
//   UserSchema.methods.getResetPasswordToken = function () {
//     //Generate the token
//     const resetToken = crypto.randomBytes(20).toString("hex");
  
//     this.resetPasswordToken = crypto
//       .createHash("sha256")
//       .update(resetToken)
//       .digest("hex");
  
    //set expire time to 10 minutes
    // this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;
  
//     return resetToken;
//   };
  
  module.exports = mongoose.model("Job", JobSchema);
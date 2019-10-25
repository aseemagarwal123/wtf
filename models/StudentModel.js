const Joi = require("joi");
const mongoose= require("mongoose");
const jwt =require("jsonwebtoken");


const studentSchema= new mongoose.Schema({
  student_id: {
    type: String,
    required: true,
    unique:true
  },
  student_name: {
    type: String,
    required: true,
  },
  college_name: {
    type: String,
    required: true,
  },
  qrcode: {
    type: String
  }

});

const Student = mongoose.model("Student", studentSchema);


exports.Student =Student;



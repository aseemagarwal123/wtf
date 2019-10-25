const express = require('express');
const {Student} = require("../models/StudentModel");
const qrcode=require('qrcode')
const generateUniqueId=require('generate-unique-id')


exports.findone= async(student_id)=>{
let student = await Student.findOne({student_id: student_id})
return student;
}

exports.savestudent=async(req,res)=>{
var student_id=generateUniqueId()
var Code=await qrcode.toDataURL(student_id)
student=new Student({
student_id:student_id,
student_name:req.student_name,
college_name:req.college_name,
qrcode:Code
});
return student.save()
.then((Data)=>{
return Data
})
.catch((err)=>{
return err
})

}

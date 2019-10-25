


const{HttpCodes,CustomErrors}=require('../response');
const StudentService = require('../services/StudentService');

exports.save= async(req,res)=>{
student=await StudentService.savestudent(req.body)
res.status(200).send({success:true,message:"save successfully",student});
}






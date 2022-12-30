const mongoose=require('mongoose')


const Project = new mongoose.Schema({
name:
    {
        type:String,
        required:true,
    },
description:
    {
        type:String,
        required:true,
    },
technologie:
    {
        type:String,
        required:true,
    },
date:
    {
        type:date,
    },
link:
    {
        type:String
    }


  
})
const project = mongoose.model('project',Project)
module.exports=project

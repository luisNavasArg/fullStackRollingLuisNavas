const {request,response}=require('express');

const  index=(req = request, res=response)=>{
  res.status(200).json({msg:"Realizaste una petición getUsers"})
}
const getOne=(req=request, res=response)=>{
  res.status(200).json({msg:"Realizaste una petición getOneUser"})
}
const update=(req=request, res=response)=>{
  res.status(200).json({msg:"Realizaste una petición updateUser"})
}
const create=(req=request, res=response)=>{
  res.status(201).json({msg:"Realizaste una petición createUser"}
)}
const del=(req=request, res=response)=>{
  res.status(200).json({msg:"Realizaste una petición deleteUser"})
}
module.exports={
  index,
  getOne,
  update,
  create,
  del
}
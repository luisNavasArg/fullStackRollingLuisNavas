const Producto = require('../models/productos');

const index =async(req, res)=>{
  try {
    const productos = await Producto.find();
    return res.status(200).json({data:productos})
  } catch (error) {
    return res.json({error})
  }
}
const getOne=async(req, res)=>{
  const {id}=req.params;
  
  try {
    const producto = await Producto.findById(id);
    console.log(producto);
    return res.status(200).json({producto})

  } catch (error) {
    return res.json({error})
  }
  
}
const update=async(req, res)=>{
  const {id}=req.params;
  const {name,description,price,src}= req.body;
  const productoNew = {name,description,price:Number(price),src};
  console.log(productoNew);
  try {
    let newProduct=await Producto.findByIdAndUpdate(id,productoNew,{new:true});
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.json({error});
  }
  
}
const create=async(req, res)=>{
 
  let {name,description,price,src}=req.body;
  let producto = {name,description,price,src};
  const newProducto = await new Producto(producto) 
  console.log(newProducto);
  try {
    await newProducto.save();
    return res.status(201).json({mgs:'Producto creado con éxito'})
  } catch (error) {
    return res.json({error});
  }
 }
const del=async(req, res)=>{
  const {id}=req.params;
  try {
    await Producto.findByIdAndDelete(id);
    return res.status(200).json({msg:"se eliminó con éxito el producto"})
  } catch (error) {
    return res.json({error});
  }
  
}
const search=async(req,res)=>{
  const {busqueda} = req.query;
  let busquedaMin = busqueda.toLowerCase();
  const productos = await Producto.find();
  let productosconseguidos  = [];
  for (let index = 0; index < productos.length; index++) {
    if((productos[index].name).toLowerCase().includes(busqueda)){
      productosconseguidos=[...productosconseguidos,productos[index]];
    }
  }
  res.json({productosconseguidos})
}
module.exports={
    index,
    getOne,
    update,
    create,
    del,
    search
}
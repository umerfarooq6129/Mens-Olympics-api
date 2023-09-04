const express = require('express');
const MensRanking = require("../models/mens")
const router = new express.Router();

// to create new collection

router.post("/mens",async(req,res)=>{
    try{
      const addMensRecord = await MensRanking(req.body);
      console.log(addMensRecord);
      addMensRecord.save();
    //   const addMens = await addMensRecord.save();
    //   res.status(201).send(addMens);
    //   console.log(addMens);
    }catch(err){
      res.status(404).send(err.message);
    }
  })
  
  // to read all collections by using get methods
  
  router.get("/mens",async(req,res)=>{
    try{
      const readMensRecord = await MensRanking.find({});
      res.send(readMensRecord);
    }catch(err){
      res.status(404).send(err.message);
    }
  })
  
  // to read specific collection by using id
  
  router.get("/mens/:id",async(req,res)=>{
    try{
      const _id = req.params.id;
      const readRecord = await MensRanking.findById({_id});
      res.send(readRecord);
    }catch(err){
      res.status(404).send(err.message);
    }
  })
  
  // to update specific collection by using id using patch method
  
  router.patch("/mens/:id",async(req,res)=>{
    try{ 
      const _id = req.params.id;
      const readRecord = await MensRanking.findByIdAndUpdate(_id,req.body,{
        new:true
      });
      res.send(readRecord);
    }catch(err){
      res.status(404).send(err.message);
    }
  })

  // to Delete specific collection by using id using delete method
  
  router.delete("/mens/:id",async(req,res)=>{
    try{ 
      const _id = req.params.id;
      const delRecord = await MensRanking.findByIdAndDelete(_id);
      res.send(delRecord);
    }catch(err){
      res.status(404).send(err.message);
    }
  })


  module.exports = router;
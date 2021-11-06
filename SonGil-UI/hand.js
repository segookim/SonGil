import express from 'express'
import mongoose from 'mongoose';

// Create Schema
const HandInfo = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    shape: {
      type: String,
      required: true,
    },
    meaning: {
      type: String,
      required: true,
    },
  });

const Hand = mongoose.model("handinfo", HandInfo);

const router = express.Router()

//  @routes GET api/user
//  @desc   Get alluser
//  @access public

router.get('/', async(req,res)=>{
    try{
        const hands = await Hand.find()
        
        console.log("===All hands find===",hands);

        if(!hands) throw Error("No  hands")
        res.status(200).json(hands);
    }catch (e){
        console.log(e);
        res.status(400).json({ msg: e.message });
    }
});


export default router
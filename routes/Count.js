const express = require("express");
const Count = require('../models/count')
const router = express.Router();

router.route('/').post(async(req,res)=>{
    const {count} = req.body;
    const cnt = await Count.create({count})
    if(cnt){
        res.status(200).json({
            count: cnt.count,
        })
    }else{
        res.status(404);
        throw new Error('User Not Found')
    }
});

router.route('/').get(async (req,res)=>{
    const cnt = await Count.find()
    res.json(cnt)
})

router.route('/change').put(async(req,res)=>{
    const {currCnt, op} = req.body;
    const num = Number(currCnt)
    const cnt = await Count.findOne({num})
    if(cnt){
        cnt.count = Number(cnt.count)+Number(op);
        cnt.save();
        res.json({cnt});
    }else{
        res.status(404);
        throw new Error('Count Not Found')
    }
});


module.exports = router;
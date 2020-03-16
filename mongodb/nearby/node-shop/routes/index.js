const express = require('express');
const shop = express.Router();
const db = require('../db/db.js');
const Shop = require('../models/shop.js');

// 2d spare 是mongodb 内建的， 独有的功能
// 1. NOSQL 
// 2. 移动时代， 定位功能
shop.get('/', async(req, res) => {
  Shop
    .find({
      location: {
        $near: [113.986416,27.002649], // $ 在mongodb 里 函数
        $maxDistance: 0.02 //10公里 1 index 距离排序 
        // $lt $  
      } // mongodb 20 
    }).limit(10).exec(function(err, shops) {
      if (err) {
        console.log(err)
      }
      res.json(shops)
    })
})

shop.post('/', async(req, res) => {
  console.log('---shops');
  const fjnz = new Shop({
    name: '大崦村',
    location: [113.97439,26.980026]
  });
  fjnz
    .save((err, saved)=> {
      res.json({
        status:1,
        msg: '插入成功！'
      })
    })
});

module.exports =  (app) => {
  app.use('/shops', shop);
}


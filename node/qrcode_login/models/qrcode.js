// 二维码 schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const QRCodeSchema = new Schema({
  // _id 是否用完
  _allreadyUsed: {
    type: Boolean,
    default: false
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  // 是否扫码
  scanned: {
    type: Boolean,
    default: false
  },
  status: {     //状态码 0-未确定 1-确定授权 -1取消授权
    type: Number,
    default: 0
  },
  url: String,  //跳转 URL 地址
  userInfo: {
    type: Object,
    default: {}
  },
  createdAt: {   //二维码创建时间
    type: Date,
    default: Date.now
  },
  expireAt: {   //过期时间
    type: Date
  }
})

module.exports = mongoose.model('QRCode', QRCodeSchema)
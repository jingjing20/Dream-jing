const db = wx.cloud.database();
const productsCollection = db.collection('products');//表 collection
Page({
    addData() {
        //api
        productsCollection.add({
            data: {
                title: `Product ${(Math.random() * 100).toString()}`,
                price: Math.random() * 1000,
                color: 'blue',
                tags: ["羽绒服","国际品牌"],
                view: Math.random() * 10,
                image: 'https://img.alicdn.com/bao/uploaded/i2/158748311/O1CN01V5og1x2BGUH68w9Gi_!!0-item_pic.jpg'
            }
        }).then(re=>{
            console.log(re);
        })
    }
})
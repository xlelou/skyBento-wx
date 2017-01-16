let Mock = require('mockjs');
var Random = Mock.Random;

Mock.mock(
    "/index/getDishesTypeData",  {
        "data": {
            "list":[
                {
                    "name":'早餐',
                    "id": 1
                },
                 {
                    "name":'午餐',
                    "id": 2
                },
                 {
                    "name":'晚餐',
                    "id": 4
                },
                {
                    "name":'下午茶',
                    "id": 5
                },
                {
                    "name":'精选',
                    "id": 6
                }
            ]
        }
    },
).mock(
    /\/detail\?*/, {
        "data": {
            "name|1-5": '@name',
            "price|1-100.1-2":1,
            "goodsImg":[
                "http://img.redocn.com/sheji/20160225/aecantingcaishijieshaotuijieguanggaoshipinmoban_5908760.jpg"
            ],
        }
    }
).mock(
    /\/comment\?*/, {
        "data": {
            "list": [
                {
                    avatar: "http://tva4.sinaimg.cn/crop.0.66.348.348.180/4d08297djw1ea20skfmaij209q0dhjsc.jpg",
                    userName: "张三",
                    comment: "好吃，美味",
                    star: 4,
                    commentImg: [
                        "http://kd.cache.timepack.cn/o_1b2an5ouc1voros221q1q1f116d9.jpg",
                        "http://kd.cache.timepack.cn/o_1b2an5oucrf51kpdf2f136p1urcb.jpg"
                    ],
                    createTime: new Date()
                },
                {
                    avatar: "http://tva4.sinaimg.cn/crop.0.66.348.348.180/4d08297djw1ea20skfmaij209q0dhjsc.jpg",
                    userName: "李四",
                    comment: "美味不用等。哈哈",
                    star: 2,
                    commentImg: [
                        
                    ],
                    createTime: new Date()
                }
            ]
        }
    }
).mock(
    /\/index\/getDishesData\?id=*/, {
        "data": [
            {
                "img":"http://www.3158.cn/data/i10/20160115/19493403564265791.jpg",
                "name":'台铁猪扒饭',
                "isNew": true,
                "price": 12.50,
                "id": 1,
                "inventory": 33,
                "desc": "新鲜放心的原料来源，严选高档原料肉，可追踪来源"
            }
        ]
    }
);

export default Mock
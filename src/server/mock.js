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
).mock(
    /\/getUserInfo\?*/, {
         "data": {
                    "name":Random.last(),
                    "id":  Random.id(),
                    "tel": "15388888888",
                    "userId": Random.id(),
                    "openId": Random.id(),
             
        }
    }
).mock(
    /\/getAddress\?*/, {
         "data": [
             {
                 id: Random.id(),
                 name: Random.city(true),
                 detail: Random.title(3, 5)
             },
              {
                 id: Random.id(),
                 name: Random.city(true),
                 detail: Random.title(3, 5)
             },
              {
                 id: Random.id(),
                 name: Random.city(true),
                 detail: Random.title(3, 5)
             },
              {
                 id: Random.id(),
                 name: Random.city(true),
                 detail: Random.title(3, 5)
             }
         ]
    }
).mock(
   /\/getTalkTime\?*/, {
    "message" : "成功",
    "data" : {
        "selectTime" : [ {
        "id" : 7,
        "name" : "223",
        "startTime" : "10:30",
        "endTime" : "11:30",
        "remark" : "",
        "weight" : 3
        }, {
        "id" : 8,
        "name" : "444",
        "startTime" : "12:00",
        "endTime" : "15:18",
        "remark" : "",
        "weight" : 2
        }, {
        "id" : 9,
        "name" : "测试",
        "startTime" : "11:30",
        "endTime" : "12:00",
        "remark" : "",
        "weight" : 1
        } ],
        "daylist" : [ {
        "id" : 101,
        "day" : 1479312000000,
        "quantity" : 50,
        "dishesId" : null
        }, {
        "id" : 102,
        "day" : 1479398400000,
        "quantity" : 50,
        "dishesId" : null
        }, {
        "id" : 103,
        "day" : 1479484800000,
        "quantity" : 50,
        "dishesId" : null
        }, {
        "id" : 104,
        "day" : 1479571200000,
        "quantity" : 50,
        "dishesId" : null
        } ]
    },
    "success" : true
    }
);

export default Mock
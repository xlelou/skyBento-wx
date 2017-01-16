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
            "goodsImg|2-5":[Random.image('400x150', '#894FC4', 'Hello')],
        }
    }
).mock(
    /\/desc\?*/, {
        "data": {
            "desc": Random.paragraph()
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
).mock("/get/cart", {
    "data": {
        "goodsId|+1":1,
        "name|1-3":'@name',
        "specifications":["大份","中份","小份"],
        "img":Random.image('50x50', '#894FC4', 'Hello'),
        "price|1-100.1-2": 1
    }
});

export default Mock
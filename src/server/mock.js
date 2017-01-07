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
                    "name":'空挡精选',
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
                "img":Random.image('360x640', '#894FC4', 'Hello'),
                "name":'台铁猪扒饭',
                "isShow": true,
                id: 1,
                "desc": Random.paragraph()
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
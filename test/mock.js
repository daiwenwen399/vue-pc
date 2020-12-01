var Mock = require('mockjs')

var data = Mock.mock({
    'list|1-10': [{
        'id|+1': 1
    }],
    "imgUrl": "@image('720x454', '@color')"
})
console.log(data);
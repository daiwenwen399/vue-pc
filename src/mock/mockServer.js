import Mock from 'mockjs'
import banners from './mbanners.json'

// 一旦运行就会拦截Get请求，请求地址/mock/banners,并最后参数作为响应结果响应~

Mock.mock('/mock/banners', 'get', {
    code: 200,
    // 当随机数据只有一条时，就不在是数组，而是对象
    "data|4": banners,
})
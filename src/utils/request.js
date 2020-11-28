/*
    封装axios拦截器
    1.设置公共的请求地址前缀
    2.请求拦截器：添加公共参数
    3.响应拦截器：
        成功：返回成功的Promise，值为成功的数据
        失败：返回失败的Promise，值为失败的原因
*/

import axios from 'axios'

const instance = axios.create({
    // /就是当前服务器的地址
    baseURL: "/api", // 公共的基础路径
    headers: {
        // 请求头
    },
});

// 设置请求拦截器
instance.interceptors.request.use(
    (config) => {
        // config请求的配置对象，将来发送请求（请求地址，请求参数，请求方式等）都会在config中找
        return config;
    },
);

// 设置响应拦截器
instance.interceptors.response.use(
    // 响应成功，当前响应状态码为2xx
    (response) => {
        //  响应成功不能代表功能成功，只是代表有响应结果
        if (response.data.code === 200) {
            return response.data.data;
        }
        // 响应失败：返回失败的Promise
        return Promise.reject(response.data.message)
    },
    // 响应失败，当前响应状态码不为2xx
    (error) => {
        const message = error.message || "网络错误";
        return Promise.reject(message);
    },
);

export default instance;
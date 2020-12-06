import request from '@utils/request'

// 获取购物车列表
export const reqGetCartList = () => {
    return request({
        method: "GET",
        url: "/cart/cartList",
    })
}

// 添加到购物车(对已有物品进行数量改动)
export const reqAddToCart = (skuId, skuNum) => {
    return request({
        method: "POST",
        url: `/cart/addToCart/${skuId}/${skuNum}`,
    })
}

// 切换商品选中状态
export const reqCheckCart = (skuId, isChecked) => {
    return request({
        method: 'GET',
        url: `/cart/checkCart/${skuId}/${isChecked}`,
    })
}

// 删除购物车商品
export const reqDelCart = (skuId) => {
    return request({
        method: 'DELETE',
        url: `/cart/deleteCart/${skuId}`,
    })
}
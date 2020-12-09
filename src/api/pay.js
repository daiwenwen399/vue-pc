import request from '@utils/request'

// 获取订单交易页信息
export const reqTrade = () => {
    return request({
        method: "GET",
        url: "/order/auth/trade",
    })
}

// 获取我的订单列表
export const reqGetOrderList = (page, limit) => {
    return request({
        method: "GET",
        url: `/order/auth/${page}/${limit}`,
    })
}

// 提交订单
export const reqSubmitOrder = ({
    tradeNo,
    consignee,
    consigneeTel,
    deliveryAddress,
    paymentWay,
    orderComment,
    orderDetailList
}) => {
    return request({
        method: "POST",
        url: "/order/auth/submitOrder",
        params: {
            tradeNo,
        },
        data: {
            consignee, consigneeTel, deliveryAddress, paymentWay, orderComment, orderDetailList
        }
    })
}

// 获取订单支付信息
export const reqGetPayInfo = (orderId) => {
    return request({
        method: "GET",
        url: `/payment/weixin/createNative/${orderId}`,
    })
}
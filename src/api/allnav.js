import request from '@utils/request'
import mockRequest from '@utils/mockrequest'

// 获取首页三级分类数据
export const reqGetAllNav = () => {
    return request({
        method: "GET",
        url: "/product/getBaseCategoryList",
    })
}

// 获取banner数据
export const reqMockBanners = () => {
    return mockRequest({
        method: "GET",
        url: "/banners",
    })
}
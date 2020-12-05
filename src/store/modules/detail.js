import { reqGetProductDetail } from '@api/detail'

export default {
    state: {
        productDetail: {
            categoryView: {},
            skuInfo: {},
            spuSaleAttrList: [],
        },
    },
    getters: {
        categoryView(state) {
            return state.productDetail.categoryView;
        },
        skuInfo(state) {
            return state.productDetail.skuInfo;
        },
        spuSaleAttrList(state) {
            return state.productDetail.spuSaleAttrList;
        },
    },
    actions: {
        async getProductDetail(store, id) {
            const productDetail = await reqGetProductDetail(id)
            store.commit("GET_PRODUCT_DETAIL", productDetail)
        },
    },
    mutations: {
        GET_PRODUCT_DETAIL(state, productDetail) {
            state.productDetail = productDetail
        },
    },
}
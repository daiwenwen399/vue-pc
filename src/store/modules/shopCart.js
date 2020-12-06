import {
    reqGetCartList,
    reqAddToCart,
    // reqCheckCart,
    reqDelCart,
} from '@api/shopcart'

export default {
    state: {
        cartList: [], // 所有购物车数据
    },
    getters: {},
    actions: {
        // 获取购物车列表
        async getCartList({ commit }) {
            const cartList = await reqGetCartList();
            commit('GET_CART_LIST', cartList);
        },
        // 添加到购物车(对已有物品进行数量改动)
        async addToCart({ commit }, { skuId, skuNum }) {
            await reqAddToCart(skuId, skuNum);
            console.log(commit);
            // commit('ADD_TO_CART', cartList);
        },
        // 切换商品选中状态
        /* async checkCart({ commit }, { skuId, isChecked }) {
            await reqCheckCart(skuId, isChecked);
            // commit('CHECK_CART', skuId, isChecked);
        }, */
        // 删除购物车商品
        async delCart({ commit }, skuId) {
            await reqDelCart(skuId);
            commit('DEL_CART', skuId);
        },
    },
    mutations: {
        GET_CART_LIST(state, cartList) {
            state.cartList = cartList;
        },
        /* CHECK_CART(state, val) {
            state
        }, */
        DEL_CART(state, skuId) {
            state.cartList = state.cartList.filter((item) => item.skuId !== skuId)
        },
    },
}
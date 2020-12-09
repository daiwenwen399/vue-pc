import {
    reqGetCartList,
    reqAddToCart,
    reqCheckCart,
    reqDelCart,
} from '@api/shopcart'

export default {
    state: {
        cartList: [], // 所有购物车数据
    },
    getters: {
        isAllCheck(state) {
            return state.cartList.every((value) => {
                if (value.isChecked) return true
                return false
            })
        }
    },
    actions: {
        // 获取购物车列表
        async getCartList({ commit }) {
            const cartList = await reqGetCartList();
            commit('GET_CART_LIST', cartList);
        },
        // 添加到购物车(对已有物品进行数量改动)
        async addToCart({ commit }, { skuId, skuNum }) {
            await reqAddToCart(skuId, skuNum);
            commit('ADD_TO_CART', { skuId, skuNum });
        },
        // 切换商品选中状态
        async checkCart({ commit }, { skuId, isChecked }) {
            await reqCheckCart(skuId, isChecked);
            commit('CHECK_CART', skuId, isChecked);
        },
        // 删除购物车商品
        async delCart({ commit }, skuId) {
            await reqDelCart(skuId);
            commit('DEL_CART', skuId);
        },
        // 全选
        allCheck({ commit, state, dispatch }, newVal) {
            console.log(commit);
            let promises = [];
            const isChecked = newVal ? 1 : 0;
            state.cartList.forEach((cart) => {
                if (cart.isChecked !== isChecked) {
                    const promise = dispatch('checkCart', { skuId: cart.skuId, isChecked })
                    promises.push(promise)
                }
            });
            // 返回promise对象(只有所有dispatch都成功了才成功, 否则就是失败的)
            return Promise.all(promises)
        }
    },
    mutations: {
        GET_CART_LIST(state, cartList) {
            state.cartList = cartList;
        },
        ADD_TO_CART(state, { skuId, skuNum }) {
            state.cartList = state.cartList.map((cart) => {
                if (cart.skuId === skuId) {
                    cart.skuNum += skuNum
                }
                return cart;
            })
        },
        CHECK_CART(state, { skuId, isChecked }) {
            state.cartList = state.cartList.map((cart) => {
                if (cart.skuId === skuId) {
                    cart.isChecked = isChecked
                }
                return cart;
            })
        },
        DEL_CART(state, skuId) {
            state.cartList = state.cartList.filter((item) => item.skuId !== skuId)
        },
    },
}
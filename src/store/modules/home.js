import { reqGetAllNav } from "@api/allnav";

export default {
    state: {
        // 首页三级列表数据
        allNav: [],
    },
    getters: {},
    actions: {
        // 获取首页三级列表数据
        async getAllNav(store) {
            // 发送请求
            const newAllNav = await reqGetAllNav()
            // 触发mutations
            store.commit('GETALLNAV', newAllNav.slice(0, 15))
        },
    },
    mutations: {
        GETALLNAV(state, newAllNav) {
            state.allNav = newAllNav
        },
    },
}
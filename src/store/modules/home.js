import { reqGetAllNav, reqMockBanners } from "@api/allnav";

export default {
    state: {
        // 首页三级列表数据
        allNav: [],
        banners: [],
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
        async getBanners(store) {
            const banners = await reqMockBanners()
            store.commit('GETBANNERS', banners)
        }
    },
    mutations: {
        GETALLNAV(state, newAllNav) {
            state.allNav = newAllNav
        },
        GETBANNERS(state, banners) {
            state.banners = banners;
        }
    },
}
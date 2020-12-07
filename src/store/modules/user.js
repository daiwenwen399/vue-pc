import { reqRegister, reqLogin, reqLoginOut } from '@api/user'

export default {
    state: {
        name: localStorage.getItem("username") || "",
        token: localStorage.getItem("token") || "",
    },
    getters: {},
    actions: {
        async register({ commit }, { phone, password, code }) {
            await reqRegister({ phone, password, code });
            console.log(commit);
        },
        async login({ commit }, { phone, password }) {
            const user = await reqLogin(phone, password);
            commit('TO_LOGIN', user)
        },
        async loginOut({ commit }) {
            await reqLoginOut();
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            commit('LOGIN_OUT');
        },
    },
    mutations: {
        TO_LOGIN(state, user) {
            state.name = user.name
            state.token = user.token
        },
        LOGIN_OUT(state) {
            state.token = "";
            state.name = "";
        },
    },
}
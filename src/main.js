import Vue from 'vue'
import App from './app.vue'

import router from './router'
import store from './store'

// 引入公共样式
import './styles/reset.css'
import './styles/index.css'
// 引入按需加载ui库
import './plugins/element.js'

// 引入mockServer，里面代码一旦加载，就去启动mock服务器，从而拦截相应的请求
import './mock/mockServer'

Vue.config.productionTip = false

new Vue({
    beforeCreate() {
        Vue.prototype.$bus = this;
    },
    render: h => h(App),
    // 应用路由
    router,
    store,
}).$mount("#app")
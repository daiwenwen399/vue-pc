import Vue from 'vue'
import App from './app.vue'

import router from './router'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    // 应用路由
    router,
}).$mount("#app")
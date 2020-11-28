import Vue from 'vue'
import App from './app.vue'

import router from './router'

// 引入公共样式
import './styles/reset.css'
import './styles/index.css'
// 引入按需加载ui库
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    // 应用路由
    router,
}).$mount("#app")
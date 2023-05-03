//引入vue
import Vue from 'vue'
//引入app
import App from './App.vue'

import { mixin } from './mixin'
//关闭Vue的生产提示
Vue.config.productionTip = false
Vue.mixin(mixin)

//创建vm
new Vue({
    el: '#app',
    render: h => h(App)
})
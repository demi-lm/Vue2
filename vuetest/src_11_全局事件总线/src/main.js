//引入vue
import Vue from 'vue'
//引入app
import App from './App.vue'

//关闭Vue的生产提示
Vue.config.productionTip = false


new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this//安装全局事件总线
    }
})
//引入vue
import Vue from 'vue'
//引入app
import App from './App.vue'

//关闭Vue的生产提示
Vue.config.productionTip = false
//应用插件
//创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    // mounted() {
    //     setTimeout(() => {
    //         this.$destroy()
    //     }, 3000);
    // },
})
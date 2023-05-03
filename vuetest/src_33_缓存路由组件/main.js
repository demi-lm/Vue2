//引入Vue
import Vue from "vue";
//引入App
import App from './App';
//引入
import VueRouter from "vue-router";
//引入路由器
import router from './router'

//关闭Vue的生产提示
Vue.config.productionTip = false;
//应用插件
Vue.use(VueRouter)

new Vue({
    el: '#app',
    render: h => h(App),
    router
});



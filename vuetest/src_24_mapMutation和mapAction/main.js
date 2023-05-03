//引入Vue
import Vue from "vue";
//引入App
import App from './App';
//引入vue-resource插件
import vueResource from 'vue-resource'
//引入Vuex
import Vuex from 'vuex'
//引入store
import store from './store/index'

//关闭Vue的生产提示
Vue.config.productionTip = false;
//使用插件
Vue.use(vueResource)

new Vue({
    el: '#app',
    render: h => h(App),
    store, //store:store简写
    beforeCreate() {
        Vue.prototype.$bus = this;
    }
});

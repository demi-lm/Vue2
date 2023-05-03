//引入Vue
import Vue from "vue";
//引入App
import App from './App';

//完整引入
//引入element ui 组件库
import ElementUI from 'element-ui';
//引入element ui 全部样式
import 'element-ui/lib/theme-chalk/index.css';

//关闭Vue的生产提示
Vue.config.productionTip = false;

//应用element ui
Vue.use(ElementUI);

new Vue({
    el: '#app',
    render: h => h(App),

});
//该文件用于创建Vuex中最为核心的store
//引入Vue
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//使用vuex插件
Vue.use(Vuex)
//引入personOptions
import personOptions from './person'
//引入countOptions
import countOptions from './count'
//创建store并暴露(导出）store
export default new Vuex.Store({
modules:{
    countAbout:countOptions,
    personAbout:personOptions
}
})
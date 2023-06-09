//该文件用于创建Vuex中最为核心的store
//引入Vue
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//使用vuex插件
Vue.use(Vuex)
//准备actions--用于响应组件中的动作
const actions = {
    // 'jia'(context, value) {
    //     context.commit('JIA', value)
    // },
    // 'jian'(context, value) {
    //     context.commit('JIAN', value)
    // },
    'jiaOdd'(context, value) {
        context.dispatch('demo1', value)
    },
    'demo1'(context, value) {
        if (context.state.sum % 2) {
            context.commit('JIA', value)
        }
    },
    'jiaWait'(context, value) {
        setTimeout(() => {
            context.commit('JIA', value)
        }, 500);

    },
}
//准备mutations--用于操作数据（state)
const mutations = {
    JIA(state, value) {
        state.sum += value
    },
    JIAN(state, value) {
        state.sum -= value
    },
    ADD_PERSON(state, value) {
        state.personList.unshift(value)
    }
}
//准备state--用于存储数据
const state = {
    sum: 0, //当前的和
    person: '库洛米',
    good: '可爱',
    personList: [{
        id: '001',
        name: '库洛米'
    }]
}
//准备getters--用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

//创建store并暴露(导出）store
export default new Vuex.Store({
    actions, //actions:actions,
    mutations, //mutations:mutations,
    state, //state:state
    getters
})
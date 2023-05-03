import axios from "axios"
import {nanoid} from "nanoid"
export default {
    namespaced: true,
    actions: {
        addPersonWang(context, value) {
            if (value.name.indexOf('美') === 0) {
                context.commit('ADD_PERSON', value)

            } else {
                alert('姓美！！！')
            }
        },
        addPersonServer(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON', {
                        id: nanoid(),
                        name: response.data
                    })
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [{
            id: '001',
            name: '库洛米'
        }]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    },
}
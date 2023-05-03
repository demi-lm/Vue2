export default {
    install(Vue) {
        console.log(111, Vue);

        //全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4)
        });
        //全局指令
        Vue.directive('fbind', { //全局指令
            bind(element, binding) {
                element.value = binding.value
            },
            insertrd(element, binding) {
                element.focus()
            },
            update(element, binding) {
                element.value = binding.value
            }
        });
        //定义混入
        Vue.mixin({
                data() {
                    return {
                        x: 100,
                        y: 200
                    }
                }
            }),
            //给Vue原型上添加方法(vm和vc都能用了)
            Vue.prototype.hello = () => (alert('你好'))
    }
}
<template>
    <!-- 组件结构 -->
    <div class="demo">
        <h2>学校名：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
        <button @click='showX'>点我</button>
    </div>
</template>
<script>
// 组件交互相关的代码（数据，方法等等）
export default {
    name:'app-school',
    data() {
        return {
            name: 'dadafsg',
            address: '上海',
        }
    },
    methods: {
        showX() {
            console.log(this.x);
        }
    },

}
</script>
<style>
/* 组件的样式 */
.demo {
    background-color: aqua;
}
</style>
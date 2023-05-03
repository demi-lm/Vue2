<template>
    <!-- 组件结构 -->
    <div class="demo">
        <h2>学生名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click='showX'>点我</button>
    </div>
</template>
<script>
// 组件交互相关的代码（数据，方法等等）
export default {
    name:'Student',
    data() {
        return {
            name: 'dadafsg',
            age: 12,
        }
    },

}
</script>

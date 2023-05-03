<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM">点我输出上方的DOM</button>
    <School ref="sch"></School>
  </div>
</template>

<script>
//引入School组件
import School from "./components/School.vue";

export default {
  name: "App",
  components: { School },
  data() {
    return {
      msg: "欢迎",
    };
  },
  methods: {
    showDOM() {
      console.log(this.$refs.title);//输出的是真实dom元素
      console.log(this.$refs.sch);//输出的是school vc
    },
  },
};
</script>

<style>
</style>
<template>
  <div class="app">
    <h1>{{ msg }}</h1>
   <Student/>
   <School/>
  </div>
</template>

<script>
//引入School组件
import Student from "./components/Student.vue";
import School from "./components/School.vue";

export default {
  name: "App",
  components: { Student, School },
  data() {
    return {
      msg: "你好啊!",
    };
  },

};
</script>
<style scoped>
.app {
  background-color: yellow;
}
</style>>



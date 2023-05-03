<template>
  <div class="app">
    <h1>{{ msg }},学生姓名是:{{ studentName }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />

    <!-- 通过父组件给子组件绑定一个自定义事件实现子给父传递数据(第一种写法,使用@,v-o,v-on) -->
    <!-- <student v-on:kuluomi="getStudentName"/> -->
    <!-- <student @kuluomi="getStudentName" @demo="m1" /> -->

    <!-- 通过父组件给子组件绑定一个自定义事件实现子给父传递数据(第二种写法,使用ref) -->
    <student ref="student" @click.native="show"/>
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
      studentName: "",
    };
  },
  methods: {
    getSchoolName(name) {
      console.log("收到了学校名!", name);
    },
    getStudentName(name) {
      console.log("收到了学生名!", name);
      this.studentName = name;
    },
    m1() {
      console.log("demo事件被触发");
    },
    show(){
      alert(111)
    }
  },
  mounted() {
    // 绑定自定义事件
    // this.$refs.student.$on('kuluomi',(name)=>{
    //   console.log("收到了学生名!", name);
    //   this.studentName = name;
    // })
    this.$refs.student.$on('kuluomi',this.getStudentName)
    // 绑定自定义事件(一次性)
    // this.$refs.student.$once('kuluomi',this.getStudentName)
  },
};
</script>
<style scoped>
.app {
  background-color: yellow;
}
</style>>



<template>
  <div class="student">
    <h2 >学生名称:{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给app</button>
    <button @click="unbind">解绑kuluomi事件</button>
    <button @click="death">销毁vc</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "库洛米",
      sex: '女',
    };
  },
  methods: {
    sendStudentName(){
      // 触发Student组件实例身上的事件
      this.$emit('kuluomi',this.name)
      // this.$emit('demo')
    },
    unbind(){
      this.$off('kuluomi')//解绑一个自定义事件
      // this.$off(['kuluomi','demo'])//解绑多个自定义事件
      // this.$off()//解绑所有自定义事件
    },
    death(){
      this.$destroy()//销毁当前组件实例,销毁后所有student实例的自定义事件不奏效
    }
  },

};
</script>
<style scoped>
.student{
  background-color: pink;
  margin-top: 30px;
  }
</style>

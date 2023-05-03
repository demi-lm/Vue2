<template>
  <div class="student">
    <h2 >学生名称:{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给school组件</button>
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
  mounted() {
    // console.log(this.$bus);
  },
  methods: {
    sendStudentName(){
      this.$bus.$emit('hello',this.name)
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

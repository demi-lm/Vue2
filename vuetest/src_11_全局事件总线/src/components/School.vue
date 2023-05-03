<template>
  <div class="school">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "北大",
      address: "北京",
    };
  },
  mounted() {
    // console.log(this.$on);
    this.$bus.$on('hello',(data)=>{
      console.log('school组件!!!',data);
    })
  },
  beforeCreate(){
    this.$bus.$off('hello')
  }
};
</script>
<style>
.school {
  background-color: aquamarine;
  padding: 5px;
}
</style>

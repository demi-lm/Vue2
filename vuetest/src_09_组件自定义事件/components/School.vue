<template>
  <div class="school">
    <h2 >学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <button @click="sendSchoolName">把学校名给app</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  props:['getSchoolName'],
  data() {
    return {
      name: "北大",
      address: "北京",
    };
  },
  methods:{
    sendSchoolName(){
      this.getSchoolName(this.name)
    }
  }
};
</script>
<style>
.school{
  background-color: aquamarine;
  padding: 5px;
}
</style>

<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  // beforeDestroy() {
  //   console.log("About组件即将被销毁");
  // },
  // mounted() {
  //   console.log(" About组件挂载",this);
  //   window.aboutRoute = this.$route
  //   window.aboutRouter = this.$router
  // },
  //通过路由规则进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter');
    if (to.meta.isAuth) { //判断是否需要权限
      if (localStorage.getItem('school') === 'kuluomi') {
        next()
      } else {
        alert('学校名不对,无权限')
      }
    } else {
      next()
    }
  },
  //通过路由规则离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave');
    next()
  }
};
</script>

<style></style>
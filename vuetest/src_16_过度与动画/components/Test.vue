<template>
  <div>
    <button @click="iShow = !iShow">显示/隐藏</button>
    <transition name="xiu" appear><h1 v-show="iShow" >你好啊！</h1></transition>
    <!-- 加:appear="true是上来就有出现动画 -->
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      iShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: chartreuse;
}
.xiu-enter-active {
    /* 默认是v- enter-active,有name则是name+-enter-active*/
  animation: xiu 1s;
}
.xiu-leave-active  {
  animation: xiu 1s reverse;
}
@keyframes xiu {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>


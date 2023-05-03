<template>
  <div>
    <button @click="iShow = !iShow">显示/隐藏</button>
    <transition-group name="xiu" appear>
      <h1 key="1" v-show="iShow">你好啊！</h1>
      <h1 key="2" v-show="iShow">你好</h1>
    </transition-group>
    <!-- 加:appear="true是上来就有出现动画 -->
  </div>
</template>

<script>
export default {
  name: "Test2",
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

/* 进入的起点 离开的终点*/
.xiu-enter,
.xiu-leave-to {
  transform: translateX(-100%);
}

.xiu-enter-active,
.xiu-leave-active {
  transition: 0.5s linear;
}

/* 进入的终点 离开的起点*/
.xiu-enter-to,
.xiu-leave {
  transform: translateX(0px);
}
</style>


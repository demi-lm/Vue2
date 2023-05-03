<template>
  <div>
    <button @click="iShow = !iShow">显示/隐藏</button>
    <transition-group name="animate__animated animate__bounce" appear
    enter-active-class="animate__swing"
    leave-active-class="animate__backOutUp">
      <h1 key="1" v-show="iShow">你好啊！</h1>
      <h1 key="2" v-show="iShow">你好</h1>
    </transition-group>
    <!-- 加:appear="true是上来就有出现动画 -->
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "Test3",
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
</style>


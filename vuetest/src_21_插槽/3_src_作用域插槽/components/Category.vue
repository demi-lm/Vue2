<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <!-- 定义一个插槽，等填充 -->
    <slot name="haha" :kuluomi="games">111111111111</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
    };
  },
};
</script>

<style>
.category {
  background-color: aqua;
  height: 300px;
  width: 200px;
}
h3 {
  text-align: center;
  background-color: yellow;
}
img,
video {
  width: 100%;
}
</style>
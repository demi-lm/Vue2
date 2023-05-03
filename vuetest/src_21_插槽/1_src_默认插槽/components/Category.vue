<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <!-- 定义一个插槽，等填充 -->
    <slot>我是一些默认值，当使用者没有传递具体结构时我会出现</slot>
    <!-- <ul>
        <li v-for="(item,index) in listData" :key="index">{{ item }}</li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
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
img ,video{
  width: 100%;
}
</style>
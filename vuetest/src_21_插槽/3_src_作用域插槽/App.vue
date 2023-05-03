<template>
  <div class="container">
    <Category title="游戏" >
      <template scope="aaa" slot="haha">
        <ul>
          <li v-for="(g, index) in aaa.kuluomi" :key="index">{{ g }}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <template slot-scope={kuluomi} slot="haha">
        <ol>
          <li v-for="(g, index) in kuluomi" :key="index">{{ g }}</li>
        </ol>
      </template>
    </Category>
    <Category title="游戏">
      <template scope={kuluomi} slot="haha"> 
        <!-- 结构赋值也行 -->
        <h4 v-for="(g, index) in kuluomi" :key="index">{{ g }}</h4>
      </template>
    </Category>
  </div>
</template>




<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: {
    Category,
  },
};
</script>
<style lang="css">
.container,
.foot {
  display: flex;
  justify-content: space-around;
}

h4 {
  text-align: center;
}
</style>



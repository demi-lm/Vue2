<template>
  <div class="container">
    <Category title="美食">
      <img
        src="https://ts1.cn.mm.bing.net/th/id/R-C.489fcaba69657b3faca56728b01278e9?rik=BiSfoi5SBKj03w&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50062%2f1229.jpg_wh1200.jpg&ehk=UEhgoawbJsEfBXQrlGKcGaY8zIOIGU6ZKzKshz9oNq0%3d&risl=&pid=ImgRaw&r=0"
        alt=""
      />
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
    </Category>
    <Category title="电影">
      <video controls src="https://video.699pic.com/videos/dt/03/b7/ll.mp4"></video>
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
  data() {
    return {
      foods: ["榴莲", "苹果", "香蕉", "菠萝"],
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
      films: ["《教父》", "《拆弹专家》", "《你好李焕英》", "《奇迹坏小孩》"],
    };
  },
};
</script>
<style lang="css">
.container {
  display: flex;
  justify-content: space-around;
}
</style>



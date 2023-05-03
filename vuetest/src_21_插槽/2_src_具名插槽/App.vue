<template>
  <div class="container">
    <Category title="美食">
      <img
        slot="center"
        src="https://ts1.cn.mm.bing.net/th/id/R-C.489fcaba69657b3faca56728b01278e9?rik=BiSfoi5SBKj03w&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50062%2f1229.jpg_wh1200.jpg&ehk=UEhgoawbJsEfBXQrlGKcGaY8zIOIGU6ZKzKshz9oNq0%3d&risl=&pid=ImgRaw&r=0"
        alt=""
      />
      <a slot="footer" href="http://www.baidu.com">更多</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="http://www.baidu.com">单机</a>
        <a href="http://www.baidu.com">联机</a>
      </div>
    </Category>
    <Category title="电影">
      <video
        slot="center"
        controls
        src="https://video.699pic.com/videos/dt/03/b7/ll.mp4"
      ></video>
      <template v-slot:footer>
        <div class="foot">
          <a href="http://www.baidu.com">经典</a>
          <a href="http://www.baidu.com">热门</a>
          <a href="http://www.baidu.com">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
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
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
h4 {
  text-align: center;
}
</style>



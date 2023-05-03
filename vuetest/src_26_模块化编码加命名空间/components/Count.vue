<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前值乘10:{{ bigSum }}</h3>
    <h3>我是{{ person}}，我很{{ good}}</h3>
    <h3 style="color: pink;">下方组件的总人数是{{ personList.length }}</h3>
    <select v-model="n">
      <!-- 两种写法v-model修饰符number强制转成number或
        value前加冒号改成v-bind直接将后面引号转成运算符 -->
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="jiaOdd(n)">当前求和为奇数再加</button>
    <button @click="jiaWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapGetters, mapState ,mapActions ,mapMutations} from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  computed: {
    //借助mapState生成计算属性，从state中读取数据（对象写法）
    ...mapState('countAbout',['sum','person','good']),
    ...mapState('personAbout',['personList']),
    //借助mapGetters生成计算属性，从getter中读取数据（数组写法）
    //计算属性名和读取的名得一样
    ...mapGetters('countAbout',['bigSum']),
  
  },
  methods: {
    ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),
    ...mapActions('countAbout',['jiaOdd','jiaWait']),
    
  },

};
</script>
<style>
button {
  margin-left: 5px;
}
</style>

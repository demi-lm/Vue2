<template>
  <div>
    <h1>当前求和为：{{ sum1 }}</h1>
    <h3>当前值乘10:{{ bigSum }}</h3>
    <h3>我是{{ person1 }}，我很{{ good1 }}</h3>
    <select v-model.number="n">
      <!-- 两种写法v-model修饰符number强制转成number或
        value前加冒号改成v-bind直接将后面引号转成运算符 -->
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  computed: {
    //靠程序员亲自去写计算属性 sum1,person1,good1
    // sum1() {
    //   return this.$store.state.sum;
    // },
    // person1() {
    //   return this.$store.state.person;
    // },
    // good1() {
    //   return this.$store.state.good;
    // },
    // bigSum(){
    //   return this.$store.getters.bigSum;
    // },
    //借助mapState生成计算属性，从state中读取数据（对象写法）
    ...mapState({ sum1: "sum", person1: "person", good1: "good" }),
    //借助mapGetters生成计算属性，从getter中读取数据（数组写法）
    //计算属性名和读取的名得一样
    ...mapGetters(['bigSum']),
  

  },
  methods: {
    increment() {
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      this.$store.commit("JIAN", this.n);
    },
    incrementOdd() {
      this.$store.dispatch("jiaOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.n);
    },
  },

};
</script>
<style>
button {
  margin-left: 5px;
}
</style>
